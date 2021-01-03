Este método te permite eliminar un elemento de un Array mediante su posición

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
<db>.delIndex(<clave>, <posición>)
```

db : Base de datos la cual aplicarás el método.
clave : Esta es la clave/propiedad la cual ES LA QUE contiene el Array.
posición : Acá podrás la posición del Array la cual será eliminada (Debe ser un número).

### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb') // requerimos a megadb
const lista = new db.crearDB('lista') // Crearemos una base de datos simple

/*Establezcamos datos para luego decidir cual de ellos está en la posición la cual eliminaremos*/

lista.set('lista', ['Levantarse', 'Sacar al perro a pasear', 'Ir a los compromisos'])

/*
Estructura actual de la base de datos "lista.json"
{
	"lista": [
		"Levantarse",
		"Sacar al perro a pasear",
		"Ir a los compromisos"
	]
}
-------
Recordemos que . . .
En la programación se empieza a contar desde cero, cero, uno, dos, tres, cuatro, etc . . .
Así que veamos las posiciones actuales del array que establecimos antes

["Levantarse", "Sacar al perro a pasear", "Ir a los compromisos"]

"Levantarse" : Se encuentra en la posición 0
"Sacar al perro a pasear": Se encuentra en la posición 1
"Ir a los compromisos": Se encuentra en la posición 2
-------
Si se te hace más sencillo, solo cuentalos, al total restale uno : 3 - 1 = 2
--------
Eliminemos el elemento que se encuentra en la posición 1 por ejemplo :
*/

lista.delIndex('lista', 1) /*1 es la posición la cual eliminaremos, además recuerda separar la posición con una "," después de la clave, y 'lista' es donde es la clave la cual contiene el Array donde se encuentra la posición que queremos eliminar*/

/*
-------------
En este caso, del Array se eliminará "Sacar al perro a pasear", ya que en la posición 1 (Que es la que específicamos) se encuentra ese elemento/valor, y la estructura de la base de datos "lista.json" quedará así :
{
	"lista": [
		"Levantarse",
		"Ir a los compromisos"
	]
}
---------
Podemos observar como se eliminó ese valor
*/
console.log('Listo!') // Esto es opcional, es solo para saber que se ejecutó el código
```

### [Num. 2] Ejemplo - Eliminación de valores dentro de propiedades
```js
const db = require('megadb') // requerimos a megadb
const usuarios = new db.crearDB('Usuarios') // crearemos una base de datos simple

/*Ahora lo que haremos es establecer una clave principal con varios nombre usuarios*/

usuarios.establecer('Usuarios.normales', ["Jyn", "MegaStar", "Mica", "Pedro", "Mario", "Eduar", "Jhon"])

/*
Estructura actual del archivo "Usuarios.json"
{
	"Usuarios": {
		"normales": [
			"Jyn",
			"MegaStar",
			"Mica",
			"Pedro",
			"Mario",
			"Eduar",
			"Jhon"
		]
	}
}
--------------
Oki, ahora tenemos unos cuantos datos más, eliminemos dos, a "Jyn" y a "Mario" por ejemplo
*/

/*Veamos "Jyn" se encuentra en la posición 0, así que eso pondremos para eliminarlo
Además, se encuentra dentro de una propiedad, llamada "normales", así que accedamos a ella, primero ponemos "Usuarios" ya que es la clave principal donde se encuentra, luego "normales" ya que la propiedad "normales" contiene el Array que queremos, recuerda utilizar la clave_split (el ".")
*/
usuarios.delIndex('Usuarios.normales', 0)

/*
Y quedaría
{
	"Usuarios": {
		"normales": [
			"MegaStar",
			"Mica",
			"Pedro",
			"Mario",
			"Eduar",
			"Jhon"
		]
	}
}
---------
Si volviesemos a eliminar algo en la posición "0", sería a "MegaStar" ya que ese valor se encuentra en esa posición ahora, pero no lo haremos, ahora eliminaremos el valor que este en la posición "3" por ejemplo, que sería Mario ahora
*/
usuarios.delIndex('Usuarios.normales', 3)

/*
Y así quedaría finalmente
{
	"Usuarios": {
		"normales": [
			"MegaStar",
			"Mica",
			"Pedro",
			"Eduar",
			"Jhon"
		]
	}
}
----------------
Como podemos ver, "Mario" y "Jyn" ya no se encuentra dentro del Array
*/
console.log('Listo!') // Opcional, solo para saber cuando se ejecutó el código
```