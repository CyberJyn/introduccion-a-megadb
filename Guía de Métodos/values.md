Con este método podrás obtener los valores de un lugar específico, o no

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Promesa con un array que contiene los valores de las propiedades

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima

Uso :
```js
<db>.values(<clave>)
```

db : Esta será la base de datos la cual aplicarás el método
clave : Este valor es opcional, acá podes específicar donde es que buscará o dejarlo en blanco

### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb') // requerimos a megadb
const trabajos = new db.crearDB('Trabajos') // Crearemos una base de datos simple

// Primero establceremos unos cuantos datos de forma simple para poder utilizar el método luego
trabajos.set('No Disponible', 'Gerente')
trabajos.set('Disponible', 'Cajero')

/*
Estructura actual del archivo "Trabajos.json"
{
	"No Disponible": "Gerente",
	"Disponible": "Cajero"
}
----------
Ahora pasemos a utilizar el método
*/

console.log( trabajos.values() )
/*
En tu consola podrás ver esto :
Promise { ['Gerente', 'Cajero'] }
----------------
Retorna esto ya que estos son LOS VALORES QUE CONTIENEN las keys 
*/
```

### [Num. 2] Ejemplo - Uso del método dentro de alguna propiedad
```js
const db = require('megadb') // requerimos a megadb
const trabajos2 = new db.crearDB('Trabajos2') // Crearemos una base de datos simple

// Establezcamos propiedades dentro de claves
trabajos2.set('Trabajos', {
	"Disponible": 'Guardia',
	"Ocupado": 'Jefe'
})

/*
Así se verá nuestro archivo .json
{
	"Trabajos": {
		"Disponible": "Guardia",
		"Ocupado": "Jefe"
	}
}
----------------
Ahora pasemos a utilizar el método
*/

console.log(trabajos2.values('Trabajos')) // En "Trabajos" es donde se encuentran los valores que queremos ver
/*
En tu consola recibirás algo así :

Promise { ['Guardia', 'Jefe'] }

*/
```