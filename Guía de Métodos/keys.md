Con este método podrás obtener los valores (Claves) que estén dentro de una propiedad, o no

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Promesa con un array que contiene los nombres de las propiedades(keys)

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima

Uso :
```js
<db>.keys(<clave>)
```

db : Base de datos la cual aplicarás el método
clave : Este valor es opcional, puedes específicar en donde vas a querer buscar o dejarlo en blanco

### [Num. 1] Ejemplo - Uso simple
```js
const db = require('megadb') // Requerimos a megadb
const dato = new db.crearDB('Letras') // Crearemos una base de datos simple

// Establezcamos datos génericos, los valores ahora no son importantes, así que pondré cosas sin importancia como valor
dato.set('A', 10)
dato.set('B', 10)
dato.set('C', 10)
dato.set('D', 10)

/*
Estructura actual del archivo "Letras.json"
{
	"A": 10,
	"B": 10,
	"C": 10,
	"D": 10
}
*/

console.log( dato.keys() )
/*
En tu consola recibirás esto o algo por el estilo :
Promise {  ['A', 'B', 'C', 'D'] }
----------------
Como podemos ver salen las claves principales que establecimos antes (A, B, C, D)
*/
```

### [Num. 3] Ejemplo - Buscando claves dentro de propiedades
```js
const db = require('megadb') // Requerimos a megadb
const dato2 = new db.crearDB('Datos') // Crearemos una base de datos simple

// En este método los valores que establezcamos no son importantes (En estos ejemplos pues solo visualizaremos las claves), pero esta vez utilizaré algo coherente

dato2.establecer('MegaStar', {
	"trabajo": "Programador",
	"permisos": ['Administrador General', 'Líder de Proyecto', 'Creador de megadb'],
	"Área": "JavaScript"
})

// Ok, ahora vamos a buscar dentro de la clave "MegaStar"

// Forma 1

console.log( dato2.keys('MegaStar') )

// Forma 2

let a_buscar = 'MegaStar'
console.log( dato2.keys(a_buscar) )


/*
En tu consola recibirás :
Promise { ['trabajo', 'permisos', 'Área'] }
------------------
Ya que estos son las claves que contiene "MegaStar"
*/
```