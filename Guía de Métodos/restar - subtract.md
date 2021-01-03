Este método te permite hacer restas entre números que hayamos establecido ya, claramente, el valor de la clave/propiedad la cual vayas a restar, debe ser un número

ALIAS :
	[1] subtract

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)
	[3] método obtener

Valores que retorna/devuelve :
	[1] true si la propiedad existe.
	[2] false si la propiedad no existe.

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima


Uso
```js
<db>.restar(<clave>, <valor>)

// Alias

<db>.subtract(<clave>, <valor>)
```

db : Nombre de la base de datos la cual aplicará el método
clave : Clave la cual se aplicará la resta
valor : La cantidad la cual será restada

### [Num. 1] Ejemplo

```js
const db = require('megadb') 
const numeros = new db.crearDB('Numeros')

// Vamos a establecer el número "1" a la clave "Puntaje"

numeros.establecer('Puntaje', 1)
/*
Visualización actual del archivo "Numeros.json"
{
	"Puntaje": 1
}

*/

// Ahora obtengamos el valor actual para poder visualizarlo de otra forma (opcional) - get : alias del método obtener
numeros.get('Puntaje').then(dato => {
	console.log('Dato antes de ser restado : '+ dato)
})

/*
Consola :
Dato antes de ser sumado : 1
--------
Ahora vamos a restar ese número 1
*/

// 'Puntaje' es la clave la cual queremos restar el número "1"
numeros.restar('Puntaje', 1)
/*
Visualización actual del archivo "Numeros.json"
{
	"Puntaje": 0
}

0 : La resta de 1 - 1

1 ya que es el valor previo el cual estaba ya establecido, si hubieramos establecido por ejemplo 2, sería 1

Si restasemos 2, sería -1 

1 - 2 = -1

*/

numeros.obtener('Puntaje').then(dato => {
	console.log('Luego de ser restado : '+ dato) // Visualizamos el dato
}) 

```


### [Num. 2] Ejemplo - Sumando valores a propiedades

- Para hacer esto, usamos una "clave_split"


```js
const db = require('megadb') // Requerimos a megadb
const cantidad = new db.crearDB('Cantidad') // Crearemos una base de datos simple

// Establezcamos un valor a una propiedad llamada "Conteo", el cual valdrá 10, la cual estará dentro de la clave "servidor_1"

// forma 1
cantidad.establecer('servidor_1.Conteo', 10)

// forma2

let c1 = 'servidor_1'
let c2 = 'Conteo' // Recordemos, cuidar mayúsculas y minúsculas

cantidad.establecer(`${c1}.${c2}`, 10)

/*
Visualización actual del archivo "Cantidad.json"

{
	"servidor_1": {
		"Conteo": 10
	}
}
-----
Sumemos la propiedad "Conteo", con 15
*/

// subtract : Alias del método restar

// forma 1

cantidad.subtract('servidor_1.Conteo', 15)

// forma2

let s = 'servidor_1'
let c = 'Conteo' // Recordemos, cuidar mayúsculas y minúsculas y SOLO utilizar UNA forma, no las dos, ojo

cantidad.subtract(`${s}.${c}`, 15)


// Ahora visualizemos el dato

cantidad.obtener('servidor_1.Conteo').then(d => {
	console.log(d) // Acá podemos observar el dato en nuestra consola
})

```