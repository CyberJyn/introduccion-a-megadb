Este metodo retorna un array con los resultados de la condición que se especifica en el callback

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Esto retornara una promesa con un array que contiene todos los resultados que se especificó en el callback

Nivel de Complejidad (Opinión propia) :
	5/10 - Considerable

Uso
```js
<db>.map(<clave>, <callback()>)
```

db : Base datos a mapear
clave : Este será el lugar donde se va a utilizar el método para comprobar hacer el <callback>
callback() : Aqui deberas de poner la funcion que se ejecutara o evaluara sobre cada elemento iterado del objeto que especificaste en el argumento clave, el callback puede recibir 2 argumentos
	[1] valor_actual (v) : Aqui se mostrara el valor del elemento que se esta procesando en ese momento
	[2] clave_actual (key): Aqui se mostrara la clave del elemento que se esta procesando en ese momento


### [Num. 1] Ejemplo - Uso Simple 
```js
const db = require('megadb') // Requerimos a megadb
const tienda = new db.crearDB('Tienda_dela_esquina') // Creamos una base de datos simple

// Establézcamos datos para luego utilizar el método

tienda.establecer('Chocolate', 5)
tienda.establecer('Fresas', 2)
tienda.establecer('Sandías', 20)
tienda.establecer('Lechuga', 10)
tienda.establecer('Pollo', 30)

/*Visualización actual del archivo "Tienda_dela_esquina.json"
{
	"Chocolate": 5,
	"Fresas": 2,
	"Sandías": 20,
	"Lechuga": 10,
	"Pollo": 30
}
----------
Ahora pasemos a utilizar el método
*/

tienda.map(false, (v, key) => `Objeto: ${key}, precio de ${v}$`).then(dato => {
	console.log(dato) // Esto devuelve un array diciendo lo que pusimos arriba


	// Ó podríamos utilizar ".join('\n')" para poder poner que por cada valor haga un salto de línea, y se vea organizado
	console.log(dato.join('\n')) // Esto los separa por lineas

	/*
		Como pudiste observar en el console.log, dice el mensaje de arriba, tomando la "key" como las claves (Chocolate, Fresas, sandía, etc. . .), las keys son los valores principales los que contiene la base de datos
		y el "v" como el valor que continen esas keys, ponemos "false" ya que estaremos mapeando las keys y no en un lugar específico
	*/
})
/*
Resultado en tu consola :
[
	Objeto : Chocolate, precio de  5$
	Objeto : Fresas, precio de 2$
	Objeto : Sandías, precio de 20$
	Objeto : Lechuga, precio de 10$
	Objeto : Pollo, precio de 30$
]
Objeto : Chocolate, precio de 5$
Objeto : Fresas, precio de 2$
Objeto : Sandías, precio de 20$
Objeto : Lechuga, precio de 10$
Objeto : Pollo, precio de 30$


*/

```

### [Num. 2] Ejemplo - Usando "map" dentro de una clave
Usando una "clave_split", el "."
```js
const db = require('megadb') // Requerimos a megadb
const tienda2 = new db.crearDB('Tienda_dela_esquina2') // Creamos una base de datos simple

// Establézcamos datos para luego utilizar el método

tienda2.establecer('Mercancia1', {
	"Chocolate": 5,
	"Fresas": 2,
	"Sandías": 20,
	"Lechuga": 10,
	"Pollo": 30
})

tienda2.set('Mercancia2', {
	"Cerezas": 15,
	"Chupeta": 10,
	"Galletas": 5,
	"Chicle": 3,
	"Queso": 6.75
})

/*Visualización actual del archivo "Tienda_dela_esquina2.json"
{
	"Mercancia1": {
		"Chocolate": 5,
		"Fresas": 2,
		"Sandías": 20,
		"Lechuga": 10,
		"Pollo": 30
	},
	"Mercancia2": {
		"Cerezas": 15,
		"Chupeta": 10,
		"Galletas": 5,
		"Chicle": 3,
		"Queso": 6.75
	}
}
----------
Ahora pasemos a utilizar el método
*/

/*Primero "mappemos" la Mercancia1*/

tienda2.map('Mercancia1', (v, key) => `Objeto: ${key}, precio de ${v}$`).then(dato => {
	console.log('En Mercancia 1 tenemos . . .\n')
	console.log(dato.join('\n')) // Esto los separa por lineas
	console.log('\n') // Esto lo hacemos para separar otra línea al final así se visualmente mejor para que lo aprecies

})

/*Luego "mappemos" los datos de "Mercancia2"*/

tienda2.map('Mercancia2', (v, key) => `Objeto: ${key}, precio de ${v}$`).then(dato => {
	console.log('En Mercancia 2 tenemos . . .\n')
	console.log(dato.join('\n')) // Esto los separa por lineas
})

/*
Resultado final en tu consola:
En Mercancia 1 tenemos . . .

Objeto: Chocolate, precio de 5$
Objeto: Fresas, precio de 2$
Objeto: Sandías, precio de 20$
Objeto: Lechuga, precio de 10$
Objeto: Pollo, precio de 30$

En Mercancia 2 tenemos . . .

Objeto: Cerezas, precio de 15$
Objeto: Chupeta, precio de 10$
Objeto: Galletas, precio de 5$
Objeto: Chicle, precio de 3$
Objeto: Queso, precio de 6.75$
*/


```

