<!-- En algún momento terminaré este, iré haciendo pequeñas updates, si no te gusta ver el tema por pequeñas partes cada cierto tiempo, regresa cuando este comentario haya desaparecido -->
Con este método podrás ordenar de forma descendente algún objeto que específiques, el valor ha ordenar DEBE ser un número

ALIAS :
	[1] sort

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	- Promesa con un array, este array contiene las propiedades ordenadas de forma descendente.

Nivel de Complejidad (Opinión propia) :
	4/10 - Media


Uso :
```js
<db>.ordenar(<clave>, <valor>)

// Alias :
<db>.sort(<clave>, <valor>)
```
db : Base de datos la cual aplicarás el método
clave : Acá es es lugar donde vas a poder específicar donde ordenar, puede ser una clave, o "false", si no ordenaras en un lugar específico (Es decir, ordenar las claves principales)
valor : Si el valor (Los números) que quieres ordenar están dentro de una propiedad, puedes específica acá el nombre de la propiedad, si no es así, puedes poner "false"

 
### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb') // requerimos a megadb
const precios = new db.crearDB('Precios') // Crearemos una base de datos simple

// Ahora establezcamos precios a mercancias, para luego verlos ordenados

precios.establecer('Uvas', 5) // No ponemos al 15 dentro de comillas ya que DEBE ser un número, al ponerlo entre comillas lo convertimos en un string
precios.set('Lechuga', 15)
precios.set('Caramelos', 1)
precios.set('Pollo', 10)

/* Como ven, no me moleste en establecerlos en orden, así podemos ver mejor el método
Estructura actual del archivo "Precios.json"
{
	"Uvas": 5,
	"Lechuga": 15,
	"Caramelos": 1,
	"Pollo": 10
}
------------ 
Ahora pasemos a utilizar el método
*/

// Forma 1 (Usando .then())

precios.sort(false, false).then(resultado => { // Para que compréndas mejor, ve a "resultado" como una definición, es decir es como si hicieras esto :  let resultado = await precios.sort(false, false) - Así entonces con "resultado" nos referimos a este método

	console.log(resultado)

	/*
		En tu consola recibirás esto :

		[
			{ clave: 'Lechuga', valor: 15 },
			{ clave: 'Pollo', valor: 10 },
			{ clave: 'Uvas', valor: 5 },
			{ clave: 'Caramelos', valor: 1 }			
		]

		--------------------
		Como podemos ordenar, "Lechuga" es el que cuesta más, así que está primero que todos, y "Caramelos", pues es el que menos cuesta, así que está de último
	*/

})

// Forma 2 (Usando await) - Debe estar dentro de "async" para poder utilizar esta forma, ya depénde de la situación y de ti de cual  de las dos utilizar

let resultado = await precios.sort(false, false) // Utilizamos el método

console.log(resultado)


	/*
		En tu consola recibirás esto :

		[
			{ clave: 'Lechuga', valor: 15 },
			{ clave: 'Pollo', valor: 10 },
			{ clave: 'Uvas', valor: 5 },
			{ clave: 'Caramelos', valor: 1 }			
		]
	*/

```

### [Num. 2] Ejemplo - Uso dentro de una clave
```js
const db = require('megadb') // requerimos a megadb
const estanteria = new db.crearDB('Estanteria') // Crearemos una base de datos simple

/*Ahora estableceremos un número a cada estantería para verlas ordenadas*/
estanteria.set('Estanteria de Jugetes', 4)
estanteria.set('Estanteria de Dulces', 2)
estanteria.set('Estanteria de Frutas', 1)
estanteria.set('Estanteria de Verduras', 3)

/*
Estructura actual del archivo "Estanteria.json"
{
	"Estanteria de Jugetes": 4,
	"Estanteria de Dulces": 2,
	"Estanteria de Frutas": 1,
	"Estanteria de verduras": 3
}
--------------------
Ahora pasemos a utilizar el método
*/

```

### [Num. 3] Ejemplo - Uso dentro de una propiedad & clave
```js

```