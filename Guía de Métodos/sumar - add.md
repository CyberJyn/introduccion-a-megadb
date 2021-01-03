Este método te permite hacer sumas entre números que hayamos establecido ya, claramente, el valor de la clave/propiedad la cual vayas a sumar, debe ser un número

ALIAS :
	[1] add

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
<db>.sumar(<clave>, <valor>)

// Alias

<db>.add(<clave>, <valor>)
```

db : Nombre de la base de datos la cual aplicará el método
clave : Clave la cual se aplicará la suma
valor : La cantidad la cual será sumada

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
	console.log('Dato antes de ser sumado : '+ dato)
})

/*
Consola :
Dato antes de ser sumado : 1
--------
Ahora vamos a sumar ese número 1
*/

// 'Puntaje' es la clave la cual queremos sumar el número "1"
numeros.sumar('Puntaje', 1)
/*
Visualización actual del archivo "Numeros.json"
{
	"Puntaje": 2
}

2 : La suma de 1 + 1

1 ya que es el valor previo el cual estaba ya establecido, si hubieramos establecido por ejemplo 2, sería 3, de igual forma si hubieramos sumado 2 hubiera sido 3

1 + 1 = 2
1 + 2 = 3
2 + 1 = 3

~~Como en la primaria~~
*/

numeros.obtener('Puntaje').then(dato => {
	console.log('Luego de ser sumado : '+ dato) // Visualizamos el dato
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

// add : Alias del método sumar

// forma 1

cantidad.add('servidor_1.Conteo', 15)

// forma2

let s = 'servidor_1'
let c = 'Conteo' // Recordemos, cuidar mayúsculas y minúsculas

cantidad.add(`${s}.${c}`, 15)


// Ahora visualizemos el dato

cantidad.obtener('servidor_1.Conteo').then(d => {
	console.log(d) // En la consola : 25 -> La suma de 10 + 15
})

```