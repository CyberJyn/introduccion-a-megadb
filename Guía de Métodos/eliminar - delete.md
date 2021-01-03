Con este método podrás eliminar un dato **específico** de una base de datos específica.

ALIAS :
	[1] delete

ERRORES :
	[1] Si la propiedad que quieres eliminar NO está en la base de datos que específiques, retornará un error. Puedes comprobar si la base de datos tiene alguna propiedad con el método "tiene" ("has").

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2] método "datos" (Totalmente opcional, ya que se entiende perfectamente lo que hace, pero no estaría mal que hechases un ojito a ese tema que está por aquí "datos.md")

Valores que retorna/devuelve :
	[1] true si la propiedad se elimino correctamente.
	[2] false si la propiedad no se elimino (no existe).

Nivel de Complejidad (Opinión propia) :
	2/10 - Mínima

Uso:
```js
<db>.eliminar(<clave>)

<db>.delete(<clave>)
```

db = Acá pondrás el nombre de la base de datos la cual quieras eliminar alguna propiedad específica
clave = Valor que eliminaremos
<!-- EJEMPLOS -->


### [Num. 1] Ejemplo 

```js
const db = require('megadb') // Acá requerimos a megadb
const niveles = new db.crearDB('Niveles') // Creemos una db

niveles.establecer('Jyn', 10) // Establezcamos un dato

console.log('Todas las propiedades')
console.log(niveles.datos()) /* Primero véamos como esta ahora, devolvería algo así :

Promise { {  
	"Jyn": 10
} }
*/

niveles.eliminar('Jyn') // Eliminemos ahora a la propiedad llamada "Jyn", la que hemos establecido antes

console.log('Después de eliminar la propiedad "Jyn"') 
console.log(niveles.datos()) /* Véamos como queda ahora

Promise { { } }

-----
Ahora no esta la propiedad "Jyn", ya que la hemos eliminado
*/
```

### [Num. 2] Ejemplo : 

Ahora vamos a establecer dos datos, para poder visualizarlo mejor

```js
const db = require('megadb') // Acá requerimos a megadb
const niveles = new db.crearDB('Niveles') // Creemos una db

niveles.establecer('Micaela', 20) // Establezcamos un dato
niveles.establecer('Jyn', 10) // Establezcamos otro dato más

console.log('Todas las propiedades')
console.log(niveles.datos()) /* Primero véamos como esta ahora, devolvería algo así :

Promise { {  
	"Jyn": 10,
	"Micaela": 20
} }
*/

niveles.eliminar('Jyn') // Eliminemos ahora a la propiedad llamada "Jyn", la que hemos establecido antes

console.log('Después de eliminar la propiedad "Jyn"') 
console.log(niveles.datos())/* Véamos como queda ahora


Promise { {
	"Micaela": 10
} }

-----
Ahora no esta la propiedad "Jyn", ya que la hemos eliminado
*/
```

### [Num. 3] Ejemplo :

Ok, ahora vamos a apréndar a usar una "clave_split", ¿Qué es? :
	
Por default una "clave_split" es un ".", por cada "." estaremos accediendo a otro valor más abajo (También me podré referir a esto como "altura"), ¿No lo entiendes? ejemplo :

Supongamos que tenemos esta estructura en un archivo json de nuestra carpeta "mega_databases" o sub-carpeta

```json
"servidor1" {
	"Jyn": "hace una guía"
}
```

Para poder acceder a la propiedad "Jyn", la cual queremos eliminar tendríamos que usar una clave_split, usemosla así :
```js
<db>.eliminar('servidor1.Jyn') // Vemos que el "." está en medio del nombre Jyn y el nombre servidor1, eso se le llama "clave_split", ve el punto como bajar a otro valor/propiedad

//También podríamos usar esto :

let servidor1 = 'servidor1'
let Jyn = 'Jyn'

<db>.eliminar(`${servidor1}.${Jyn}`) // Acá se puede notar mejor el "." en medio de todo
````

¿No lo entiendes?, esta imágen puede ayudarte : <HACER>

Con el "." estamos bajando de la propiedad "servidor1", a la propiedad "Jyn", ponemos un "." por cada propiedad a la que queremos bajar, por ejemplo

Supongamos que ahora tenemos esta propiedad en "Micaela", y queremos eliminar su propiedad "nivel"
```json
{
	"servidor1": {
		"Micaela": {
			"xp": 10,
			"nivel": 1
		}
	}
}
```

Usaríamos así :

```js

// La primera clave a la cual hay que acceder para llegar a "nivel", se llama "servidor1", así que pondremos eso

<db>.eliminar('servidor1')

