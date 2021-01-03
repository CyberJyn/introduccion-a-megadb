Con este método podrás establecer datos en una base de datos específica, también te permitirá actualizar datos ya establecidos.

ALIAS :
	[1] set

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	- Constructor crearDB (Carpeta : crearDB - memoDB)
	- Como recomendación opcional es que leas el **concepto** de lo que es el método "datos", el cual se encuentra también en esta carpeta

Valores que retorna/devuelve :
	Promesa con los datos actualizados

Nivel de Complejidad (Opinión propia) :
	2/10 - Mínima

Anotaciones :
	[1] Recibe una "clave_split" (Como la gran mayoría de los métodos, explico que es más abajo (Un poco más más abajo))
	[2] Puedes establecer casi cualquier tipo de dato con el método establecer, los mismos datos que pueda recibir una variable por ejemplo números enteros, decimales, valores Boolean, arrays, strings, los puede recibir el método establecer, exépto cosas como funciones, require, etc . . .

Esta en mi opinión es la primera cosa que deberías de aprénder, a establecer datos, para así poder manipularlos.

Uso:
```js
<db>.establecer(<clave>, <valor>)

// ó (con su alias)

<db>.set(<clave>, <valor>)
```

db : Nombre de la base de datos a la cual aplicaremos el método
clave : Clave a la cual estableceremos el valor
valor : Valor que estableceremos a la clave 

### [Num. 1] Ejemplo - Estableciendo un dato - Forma simple

```js
const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora vamos a establecer el valor "Anny", la cantidad de 100 ¿por qué?, porque si. 100 porque si.


// Forma 1
test.establecer('Anny', 100) // Utilizamos una "," para separar la "clave" (Anny) del valor (100) que queremos establecer

// Forma 2
let clave = `Anny` // Hay que recordar manténer el cuidado con las minúsculas y mayúsculas
let valor = 100

test.establecer(`${clave}`, valor) // Utilizamos una "," para separar la "clave" (Anny) del valor (100) que queremos establecer


// EN LAS DOS FORMAS - Anny : Será la clave, y 100 será el valor que tendrá la clave "Anny". La cual podríamos obtener con el método "obtener", podremos ver el resulado viendo nuestro archivo json que hemos creado, en este caso el archivo llamado "Test.json", ubicado en nuestra carpeta "mega_databases"

/*
Se vería algo así :
{
	"Anny": 100
}

*/
```

### [Num. 2] Ejemplo - Establecer una clave con una propiedad

```js
const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora vamos a establecer de clave "Jyn", a la propiedad "Anny" con 100 *Porque sí*

// Forma 1
test.establecer('Jyn', { // "Jyn" es la clave
	'Anny': 100 // Acá establecemos a Anny con 100
})

// Forma 2
let clave = `Jyn`
let	propiedad = `Anny`
let	valor = 100

test.establecer(`${clave}`, {
	propiedad: valor
})

// Forma 3

test.establecer('Jyn.Anny', 100)

	// o
let clave = 'Jyn'
test.establecer(`${clave}.Anny`, 100) // También podría ser en viseversa el tipo de orden antes de la coma

// Forma 4 

let clave = `Jyn`,
	propiedad = `Anny`,
	valor = 100
test.establecer(`${clave}.${propiedad}`, valor)


// Forma 5

let clave_y_propiedad = {
	'Anny': 100
}

test.establecer('Jyn', clave_y_propiedad)

/*
Y bueno, creo que ya entendiste las formas de establecer un dato y como
----------------
En nuestro archivo json podremos ver algo así si usamos una de las cuatro formas formas :

{
	"Jyn": {
		"Anny": 100
	}
}

Ahora establezcamos a la clave 'Jyn', la propiedad 'Anny' la que tendrá otra propiedad llamada 'edad'
*/

test.establecer('Jyn', {
	'Anny': {
		edad: 1
	}
})

/*
En nuestro archivo json podremos ver algo así :

{
	"Jyn": {
		"Anny": {
			"edad": 1
		}
	}
}
*/

```
### [Num. 3] Ejemplo - Establezcamos Arrays, valores Boolean

