Este método te permite eliminar absolutamente todos los datos de la base que específiques

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	[1] true si se elimino todo correctamente
	[2] false si no se elimino correctamente

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima

Uso :
```js
<db>.purgeall()
```

db : Nombre de la base de datos a la cual se eliminarán todos sus datos


### [Num. 1] Ejemplo - Uso

```js
const db = require('megadb') // Requerimos a megadb
const database = new db.crearDB('Base') // Crearemos una base de datos simple

// Primero establézcamos unos valores, para luego visualizarlos

database.set('MegaStar', 'Programador')
database.set('Jyn', true)
database.set('Tyc', ['Sandía', 'Cerezas'])
database.set('Mica', 100)

let dato = database.datos()
/*
En tu consola podrá aparecerte algo así :

Promise { { 
	"MegaStar": "Programador",
	"Jyn": true,
	"Tyc": ['Sandía', 'Cerezas'],
	"Mica": 100
} }

*/

console.log(dato)

// Ahora hagamos utilización del método

database.purgeall() // Acá lo estamos eliminando todo

let dato2 = database.datos()

console.log('Luego de ser eliminado')
console.log(dato2)

/*Luego :

Promise { { } }
----------------
Esto debido a que ya no tiene nada, puedes comprobar también tu archivo json, deberá de estar así :
{}
*/

```