// La segunda es donde se encuentra "Micaela", y Micaela tiene la propiedad "nivel", así que pondremos Micaela

<db>.eliminar('servidor1.Micaela')

// Ok, ahora que estamos en la propiedad "Micaela", ahora tenemos la propiedad "nivel", y es la que queremos eliminar, así que pongamos "nivel"

<db>.eliminar('servidor1.Micaela.nivel') // Y listo, ahora la propiedad "nivel" de "Micaela", no existe, la eliminamos, ahora en esta parte es donde lo ejecutas, ahora probemos nosotros :

// ----------------------------------------------------------------------
async function  Probando () {

// Acá voy a hacer una pequeña transición para decir que, si quieres poner a prueba este ejemplo, tendrás que crear una función con async (Como la que esta acá arriba), ya que he intentado de todo y pues, a la hora de imprimir los datos, solo encontré la solución de poner un "await", siento mucho el inconveniente, creamos una función async de esta forma
/*
async function <Nombre> () {
	
}

<Nombre>() // Acá ejecutamos la función con async
 
<Nombre> : Esta será el nombre de la función, en mi caso es "Probando"
*/

const db = require('megadb') // Requiramos a megadb
const test = new db.crearDB('Probando') // Creemos una base de datos simple


test.establecer('servidor1', {
	'Micaela': {
		xp: 10,
		nivel: 1
	}
})

// Ahora vamos a imprimir nuestros datos actuales
console.log('Al principio estaba así :\n') 

let datos_antes = await test.datos()
console.log(datos_antes) // Acá es donde imprimimos los datos

let servidor1 = 'servidor1'
let dato2 = 'Micaela'
let dato3 = 'nivel'


test.eliminar(`${servidor1}.${dato2}.${dato3}`)
// UTILIZA SOLAMENTE UNA DE LAS DOS FORMAS
test.eliminar('servidor1.Micaela.nivel') // Y sería lo mismo


// Ahora veamos el resultado
console.log('Luego de eliminar la propiedad "nivel" de la propiedad llamada "Micaela", queda así :\n') 

let datos_luego = await test.datos()
console.log(datos_luego) // Acá es donde imprimimos los datos

/*
Antes : 

Promise { {
	"servidor1": {
		"Micaela": {
			"xp": 10,
			"nivel": 1
		}
	}
} }

Luego de eliminar la propiedad "nivel" de la propiedad llamada "Micaela", queda así :


Promise { {
	"servidor1": {
		"Micaela": {
			"xp": 10
		}
	}
} }

*/
} /*Acá terminamos la función*/

Probemos() // La ejecutamos, (Esto para evitar el mensaje ""await" is only valid async function" - Acá estamos ejecutando la función con async, y nos evitamos ese error )

```

### [Num. 4] Ejemplo - Eliminando una propiedad que tiene más propiedades
Ok, una vez que entendimos esto, vamos a pasar a la pregunta ¿Y qué pasa si elimino una propiedad que tiene más propiedades?, por ejemplo si eliminasemos a "Micaela", que tiene 2 propiedades, "xp" y "nivel". Al hacerlo, eliminariamos a esa propiedad junto con esas dos propiedades. Veamos :

```js
async function Probando () { 
const db = require('megadb') // Requiramos a megadb
const test = new db.crearDB('Probando') // Creemos una base de datos simple


test.establecer('servidor1', {
	'Micaela': {
		xp: 10,
		nivel: 1
	}
})

// Ahora vamos a imprimir nuestros datos actuales
console.log('Al principio estaba así :\n') 

let datos_antes = await test.datos()
console.log( datos_antes ) // Acá es donde imprimimos los datos

test.eliminar('servidor1.Micaela') // Ahora en vez de eliminar la propiedad de "Micaela", eliminaremos a "Micaela" junto con todas sus propiedades


// Ahora veamos el resultado
console.log('Luego de eliminar la propiedad llamada "Micaela" junto con el resto de sus propiedades, queda así :\n') 

let datos_luego = await test.datos()
console.log( datos_luego ) // Acá es donde imprimimos los datos

/*
Antes : 

Promise { {
	"servidor1": {
		"Micaela": {
			"xp": 10,
			"nivel": 1
		}
	}
} }

Luego de eliminar la propiedad llamada "Micaela" junto con el resto de sus propiedades, queda así :

Promise { {
	"servidor1": {}
} }

*/
}

Probando() // Ejecutamos la función que creamos

```
Lo mismo pasaría si eliminasemos la propiedad "servidor1", eliminaríamos a "Micaela" con sus propiedades "xp" y "nivel" también, y si "servidor1" tuviese más propiedades, las eliminaríamos también