```js

const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Primero establezcamos un Array, a Jyn

// Forma 1
test.establecer('Jyn', ['Programador', 'Maestro', 'Psicólogo', 'Médico'])

// Forma 2
let array = ['Programador', 'Maestro', 'Psicólogo', 'Médico']
let	clave = 'Jyn'

test.establecer(`${clave}`, array)

/*
Como resultado en nuestro archivo json podríamos ver algo así

{
	"Jyn": [
			"Programador", 
			"Maestro", 
			"Psicólogo", 
			"Médico"
		]
}
*/

// Ahora establezcamos una propiedad en 'Jyn' llamada 'profesiones' la cual contenga ese mismo Array

// Forma 1
test.establecer('Jyn', { 
	'profesiones': ['Programador', 'Maestro', 'Psicólogo', 'Médico']
})

// Forma 2 
let array = ['Programador', 'Maestro', 'Psicólogo', 'Médico']
test.establecer('Jyn', { 
	'profesiones': array
})

/*
Como resultado en nuestro archivo json podríamos ver

{
	"Jyn": { 
		"profesiones": [
			"Programador", 
			"Maestro", 
			"Psicólogo", 
			"Médico"
		]

	}
}
*/

// Ahora establezcamos un valor Boolean en 'Jyn', en este caso true 

// Forma 1
test.establecer('Jyn', true)

// Forma 2 
let boolean = true // También podría ser false
test.establecer('Jyn', boolean)

/*
Como resultado en nuestro archivo json podríamos ver

{
	"Jyn": true
}
*/
```

### [Num. 4] Ejemplo - Estableciendo una clave con una propiedad, con más propiedades

Si, podrías establecer muchas propiedades a más propiedades en esas propiedades . . ., pero yo lo haré hasta acá por este lado de establecer un dato por mi salud mental y porque es hacer básicamente lo mismo (bajar) por cada propiedad/valor que vayas a añadir

```js
const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora vamos a establecer de clave "Jyn", a la propiedad "Anny" con la propiedad "xp" con 10, "nivel" con un valor false, y otra propiedad llamada "informacion" el cual llevará la propiedad "edad" y "notas" el cual será un Array. y otro Array el cual dirá "metas" *Porque sí*

test.establecer('Jyn', {
	'Anny': { // Propiedad "Anny"
		'xp': 10, // A "xp" con 10
		'nivel': false, // "nivel" con valor false
		'información': { // otra propiedad llamada "información"
			'edad': -50, // Edad -50, sí.
			'notas': [20, 10, 15, 19, 18], // Sus notas
			'metas': ['Tener casa', 'Tener familia'] // Sus metas
		}
	}
})

/*
En nuestro archivo json podremos ver algo así :

{
	"Jyn": {
		"Anny": {
			"xp": 10,
			"nivel": false,
			"información": {
				"edad": -50,
				"notas": [20, 10, 15, 19, 18],
				"metas": ["Tener casa", "Tener familia"]
			}
		}
	}
}
*/

```

### [Num. 5] Ejemplo - USANDO UNA CLAVE_SPLIT

Y si queremos establecer dos, tres, o inclusive cinco, ocho datos para una propiedad?, para eso utilizamos una clave_split en este método

¿Qué es?

Por predeterminado una clave split es un "." que va entre cada argumento, la cual indica que debe bajar un valor por cada punto. Veamos un ejemplo si no entendiste
```js
const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora a la clave 'Jyn', le estableceremos más claves, como por ejemplo la clave llamada 'Micaela'

//Forma 1

test.establecer('Jyn.Micaela', 20) // Establezamos dentro de Jyn a Micaela, la cual valdrá 20, véase el "." en medio de las dos palabras, nos indica que "Jyn" irá arriba de "Micaela" y Jyn será la clave de Micaela

//Forma 2
let clave1 = 'Jyn'
let clave2 = 'Micaela'

test.establecer(`${clave1}.${clave2}`, 20)

/*
De las dos formas, podremos ver un resultado así en nuestro archivo json

{
	"Jyn": {
		"Micaela": 20
	}
}
*/

// Ahora a la clave 'Jyn', le estableceremos otras claves, como por ejemplo la clave llamada 'Micaela' con otra clave que llamaremos uhmmm . . . "Damián" por ejemplo, que valdría ahora 30

//Forma 1

test.establecer('Jyn.Micaela.Damián', 30) // Establezamos dentro de Jyn a Micaela, la cual valdrá 30, véase el "." en medio de las dos palabras, nos indica que "Jyn" irá arriba de "Micaela" y Micaela arriba de "Damián" el cual valdrá 30

//Forma 2
let clave1 = 'Jyn'
let clave2 = 'Micaela'
let clave3 = 'Damián'

test.establecer(`${clave1}.${clave2}.${clave3}`, 30)

/*
De las dos formas, podremos ver un resultado así en nuestro archivo json

{
	"Jyn": {
		"Micaela": {
			"Damián": 30
		}
	}
}

*/

```


