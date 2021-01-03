Con este método podrás buscar el primer valor que cumpla la condición del callback

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Esto retornará una promesa con el valor de la primera propiedad que cumpla la condición del callback, de lo contrario retornará **undefined**

Nivel de Complejidad (Opinión propia) :
	4/10 - Media

Uso :
```js
<db>.find(<clave>, <callback()>)
```
db : Base de datos la cual aplicarás el método
clave : Acá pueden haber dos valores, o es "false" (Esto hará que busque entre claves principales) o poner una clave para buscar la condición del "callback" en un lugar específico
callback() : (v) Esta será la condición que buscaremos que se cumpla

### [Num. 1] Ejemplo - Uso Simple (Números)
```js
const db = require('megadb') // requerimos a megadb
const valores = new db.crearDB('Usuarios') // Crearemos una base de datos simple

/*Ok, ahora vamos a establecer unos datos, primero números, luegon strings, luego valores boolean y en Arrays, poco a poco así entenderás y podrás saber que hacer con este método*/

valores.establecer('MegaStar', 100)
valores.establecer('Pedro', 50)

/*
Estructura actual del archivo "Usuarios.json"

{
	"MegaStar": 100,
	"Pedro": 50
}
--------------------------
Ahora busquemos si alguna de las claves principales (MegaStar y Pedro) tienen un valor igual a 100
*/

valores.find(false, (v) => v == 100).then(dato => {
	/*
		Veamos este .then() como una definición, es como hacer esto

		var dato = await valores.find(false, (v) => v == 100)

		Pero poniendo "await", debido a las complicaciones que debo hacer para poder usar ese await, prefiero usar el then, pero no te confundas
	*/
	if (dato === undefined) return console.log('Ninguna clave principal es igual a 100') // Esto lo ponemos por si no encuentra nada, aunque no saldra porque si establecimos antes un valor igual a 100

	console.log(`Si hay un valor igual a ${dato}`) // "Si hay un valor igual a 100" retornará a la consola

	/*
	Explicación 
		Recordemos que ponemos "false" en "clave" para poder buscar entre claves principales. Y no en un lugar específico
		"v" es el valor, ponemos el signo "=>" para poder separarlos, luego ponemos "v" es igual a 100, esa es la condición : "v == 100"
	*/
})

valores.find(false, (v) => v == 200).then(dato => {
	if (dato === undefined) return console.log('Ningún dato es igual a 200') //Retornará esto, ya que no hay ninguno igual a 200

	console.log('Si hay un dato igual a 200') // Si da la casualidad de la vida de que haya alguno, pues retornaría esto
})
```

### [Num. 2] Ejemplo - Uso simple (strings)
```js
const db = require('megadb') // requerimos a megadb
const valores2 = new db.crearDB('Usuarios_2') // Crearemos una base de datos simple

// Ahora establezcamos valores strings para poder usar el método

valores2.establecer('Pedro', 'Programador')
valores2.establecer('Juan', 'Estilista')
/*
Estructura actual del archivo

{
	"Pedro": "Programador",
	"Juan": "Estilista"
}

*/

valores2.find(false, (v) => v == 'Programador').then(resultado => { // Hay que recordar cuidar las mayúsculas y minúsculas cuando busquemos algún valor
	if (resultado === undefined) return console.log('No hay ningún programador') // No retornará esto, pero lo ponemos por si acaso

	console.log('Si hay un programador') // Si retornará esto, si me falta explicación es porque ya la hicé arriba, y bueno, así también ves lo corto que es hacer todo sin las explicaciones xD
})
```

### [Num. 3] Ejemplo - Uso simple (Boolean y Array)
```js
// ------------------------------------------------------------- EJEMPLO PARTE 1 - BOOLEAN
const db = require('megadb') // requerimos a megadb
const valores3 = new db.crearDB('Usuarios_3') // Crearemos una base de datos simple

// Establezcamos unos valores boolean primero

valores3.set('Encendido', true)
valores3.set('Apagado', false)

/*
Estructura actual del arhivo
{
	"Encendido": true,
	"Apagado": false
}
----------------
Ahora busquemos si algún dato es "true"
*/

valores3.find(false, (v) => v == true).then(print => {
	if (print === undefined) return console.log('Ningún dato es true')

	console.log('Si!, un dato es true')
})


// ------------------------------------------------------------- EJEMPLO PARTE 2 - ARRAY
const db = require('megadb') // requerimos a megadb
const valores4 = new db.crearDB('Usuarios_4') // Crearemos una base de datos simple

// Ok, ahora vamos a establecer un array simple

valores4.set("Jyn", ['Soy un dato', 'Soy otro dato', 'Ya no tengo ideas'])

// Ahora vamos a pasar a utilizar el método, pero de forma diferente en el callback, veamos

valores4.find(false, (v) => v.includes('Soy un dato')).then(fin => {
	/*
		utilizamos el método de javascript "includes" para poder ver si el Array que establecimos incluye el dato "Soy un dato"
	*/
	if (fin === undefined) return console.log('Ningún Array tiene un dato llamado "Soy un dato"')

	console.log('Hay un dato llamado "Soy un dato" dentro de algún Array')
})
```

### [Num. 4] Ejemplo - Uso del método dentro de propiedades
Ahora para hacer esto, como es común, usaremos una clave_split (En megadb por defecto es el ".")
```js
const db = require('megadb') // requerimos a megadb
const datos = new db.crearDB('Datos') // Crearemos una base dde datos simple
const datos2 = new db.crearDB('Datos2') // No prestes atención a esto ahora, luego veras

// Establezcamos datos simples dentro de una propiedad

datos.establecer('Trabajos', {
	no_disponible: 'Cajero'
})

// Ahora busquemos si existe algún trabajo no_disponible llamado "Cajero", DENTRO de la clave principal llamada "Trabajos"
// forma 1
datos.find('Trabajos', (v) => v == 'Cajero').then(r => {
	if (r === undefined) return console.log('No hay un trabajo dentro de los valores de las propiedades llamado "Cajero"')

	console.log('Hay un dato disponible de Cajero')
})

// forma 2
let clave = 'Trabajos' // Recordemos cuidar mayúsculas y minúsculas
datos.find(clave, (v) => v == 'Cajero').then(r => {
	if (r === undefined) return console.log('No hay un trabajo no disponible de "Cajero"')

	console.log('Hay un dato disponible de Cajero')
})


// Bien, ahora vamos a establecer un Array en esa propiedad, y utilizemoslo de la misma forma que el ejemplo Num. 3 en la parte 2, y estableceremos eso en la otra base de datos que hicimos antes (datos2)

datos2.establecer('Trabajos', {
	no_disponibles: ['Cajero', 'Gerente', 'Limpiador']
})

datos2.find('Trabajos', (v) => v.includes('Gerente')).then(f => {
	// Recordemos que utilizamos el método ".includes" luego del "v", estamos buscando dentro de las propiedades de "Trabajos"
	if (f === undefined) return console.log('Ningún trabajo no disponible se llama "Gerente"')

	console.log('Si hay un trabajo no disponible llamado "Gerente"')
})

```