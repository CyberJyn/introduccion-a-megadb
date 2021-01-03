Con este método podremos remover/extraer un elemento ESPECÍFICO de un Array

ALIAS :
	Ninguno.

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
<db>.extract(<clave>, <valor>)
```

db : Nombre de la base de datos la cual aplicaremos el método
clave : Este es la clave/propiedad la cual contiene el Array el cual extraeremos el <valor>
valor : Valor que extraeremos de la <clave> (Un array)

### [Num. 1] Ejemplo - Uso simple
```js
const db = require('megadb') // Requerimos a megadb
const items = new db.crearDB('Items') // Crearemos una base de datos simple

// Ahora vamos a establecer un Array

items.establecer('Valores', ['Patilla', 'Cambur', 'Chocolate'])

/*
Estructura actual del archivo "Items.json"
{
	"Valores": [
		"Patilla", 
		"Cambur", 
		"Chocolate"
	]
}
----------
Ahora utilizemos el método para remover el valor "Cambur" de ese Array
*/

// Forma 1 - Recuerda solo utilizar una de las dos formas

items.extract('Valores', 'Cambur') // Removemos "Cambur" de la clave con el Array "Valores"

// Forma 2

let cl = 'Valores'
let vl = 'Cambur'

items.extract(`${cl}`, vl)

/*
Ahora se vería algo así :
{
	"Valores": [
		"Patilla",
		"Chocolate"
	]
}
---------
Como podemos ver, el valor "Cambur" ya no se encuentra allí, se ha extraído éxitosamente el valor
*/
```

### [Num. 2] Ejemplo - Extraer datos de una propiedad

```js
const db = require('megadb') // Requerimos a megadb
const helados = new db.crearDB('Helados') // Crearemos una base de datos simple

// Ahora vamos a establecer un Array a una propiedad

helados.establecer('Inventario', { 
	'Sabores': ['Chocolate', 'Fresa', 'Mantecado', 'Pistacho']
}) // Establézcamos una propiedad como valor un Array

/*
Estructura actual del archivo "Helados.json"
{
	"Inventario": {
		"Sabores": [
			"Chocolate",
			"Fresa",
			"Mantecado",
			"Pistacho"
		]
	}
}
-----------
Ahora vamos a extraer "Chocolate", suponieno que se acabó en su inventario este sabor
*/

// Forma  1 - RECUERDA : Solo utilizar UNA de las dos formas

helados.extract('Inventario.Sabores', 'Chocolate') // Inventario es la clave, así que accedemos, luego está la propiedad "Sabores" la cual contiene el Array, y entonces de ese Array eliminamos "Chocolate"

// Forma  2
let sd = 'Inventario' // Recordemos cuidar mayúsculas y minúsculas
let ch = 'Sabores'

helados.extract(`${sd}.${ch}`, 'Chocolate')

/*
Estructura actual del archivo "Helados.json"
{
	"Inventario": {
		"Sabores": [
			"Fresa",
			"Mantecado",
			"Pistacho"
		]
	}
}
-----------
Se ha extraído éxitosamente el dato!
*/
```
