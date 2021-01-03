/*
Métodos utilizados acá :
	- constructor crearDB - Constructor en : /crearDB - memoDB/crearDB.md
	- establecer - Método en : /Guía de Métodos/establecer - set.md
	- tiene - Método en : /Guía de Métodos/tiene - has.md
	- sumar - Método en : /Guía de Métodos/sumar - add.md
	- restar - Método en : /Guía de Métodos/restar - subtract.md
	- obtener - Método en : /Guía de Métodos/obtener - get.md

Tengo como objetivo al hacer esto, que sepas adaptarte a usar megadb en Discord, así puedas como poder utilizar todos los métodos.
Y sí, como recomendación utilizaremos solamente las ID de los usuarios ya que las ID no se repiten DENTRO DE DISCORD, sé que antes
solo utilizé palabras para explicar los métodos, pero no es la gran diferencia
*/
const Discord = require('discord.js');
const client = new Discord.Client(); const db = require('megadb'); 

client.on('ready', () => {
	console.log(`Conectado como ${client.user.tag}`);
});

const prefix = 'prefix'
const puntos = new db.crearDB('Puntos') // Acá creamos una base de datos simple

client.on('message', async message => { // RECORDEMOS : EL ASYNC - Método OBTENER
/* Haremos que si un bot es el autor del mensaje, o el tipo de mensaje sea de mensaje directo retorne nada, 
o si el contenido del mensaje NO empieza
por el prefix retorne nada así evitamos bucles infinitos
*/
if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type == 'dm') return
/*Definimos args Y comando*/

if (message.content.startsWith(prefix+'mis_puntos')) { 
	
	if (!puntos.tiene(message.author.id)) return message.channel.send(message.author.tag+' Tienes 0 puntos') // Si no está en la db, pues evidentemente, no tiene ningún punto

	// Para obtener datos en Discord, ya por la facilidad del async en el evento message, te recomiendo que utilizes la segunda forma
	let puntos = await puntos.obtener(message.author.id)

	message.channel.send(message.author.tag+' Tiene '+puntos+' puntos')
}

if (message.content.startsWith(prefix+'dar_punto')) {

	if (message.author.id != 'TU_ID') return // Haremos que solamente tu puedas utilizar este comando, recuerda poner acá tu ID DE DISCORD

	let usuario = message.mentions.users.first()

	if (!usuario) return // Si no mencionas a nadie, retorna nada
	if (!puntos.tiene(usuario.id)) puntos.establecer(usuario.id, 0) // Para evitar errores, si el usuario que mencionas no está en la db, establecemos su ID en la db con 0

	usuario.sumar(message.author.id, 1)
	console.log('Punto sumado a ' +usuario.tag+' éxitosamente')
}

if (message.content.startsWith(prefix+'quitar_punto')) {

	if (message.author.id != 'TU_ID') return // Haremos que solamente tu puedas utilizar este comando, recuerda poner acá tu ID DE DISCORD

	let usuario = message.mentions.users.first()

	if (!usuario) return // Si no mencionas a nadie, retorna nada
	if (!puntos.tiene(usuario.id)) puntos.establecer(usuario.id, 0) // Para evitar errores, si el usuario que mencionas no está en la db, establecemos su ID en la db con 0

	usuario.restar(message.author.id, 1)
	console.log('Punto removido a ' +usuario.tag+' éxitosamente')

}

}); /*Fin del Evento Message*/

client.login('Acá va el token del bot'); /*Acá logeas*/