### ACTUALIZANDO DATOS 


¿Y si queremos cambiar un dato que ya establecimos antes?, no te preocupes, el método establecer también te permite actualizarlos

¿Cómo?, veamos un ejemplo

```js
const db = require('megadb') // Requerimos a megadb
const test2 = new db.crearDB('Test2') // Crearemos una base de datos simple

// Ahora establezcamos un valor a la propiedad "Anny", a la base que creamos, pero acá vamos a utilizar el alias en algunos, es lo mismo si usamos el alias, a la palabara "establecer"

//forma 1
test2.establecer('Anny', 'Dato que Actualizaremos') // Primero establezcamos el dato, este será el dato que actualizaremos

//forma 2
let c = 'Anny'
test2.establecer(`${c}`, 'Dato que Actualizaremos')


/* En nuestra base de datos json llamado "Test2.json" podremos ver esto

{
	"Anny": "Dato que Actualizaremos"
}


Usemos el método .datos para poder visualizar el dato, no te preocupes si no lo entiendes
*/

console.log('Antes de actualizar el dato :\n') // Con los \n damos saltos de líneas, así lo vemos todo más ordenado
console.log(test2.datos())
console.log('\n') // Con los \n damos saltos de líneas, así lo vemos todo más ordenado

//forma 1
test2.establecer('Anny', '¡Hola!, soy el dato actualizado') // Actualizemos la clave "Anny"

//forma2
let unaClave = 'Anny'
let nuevoValor = '¡Hola!, soy el dato actualizado'
test2.establecer(`${unaClave}`, nuevoValor) // Actualizamos la clave "Anny"

console.log('Ahora este es el dato actualizado :\n') // Con los \n damos saltos de líneas, así lo vemos todo más ordenado
console.log(test2.datos())
console.log('\n') // Con los \n damos saltos de líneas, así lo vemos todo más ordenado

/*
En la consola podríamos ver algo así :

ANTES :

Promise { { 
	"Anny": "Dato que Actualizaremos"
} }


AHORA EL DATO ACTUALIZADO :


Promise { { 
	"Anny": "¡Hola!, soy el dato actulizado"
} }

*/

```

### ¿Y SI EL VALOR QUE QUIERO ACTUALIZAR ESTÁ DENTRO DE UNA PROPIEDAD?

Usamos una clave_split.

```js
const db = require('megadb') // Requerimos a megadb
const test3 = new db.crearDB('Test3') // Crearemos una base de datos simple


test3.establecer('Mica', {
	'valor': 'Valor que actualizaremos'
}) // Establezcamos a Mica una propiedad, y el valor de esa propiedad será la que actualizaremos


console.log(test3.datos()) // Visualizemos en la consola los datos antes de actualizarlo

/*
Resultado : podrás ver en tu consola algo así

Promise { { 
	'Mica': {
		'valor': 'Valor que actualizaremos'
	}
} }

---------------------

Ahora vamos a pasar a actualizar la propiedad

Primero pensemos en que dato tenemos que acceder para poder llegar al dato que queremos actualizar, si, primero está la clave "Mica", pongamosla

test.establecer('Mica.')

// Ahora . . . La propiedad "valor", así que pongamosla

test3.establecer('Mica.valor') // El "." es la clave split que usamos en este caso, por cada "." estamos Bajando

// Y por último ponemos el valor al cual lo queremos cambiar, recuerda, separandolo con una ","

test3.establecer('Mica.valor', '¡Este es el dato actualizado!') 


Resultado final :
*/
//forma 1

test3.establecer('Mica.valor', '¡Este es el dato actualizado!')

//forma 2

let c1 = 'Mica'
let c2 = 'valor'

test3.establecer(`${c1}.${c2}`, '¡Este es el dato actualizado!')

	// O
test3.establecr(`${c1}.valor`, '¡Este es el dato actualizado!') 

/*
En nuestro archivo Test.json podremos ver esto :

{
	"Mica": {
		"valor": "¡Este es el dato actualizado!"
	}
}

-------------------------
Hemos actualizado éxitosamente el dato!
*/
```