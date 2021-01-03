Con este método podrás reemplazar un valor de un Array mediante su posición

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
	3/10 - Media

Uso : 
```js
<db>.setIndex(<clave>, <posición>, <nuevo valor>)
```
db : Base de datos la cual aplicarás el método
clave : Acá pondrás el nombre de donde se encuentra el Array
posición : Esta es la posición la cual se encuentra el valor el cual será reemplazado por el <nuevo valor>
nuevo valor : Este será el valor por el cual será reemplazado el valor de la <posición>

### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb') // requerimos a megadb
const elementos = new db.crearDB('Elementos') // Crearemos una base de datos simple

// Ahora estableceremos datos para luego utilizar el método
elementos.set('Elementos', ['Piña', 'Aire', 'Fuego', 'Agua'])


/*
Estructura actual del archivo "Elementos.json"
{
	"Elementos": [
		"Piña",
		"Aire",
		"Fuego",
		"Agua"
	]
}
------------
Ahora, hay algo extraño... La "Piña" no es algo coherente respecto al resto de valores del Array ni del nombre de su clave, jum, reemplazemos a "Piña" por "Piedra".

Recordemos que . . . : En la programación se cuenta (Si vienes del archivo "delIndex" saltate este recuerdito) desde 0, por ejemplo, podemos ver que el Array "Elementos" tiene 4 valores ¿No?, pues si contamos desde 0 serían solo 3, en la programación cuentas desde 0, olvídate de lo que te enseñaron en la primaria, si cuentas desde 1 no podrás tener un título en programación, así que cuenta desde 0 ~~Perdón me excalté~~, prosigamos
------------
Ok, "Piña" se encuentra en la posición 0 (NO EN LA POSICIÓN 1), pasemos a utilizar el método
*/
elementos.setIndex('Elementos', 0, 'Piedra') // Acá ponemos "Elementos" ya que la clave principal "Elementos" es la que contiene el Array que queremos, 0 por la posición que queremos que reemplaze por el valor "Piedra"

/*
Estructura actual del archivo ahora
{
	"Elementos": [
		"Piedra",
		"Aire",
		"Fuego",
		"Agua"
	]
}
--------------
Listo, el método funcionó!, ahora "Piña" no esta, está ahora el valor "Piedra" ocupando su lugar
*/
console.log('Listo!') // Esto para saber que se ejecutó el code
```

### [Num. 2] Ejemplo - Reemplazando valores dentro de una propiedad
```js
const db = require('megadb') // requerimos a megadb
const compras = new db.crearDB('Lista_deCompras') // Crearemos una base de datos simple

/*Establezcamos una lista de compras básica dentro de propiedades primero*/

compras.set('Casa1.compras', ['Vegetales', 'Calabaza', 'Piña', 'Naranjas', 'Fresas'])

/*
Estructura actual del archivo "Lista_deCompras.json"
{
	"Casa1": {
		"compras": [
			"Vegetales",
			"Calabaza",
			"Piña",
			"Naranjas",
			"Fresas"
		]
	}
}
---------------
Ok, ahora supongamos que la familia de la casa1 tiene un cultivo masivo de fresas en su casa, y que por alguna razón las fresas están en su lista de compras, pues ya no necesitan fresas, pero si necesitarian "Queso" por alguna razón(?, así que reemplazemos "Fresas" por "Queso"
*/

compras.setIndex('Casa1.compras', 4, 'Queso')
/*
Explicación :

Casa1 es la clave principal por la cual tenemos que acceder primero, así que ponemos primero "Casa1", luego ponemos un "." (clave_split), así bajamos de altura para poder accéder a la altura donde está y por último ponemos "compras" ya que allí es donde se encuentra el Array, ponemos 4 ya que esa es la posición donde se encuentra "Fresas" (Recuerda como se cuenta en la programación), y "Queso" es el valor por el cual "Fresas" (El valor de la posición 4) será reemplazado
----------------
Estructura actual del archivo "Lista_deCompras.json" luego de hacer todo eso
{
	"Casa1": {
		"compras": [
			"Vegetales",
			"Calabaza",
			"Piña",
			"Naranjas",
			"Queso"
		]
	}
}
--------------
Como podemos ver "Fresas" fue reemplazado por "Queso"
*/
console.log('Listo!') // Esto lo hacemos para saber cuando se ejecutó el code
```