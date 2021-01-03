Con este método podremos saber si existe alguna propiedad específica en la db (db = database = base de datos)

ALIAS :
	[1] has

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valores que retorna/devuelve :
	[1] true si la propiedad existe.
	[2] false si la propiedad no existe.

Nivel de Complejidad (Opinión propia) :
	2/10 - Mínima


Uso :
```js
<db>.tiene(<objetivo>)


// Con su alias

<db>.has(<objetivo>)
```

db : Nombre de la base de datos a la cual aplicarás el método
objetivo : La propiedad/valor la cual comprobaremos si existe

### [Num. 1] Ejemplo - Comprobaciones simples

```js
const db = require('megadb') // Requerimos a megadb
const niveles = new db.crearDB('Niveles') // Crearemos una base de datos simple

// Vamos a establecer datos los cuales vamos a comprobar si existe

niveles.establecer('Jyn', { xp: 10, nivel: 5 })
niveles.establecer('Anny', { xp: 130, nivel: 25 })
niveles.establecer('Damián', { xp: 23, nivel: 15 })

/*
En nuestro archivo "Niveles.json" podremos ver esto :

{
	"Jyn": {
		"xp": 10,
		"nivel": 5
	},
	"Anny": {
		"xp": 130,
		"nivel": 25
	},
	"Damián": {
		"xp": 23,
		"nivel": 15
	}
}
*/

// Ahora, utilizaremos el método para poder comprobar si existen algunas claves

if ( niveles.tiene('Jyn') ) console.log('"Jyn" está!')
if ( niveles.tiene('Anny') ) console.log('"Anny" está!')
if ( niveles.has('Damián') ) console.log('"Damián" está!') // has : Alias del método tiene

console.log('\n') // Hagamos un salto de línea opcional para poder visualizar mejor 

// Ahora comprobemos si la db tiene claves que claramente no establecimos, así que sabemos que no las tendra, para hacer esto, vamos a usar el signo de "!" al principio de la condición, esto nos indicaría que : "Si el valor que retorna/devuelve es false, hará ese console.log"

if ( !niveles.has('Arielito') ) console.log('"Arielito" no esta en la db')
if ( !niveles.has('Pedrito') ) console.log('"Pedrito" no esta en la db')
if ( !niveles.has('Maitte') ) console.log('"Maitte" no esta en la db')
if ( !niveles.has('Tyc') ) console.log('"Tyc" no esta en la db')

// También podríamos utilizar 

if ( !niveles.tiene('Jyn') ) console.log('"Jyn" no está!')
	else console.log('"Jyn" si está!') // La clave "Jyn" si está claramente, la acabamos de establecer, así que va a retornar este console.log
```

### VERIFICANDO SI EXISTE UNA PROPIEDAD DE UNA CLAVE

Como ya es común, para esto usaremos una "clave_split". (El ".")

```js
const db = require('megadb') // Requerimos a megadb
const amigos = new db.crearDB('Amigos') // Crearemos una base de datos simple

// Establezcamos una propiedad con un valor en la base de datos "Amigos"
// En este caso no sera la clave "Jyn" ya que no tengo amigos jasjajdfa:( ~~Mentira no~~

amigos.establecer('MegaStar', {
	amigo: 'MoDeR'
})
/*
Estado actual del archivo "Amigos.json"
{
	"MegaStar": {
		"amigo": "MoDer"
	}
}
*/

// Ahora comprobemos si la propiedad "amigo" existe en la clave "MegaStar"

// forma 1

if (amigos.has('MegaStar.amigo')) { 
	console.log('Si está la propiedad "amigo", en la clave "MegaStar"') // Devolverá esto
} else {
	console.log('No esta la propiedad "amigo", en la clave "MegaStar"')
}

// forma 2

let clave1 = 'MegaStar'
let clave2 = 'amigo'

if (amigos.has(`${clave1}.${clave2}`)) { 
	console.log('Si está la propiedad "amigo", en la clave "MegaStar"') // Devolverá esto
} else {
	console.log('No esta la propiedasd "amigo", en la clave "MegaStar"')
}

```

Lo mismo si fuese un Array

```js
const db = require('megadb') // Requerimos a megadb
const amigos = new db.crearDB('Amigos') // Crearemos una base de datos simple

// Establezcamos una propiedad con un valor en la base de datos "Amigos"
amigos.establecer('MegaStar', {
	amigos: ['MoDeR', 'RatSageM', 'Mario']
})
/*
Estado actual del archivo "Amigos.json"
{
	"MegaStar": {
		"amigos": ["MoDeR", "RatSageM", "Mario"]
	}
}
*/

// Ahora comprobemos si la propiedad "amigo" existe en la clave "MegaStar"

if (amigos.has('MegaStar.amigos')) { 
	console.log('Si está la propiedad "amigos", la cual es un Array, en la clave "MegaStar"') // Devolverá esto
} else {
	console.log('No esta la propiedasd "amigos", la cual es un Array, en la clave "MegaStar"')
}

```

En conclusión, podrás comprobar si existe alguna key/propiedad con este método en cualquier "altura" si usas una clave_split