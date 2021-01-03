Con este método podrás obtener todos los datos de una base de datos que específiques. Es decir, todo lo que tenga.

Devuelve / Retorna : Una promesa (Promise) con los datos obtenidos

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos : 
	[1] Método "establecer"
	[2] Constructor crearDB (Carpeta : crearDB - memoDB)

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima

Uso :

```js
<db>.datos()
```

db : Nombre de la base de datos



<!-- EJEMPLOS -->

### [Num. 1] Ejemplo :

```js
const db = require('megadb') // Acá requerimos a megadb

const monedas = new db.crearDB('Monedas') // Creemos una base de datos llamada "Monedas"

// Ahora vamos a establecer los datos en esa misma base de datos usando el método "establecer"
monedas.establecer('Jyn', 300) 
monedas.establecer('Usuario_1', 200)
monedas.establecer('Usuario_2', 100)

// Para tenerlo todo ordenado, vamos a poner el método en una variable (let)
let datos = monedas.datos()

console.log(datos)

/*
En la consola Aparece :


Promise { { 
	"Jyn": 300,
	"Usuario_1": 200,
	"Usuario_2": 100
} }

*/
```




### [Num. 2] Ejemplo 

```js
const db = require('megadb') // Acá requerimos a megadb

const monedas = new db.crearDB('Monedas') // Creemos una base de datos llamada "Monedas"

// Ahora vamos a establecer los datos en esa misma base de datos usando el método "establecer"
monedas.establecer('Jyn', { 
	monedas: 300
}) 
monedas.establecer('Usuario_1', { 
	monedas: 200
})
monedas.establecer('Usuario_2', { 
	monedas: 100
})

// Para tenerlo todo ordenado, vamos a poner el método en una variable (let)
let datos = monedas.datos()

console.log(datos)

/*
En la consola Aparece :


Promise { {
	"Jyn": {
		monedas: 300
	},
	"Usuario_1": {
		monedas: 200
	},
	"Usuario_2": {
		monedas: 100
	}
} }

*/
```




### [Num. 3] Ejemplo
```js
const db = require('megadb') // Acá requerimos a megadb

const monedas = new db.crearDB('Monedas') // Creemos una base de datos llamada "Monedas"

// Ahora vamos a establecer los datos en esa misma base de datos usando el método "establecer"
monedas.establecer('Jyn', { 
	estadísticas: { 
		monedas: 300,
		nivel: 3
	}
}) 
monedas.establecer('Usuario_1', { 
	estadísticas: { 
		monedas: 200,
		nivel: 5
	}
})
monedas.establecer('Usuario_2', { 
	estadísticas: { 
		monedas: 100,
		nivel: 2
	}
})

// Para tenerlo todo ordenado, vamos a poner el método en una variable (let)
let datos = await monedas.datos()
console.log(datos)

/*
En la consola Aparece :


Promise { {
	"Jyn": {
		estadísticas: { 
			monedas: 300,
			nivel: 3
		}
	},
	"Usuario_1": {
		estadísticas: { 
			monedas: 200,
			nivel: 5
		}
	},
	"Usuario_2": {
		estadísticas: { 
			monedas: 100,
			nivel: 2
		}
	}
} }

*/
```