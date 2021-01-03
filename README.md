### ACLARACIONES
Esta guía **NO** pretende ser un de ninguna forma un plagio o suplanto a la **guía oficial de este package** (en https://www.npmjs.com/package/megadb), solamente tiene el fin de ser un "refuerzo" a la guía ORIGINAL del autor del package megadb ("MegaStar"), ya que hay personas las cuales no logran comprénder al 100%, evidentemente este "refuerzo" (Esta guía) ACTUALMENTE NO contiene TODOS los métodos de megadb de la **versión 3.0.0** (Es la versión más reciente de momento tiene 23 métodos en total). **Esta guía actualmente abarca solamente 19 métodos de los 23 totales**, ya que esto también se limita a mis conocimientos de los métodos que sé lo suficientemente bien para poder explícarselos de la mejor forma posible a ustedes de este paquete (package) y por otros motivos.

Si con el tiempo voy dominando más métodos, iré actualizando/añadiendo los nuevos que domine y se los explique acá. Tampoco esperes a que esta guía abarque TODO, todas las formas de establecer un dato, obtenerlo, de imprimirlo/visualizarlo, si, mostraré otras fomas en una que otra ocación, pero mi prioridad será mostrarle la más simple primero, así podrás enténderlo, si quieres aprénderlas todas u otras formas, podrás visitar su documentación oficial. 

Si quieres saber cuales son los métodos los cuales explíco más a fondo acá, podrás ver un poco más abajo, si lo que buscas no se encuentra acá, pues siempre está la guía oficial. 

Además, con el tiempo tal vez añadiré nuevos Ejemplos a la carpeta de "Ejemplos", también añadiré más ejemplos a los métodos si lo veo necesario

Esta guía usa como lenguaje de programación "javascript"

### INSTALACIÓN
```sh
npm install megadb --save
```

### NOTA 
Megadb puede ser utilizado en muchas cosas, como por ejemplo páginas web, proyectos, etc . . . Como tengo experiencia siendo programador con megadb en el ámbito de "Discord", utilizaré la carpeta "Ejemplos" para hacer ejemplos de como utilizar los métodos que enseño en la carpeta "Guía de Métodos" para hacer ejemplos para BOTS de Discord, espero sea de utilidad para esas personas que vienen a esta guía para usar megadb en sus bots para Discord. Así puedo orientarlos a como utilizar los métodos en Discord

### RECOMENDACIÓN
- Antes de que entres a cualquier explicación de cualquier método, déjame recomendarte una lista de lo que deberías de aprénder primero :

[]: Estas son las recomendaciones a aprénder primero en orden:

Y si no tienes ningún conocimiento previo sobre este package, pues mucho mejor, ya que en este mismo orden de métodos voy explícandolo paso a más pasos utilizando palabras como "Como en el archivo "obtener" ", o cosas por el estilo o dejo de explicar de forma demasiado profunda algo, que sé que no esta bien ya que toda la información debe ser la misma, pero sin embargo esta sigue siendo la misma, solo que sin profundisar demasiado

[1] crearDB (Carpeta : "crearDB - memoDB")
[2] Método "establecer" (El resto de métodos es en la carpeta : "Guía de Métodos")
[3] Método "tiene"
[4] Método "obtener"
[5] Método "sumar"
[6] Método "restar"
[7] Método "eliminar"

Estos siete métodos, son los que en mi opinión deberías de aprénder primero, ya que estos son más generales, y que posiblemente uses más

### SINTÁXIS Y MODO DE APRENDIZAJE
[1] ¿Cómo puedo aprénder/ver cada método/constructor?

Es sencillo, primero tendrás que entrar en la carpeta llamada "Guía de Métodos" (Si quieres es ver los constructores crearDB o memoDB, esto se encuentran en la carpeta llamada "crearDB - memoDB"), luego de eso te encontrarás con archivos .md (Markdown) con los nombres de los métodos que actualmente explico sobre megadb, si quieres aprénder sobre un método solamente ingresa al archivo clickeandolo, cuando estés dentro del archivo te encontrarás con información alrespécto del método, forma de uso y algunos ejemplos para que apréndas a poder utilizarlo

[2] A lo largo de las explicaciones de uso podrías encontrar cosas así :
<Alguna Cosa acá adentro>

Eso significa un PARÁMETRO, y TU NO DEBES AÑADIR LOS SIGNOS "<>"

En el ejemplo sería :
<nombre>

Pero tu pondrías : (Sin ningún signo)
nombre 

Nota : Claramente no pondrías "nombre" si no algún dato que yo específique por ejemplo :

Uso:
```js
<db>.datos()
```

<db> : El nombre de la base de datos la cual quieras aplicar el método

Y por ejemplo tu lo tedrías así :

```js

// Supongamos que quieres usar el método "datos"
const db = require('megadb')
const tuBase = new db.crearDB('Base')

tuBase.datos()

/*
tuBase = <db>
*/
```
[3] A lo largo de algunos archivos de métodos podrás encontrarte con cosas así 

"forma 1"

o

"forma 2"

inclusive :

"forma 3"

etc . . .

<!-- O derivados de esas palabras -->

[]: Solamente deberá de usar UNA de las dos formas. La cuales doy, ya depénde de cual usarás, repito solamente UNA forma de las dos, y si hay más de dos formas, pues solamente una, da igual cuantas sean


[4] Los signos [-] y [+] en las explicaciones cuando doy ejemplos de como te quedarían las carpetas (En el caso de los archivos crearDB y memoDB) :

[1]: El signo [-] Se refiere a una carpeta ABIERTA
[2]: El signo [+] Se refiere a un archivo o carpeta no ABIERTA

### JERARQUÍA
Esta es la jerarquía (Ya entenderás porque la llamo así) :
```json
// Esto es un archivo cualquiera de megadb
{
	"clave_principal": { // Esta es una clave PRINCIPAL (Así la llamo yo), es la clave que puede contener muchísmas más claves con más propiedades
		"propiedad": { // Esta es una propiedad, también puede contener más propiedades con valores
			"propiedad_dentrode_propiedad": "valor_de_esta_propiedad" // Esta propiedad contiene un valor, el valor puede ser desde un array hasta un valor boolean, un array vacío, números, strings, números enteros, decimales, etc . . . El mismo valor que puede recibir cualquier variable (Exépto cosas como require, exports, funciones, cosas por el estilo, esas cosas no)
		}
	}
}
```

### ACTUALIZACIONES DE MEGADB O NUEVO CONTENIDO 
- **La versión de megadb que se utiliza en esta guía es la versión 3.0.0**, si el autor del paquete (package) "MegaStar" decide actualizar el mismo paquete, añadirle algún método / corregir alguno, o nuevo contenido, esta guía claramente no se adaptará automáticamente. Cuando yo vea y me entere de que hay algún nuevo contenido. Cuando aprénda a dominarlo y decida ponerlo acá, tendrá su propio tiempo, en ese tiempo esta guía quedaría "obsoleta" sea el caso de alguna mega-actualización, si son cosas leves, dudo que haya cambiado demasiado los métodos, o solo se añadan algunos más.

### MÉTODOS DE MEGADB (v3.0.0)
[Nota] Los que tengan el signo de "✅" al final, son métodos explicados en esta guía (Carpeta: "Guía de Métodos") - Si usted desea informarse de algún método que no este específicado acá, creo que está demás decirle que puede verlo en su documentación oficial de megadb, o por otros medios

Recuerda : ¡Acá de momento sólo abarco 19 métodos de los 23 totales de megadb!

establecer ✅
size ✅
obtener ✅
tiene ✅
eliminar ✅
datos ✅
push ✅
extract ✅
sumar ✅
restar ✅
keys ✅
values ✅
purgeall ✅
ordenar - En algún momento terminaré este
random ✅
existeDB - Hubó un error por parte del Package cuando ejecuté pruebas con este método, por endé no puedo enseñarlo
find ✅
filter - En algún momento terminaré este
map ✅
some ✅
setIndex ✅
delIndex ✅
convert_megadtbs - Este método es especial, si quieres saber que hace puedes ver la documentación oficial de megadb. Demostración de lo que hace : https://youtu.be/rouyoy0SJN0 , ¿Qué por qué no me tomo la molestía de enseñarlo?, porque no me apetece, es así, sin más xD


### LINKS ÚTILES

- **Documentación OFICIAL de megadb** = https://www.npmjs.com/package/megadb
- Documentación de discord.js = https://discord.js.org/#/docs/main/master/general/welcome
