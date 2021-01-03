Con este método podremos añadir un elemento a un Array

ALIAS :
	Ninguno

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Promesa con el array actualizado

Nivel de Complejidad (Opinión propia) :
	2/10 - Mínima


Uso :
```js
<db>.push(<clave>, <valor>)
```

db : Base de datos a la cual aplicarás este método
clave : clave/propiedad la cual se le añadirá el <valor>
valor : Esto será lo que añadiremos al Array


### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb')
const amigos = new db.crearDB('Amigos')

// Establézcamos un dato simple con un valor de esta forma "[]", NO como un string (Con esto me refiero a que no este dentro de ningún tipo de comillas)

// forma 1
amigos.establecer('Jyn', []) // Al establecer un [] estamos estableciendo un valor válido para el método "push", ya que esto es un Array vacío

// forma 2
let array_vacio = []
amigos.establecer('Jyn' array_vacio)
/*
Visualización del archivo "Amigos.json" actual
{
	"Jyn": []
}
------
Ahora vamos a "pushear" un elemento al Array
*/

// Forma 1 - Recuerda solo utilizar una forma!

amigos.push('Jyn', 'Mica') // "Jyn" es la clave que tiene el array vacío, "Mica" es el valor el cual será el nuevo elemento del Array "Jyn"

// Forma 2

let valor = 'Mica'
let clave = 'Jyn'

amigos.push(`${clave}`, valor)

/*
Visualización después del método :
{
	"Jyn": [
		"Mica"
	]
}
------
Para que sea más notorio el Array utilizemos otra vez el método con otro valor
*/
amigos.push('Jyn', 'Arielito')
/*
Visualización después del método :
{
	"Jyn": [
		"Mica", 
		"Arielito"
	]
}
------
Se ha "pusheado" éxitosamente los datos ^^
*/
```

### [Num. 2] Ejemplo - "Pusheando" elementos a Arrays dentro de propiedades

- Para llegar al valor el cual vamos a "pushear", tendremos que utilizar una "clave_split"

```js

const db = require('megadb')
const amigos2 = new db.crearDB('Amigos2')

// Establézcamos un dato simple con un valor de esta forma "[]", NO como un string (Con esto me refiero a que no este dentro de ningún tipo de comillas)


amigos2.establecer('Anny.amigos', []) // Establezcamos una propiedad con un array vacío

/*
Visualización actual del archivo "Amigos2.json"
{
	"Anny": {
		"amigos": []
	}
}
------
Ahora usemos el método
*/


amigos2.push('Anny.amigos', 'Jyn') // Anny es la clave, amigos es la propiedad que contiene el Array, "Jyn" será el valor el cual "pusheará" al array

/*
Se vería algo así ahora el archivo :

{
	"Anny": {
		"amigos": [
			"Jyn"
		]
	}
}
---------------
Y así es como se usa este método
*/

```