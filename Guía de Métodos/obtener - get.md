Con este método podremos obtener algún dato que hayamos establecido previamente.

ALIAS :
	[1] get

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Promesa con los datos que se obtuvo.

Nivel de Complejidad (Opinión propia) :
	2/10 - Mínima

Anotaciones : 
	[1] Antes de declarar el método, se debe poner un "await" antes. Al menos de la segunda forma en que lo haremos

Uso :
```js
<db>.obtener(<clave>)
```

db : Nombre de la base de datos a la cual se aplicará el método
clave : Valor que queremos obtener

### [Num. 1] Ejemplo - Obtención simple

```js
const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora establézcamos un dato, para luego obtenerlo ¿Sencillo no?, no voy a entrar en demasiados detalles en los métodos establecer, ya que SE SUPONE, que deberías de haber ya leído un poco antes sobre el método. . . "Conocimientos mínimos"

test.establecer('Pedrito_games', 'Juega Fall Guys') // Establézcamos un valor totalmente random, a la clave "Pedrito_games"

// Obtengamos el valor de "Pedrito_games"
test.obtener('Pedrito_games').then(datos => {
	/*
		Transición : Si no entendiste, porque ponemos "datos" en el console.log, luego del "then". Te explicaré brevemente :
			Ve ese "datos" como una definición, es como si hicieras esto :

			let datos = await test.obtener("Pedrito_games")
			console.log(datos)

			Pero sin el await (Lo podrás ver en la forma número 2)
	*/
	console.log(datos)
})

/*
En tu consola recibirás : 'Juega Fall Guys'

Esto debido a que ese es el valor de la clave "Pedrito_games" en el archivo json (Test.json), puedes comprobarlo
*/
```

### FORMA NÚMERO 2 (USANDO await)

```js
async function Ejemplo () {
/*Acá estamos creando la función async, oder poner a prueba el ejemplo, deberás crear una tu también :
async function <Nombre> () {
	// Contenido de la función
}
<Nombre>() // Ejecutamos la función

Por la comodidad visual, utilizaremos en los ejemplos la forma número 1, y no esta, ya será tu desición acerca de cual usar
*/

const db = require('megadb') // Requerimos a megadb
const test = new db.crearDB('Test') // Crearemos una base de datos simple

// Ahora establézcamos un dato, para luego obtenerlo ¿Sencillo no?, no voy a entrar en demasiados detalles en los métodos establecer, ya que SE SUPONE, que deberías de haber ya leído un poco antes sobre el método. . . "Conocimientos mínimos"

test.establecer('Pedrito_games', 'Juega Fall Guys') // Establézcamos un valor totalmente random, a la clave "Pedrito_games"


let datos = await test.obtener('Pedrito_games') // Ahora, obtengamos el valor de la clave "Pedrito_games", notése el await

console.log(datos)

/*
En tu consola recibirás : 'Juega Fall Guys'

Esto debido a que ese es el valor de la clave "Pedrito_games" en el archivo json (Test.json), puedes comprobarlo
*/

}
Ejemplo()
```

### [Num. 2] Ejemplo - Obteniendo valores de propiedades

- Para poder obtener el valor de una propiedad, utilizaremos una "clave_split", para poder llegar a acceder a ella, veamos

```js
const db = require('megadb') // Requerimos a megadb
const mercado = new db.crearDB('Mercancia') // Crearemos una base de datos simple

// Establezcamos una propiedad a la clave "Mercancia"

// set = ALIAS DEL MÉTODO ESTABLECER

mercado.set('Mercancia', {
	'piña': 100,
	'cambur': 12,
	'fresas': 30,
	'cereales': 20
})

/* Ahora supongamos que queremos obtener el valor de "fresas"

Primero accedamos a "Mercancia", allí se encuentra "fresas"

mercado.obtener('Mercancia.')

// Ahora, dentro de "Mercancia" se encuentra la propiedad "fresas", así que ya podemos poner "fresas"

mercado.obtener('Mercancia.fresas')
// Resultado final :
*/
// Forma 1
mercado.obtener('Mercancia.fresas').then(dato => {
	console.log(dato) 
	/*
		Resultado en la consola : 30 
		30 es lo que vale la propiedad "fresas", si quisieramos obtener otro dato, por ejemplo "cereales", solo habría que cambiar "fresas" por "cereales", ya que "cereales" se encuentra en la propiedad "Mercancia", al igual que "fresas"
	*/
})

// Forma 2

let clave1 = 'Mercancia'

mercado.obtener(`${clave1}.fresas`).then(dato => {
	console.log(dato) 
})
```

### [Num. 3] Ejemplo - Obteniendo Arrays

- Obtener un Array es básicamente lo mismo como obtener cualquier dato normal 

```js
const db = require('megadb') // Requerimos a megadb
const amigo = new db.crearDB('Amigo') // Crearemos una base de datos simple

amigo.establecer('MegaStar', ['RatSageM', 'MoDeR']) // Establézcamos un valor array con diferentes valores

/*
Visualización de la base de datos :
{
	"MegaStar" : ["RatSageM", "MoDeR"]
}

*/

// Obtengamos el valor de "Pedrito_games"
amigo.obtener('MegaStar').then(datos => { // MegaStar es la clave que establecimos antes!

	console.log(datos)
	/*
		Resultado en la consola : ['RatSageM', 'MoDeR']
	*/
	console.log(datos.join('\n')) // Pero podríamos ponerlo más ordenado e iría así 
	/*
		RatSageM
		MoDeR
	*/
})

```