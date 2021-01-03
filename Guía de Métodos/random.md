Este metodo te permite obtener una cantidad especifica de propiedades aleatoriamente (random), nunca se repetiran ("Nunca se repetiran las mismas", esto es un poco cuestionable, pero si, son randoms la gran mayoría, puede que se repita una, pero depénde de la cantidad de valores que pongas y de los que haya en la base de datos, esto claro está)

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Promesa con un array, este array contiene las propiedades que fueron seleccionadas aleatoriamente

Nivel de Complejidad (Opinión propia) :
	3/10 - Media

Uso
```js
<db>.random(<clave>, <cantidad>)
```
db : Base de datos a la cual aplicarás este método
clave : Acá o pones "false" o pones una propiedad usando una "clave_split", al poner "false" estaremos eligiendo la cantidad "random" en las claves
cantidad : Acá pondrás la cantidad de valores randoms los cuales saldrán, ejemplo uno, dos, tres, cuatro, cinco, etc . . .

### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb')
const giveaway = new db.crearDB('Giveaway')

// Establezcamos 5 claves

giveaway.establecer('Jyn', 1)
giveaway.establecer('MegaStar', 2)
giveaway.establecer('Riri', 3)
giveaway.establecer('Anny', 4)
giveaway.establecer('Mica', 5)

/*
Estructura actual del archivo

{
	"Jyn": 1,
	"MegaStar": 2,
	"Riri": 3,
	"Anny": 4,
	"Mica": 5
}

*/

// Ahora utilizemos el método

let gv = giveaway.random(false, 2)
/*
false debido a que no estamos buscando un valor random en ninguna propiedad, sino claves normales, y 2, debido a que queremos que saque 2 valores random de esos 5 que hay
*/
console.log(gv) /*En tu consola podrás ver 2 valores de esos 5, un ejemplo sería esto*/
/*
Estos son solo dos ejemplos, las claves son randoms, los valores que poseen no tienen nada que ver, son solo números que les pusé para que tengan algún valor xD, no te confundas, el valor no afecta en nada al resultado random y puede ser cualquiera, un valor boolean, string, array, etc . . .

Promise { { 
	[
		"clave": Riri, "valor": 3,
		"clave": MegaStar, "valor": 2
	]
} }
*/
```

### [Num. 2] Ejemplo - Usando el método en propiedades

Usaremos una "clave_split", el "."

```js
const db = require('megadb')
const giveaway1 = new db.crearDB('Giveaway1')

// Establezcamos una clave con unas propiedades

giveaway1.set('Giveaway1', {
	"Jyn": 1,
	"MegaStar": 2,
	"Pedro": 3,
	"Juan": 4,
	"Jhon": 5,
	"María": 6,
	"Eduar": 7
})

/*
Estructura actual del archivo Giveaway1.json
{
	"Giveaway1": {
		"Jyn": 1,
		"MegaStar": 2,
		"Pedro": 3,
		"Juan": 4,
		"Jhon": 5,
		"María": 6,
		"Eduar": 7
	}
}
---------------
Ahora utilizaremos el método
*/

let g = giveaway1.random('Giveaway1', 1) // En este caso vamos a sacar a 1 solo, ponemos "Giveaway1" ya que esa es la clave que contiene las propiedades donde queremos que salgan los valores randoms

console.log(g) 
/*
En tu consola PODRÍAS recibir esto, y digo podrías ya que recalco que es aleatorio lo que saldrá

Promise { {
	[
		"clave": Juan, "valor": 4
	]	
} }

*/

```