### [Num. 3] Ejemplo - Otro ejemplo "mappeando" dentro de propiedades con más propiedades
Bueno acá va a ser algo grande, no es necesario que veas este ejemplo, ya con el ejemplo número 2 deberías de saber lo necesario, pero bueno, si quieres ver este, presta mucha atención

```js
const db = require('megadb') // Requerimos a megadb
const escuela = new db.crearDB('Matricula') // Creamos una base de datos simple

// Ahora vamos a establecer unos datos dentro de una propiedad, dentro de otra, la cual será "Niños", "Niñas", la cual tendrá otras propiedades de "edad", y su ultima nota obtenida, no te preocupes si no entendiste, solo ve como lo estableceré y tal vez entiendas

escuela.establecer('Escuela', {
	"salon_1": { // Esta será la primera propiedad
		"niños": { // La seguna
			"Juan": { // Otra propiedad dentro de la propiedad.
				edad: 15,
				ultima_nota: 9
			},
			"Pedro": { // Otra propiedad dentro de la propiedad.
				edad: 17,
				ultima_nota: 7
			},
			"Eduar": { // Otra propiedad dentro de la propiedad.
				edad: 15,
				ultima_nota: 4
			}
		},
		"niñas": { // La tercera
			"María": { // Otra propiedad dentro de la propiedad.
				edad: 15,
				ultima_nota: 10
			},
			"Paula": { // Otra propiedad dentro de la propiedad.
				edad: 16,
				ultima_nota: 2
			},
			"Mariza": { // Otra propiedad dentro de la propiedad.
				edad: 15,
				ultima_nota: 3.45
			}
		}
	}
})


/*
...
....
.....
¿Sencillo no?
---------------------
Estructura actual del archivo "Matricula.json"
{
  "Escuela": {
	    "salon_1": {
	      "niños": {
		        "Juan": {
		          "edad": 15,
		          "ultima_nota": 9
		        },
		        "Pedro": {
		          "edad": 17,
		          "ultima_nota": 7
		        },
		        "Eduar": {
		          "edad": 15,
		          "ultima_nota": 4
		        }
	      },
	      "niñas": {
		        "María": {
		          "edad": 15,
		          "ultima_nota": 10
		        },
		        "Paula": {
		          "edad": 16,
		          "ultima_nota": 2
		        },
		        "Mariza": {
		          "edad": 15,
		          "ultima_nota": 3.45
		        }
		    }
	    }
	}
}
---------------
Ahora, como son muchos datos que establecimos, podremos hacer unos cuantos métodos "maps" más, véamos
*/

// Uso 1 - Vamos a enviar una lista de los "niños" dentro del salor con sus otros valores

escuela.map('Escuela.salon_1.niños', (v, key) => `"${key}" tiene la edad de ${v.edad} años y su última nota fue un "${v.ultima_nota}"`).then(niños => {
	console.log(niños.join('\n')) // Con el .join haremos que recibas los datos en tu consola con un salto de línea cada uno, y se vea ordenado
})

/*
Explicación :
Primero ponemos "Escuela" ya que es la primera clave a la cual hay que acceder como puedes ver en el archivo, luego accedemos a "salon_1" para poder entrar a la propiedad "niños", la cual tiene los valores de "edad" y su última nota, traducción :

Escuela.salon_1.niños -> Esto es lo que ponemos en <clave> ya que acá es donde queremos utilizar el método, dentro de la propiedad "niños"

Recuerda : Utilizamos el "." por cada palabra para bajar de "altura"

key = Como estamos actualmente dentro de la propiedad "niños", "key" significa el NOMBRE del niño
v = El valor que contiene cada key (Cada niño en otras palabras), y utilizamos un "." luego de "v" para acceder al valor que queremos, unos ejemplos:

v.edad = Esta es su edad, ya que dentro de la key (Dentro del nombre del niño) está el valor "edad", por ejemplo  dentro de "Pedro", su edad es 17, ponemos "edad" luego el "." ya que así es como hemos definido/establecido ese valor antes

v.ultima_nota = Esta es la última nota que establecimos antes, por ejemplo la última nota de "Juan" es un 9
-----------------------------
Ahora hagamos lo mismo pero con las niñas, me saltaré toda esta explicación ya que ya la hicé
*/

// Lo único que hay que hacer es cambiar "niños" por "niñas", ya que allí es donde se encuentra lo que queremos ahora

escuela.map('Escuela.salon_1.niñas', (v, key) => `"${key}" tiene la edad de ${v.edad} años y su última nota fue un "${v.ultima_nota}"`).then(niñas => {
	console.log(niñas.join('\n')) // Con el .join haremos que recibas los datos en tu consola con un salto de línea cada uno, y se vea ordenado
})

/*
Resultado FINAL  en tu consola :
"Juan" tiene la edad de 15 años y su última nota fue un "9"
"Pedro" tiene la edad de 17 años y su última nota fue un "7"
"Eduar" tiene la edad de 15 años y su última nota fue un "4"
"María" tiene la edad de 15 años y su última nota fue un "10"
"Paula" tiene la edad de 16 años y su última nota fue un "2"
"Mariza" tiene la edad de 15 años y su última nota fue un "3.45"

*/
```