Con este método podremos comprobar si al menos una propiedad/clave/valor de la base de datos cumple con la condición que se pone en el "callback"

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	[1] true si la condición del callback se cumple
	[2] false si la condición del callback no se cumple

Nivel de Complejidad (Opinión propia) :
	4/10 - Media

Uso
```js
<db>.some(<clave>, <callback()>)
```

db : Nombre de la base de datos la cual se aplicará el método
clave : En la clave pueden ir dos valores :
	[1] Si deseas buscar en una clave específica, y podrás usar acá una "clave_split" (El ".") si deseas buscar más a fondo
	[2] O usar "false" para buscar solamente en "claves" de la db (base de datos) y no en lugar específico
callback() : Esta parte recibe una cosa
	[1] "valor_actual": Acá se mostrará el valor que se está procesando en ese momento (v)


### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb') // Requerimos a megadb
const puntos = new db.crearDB('Puntajes') // Creamos una base de datos simple

/*Ahora establezcamos unos cuantos valores en este caso puntos*/

puntos.set('MegaStar', 20)
puntos.set('MoDeR', 14)
puntos.set('Jyn', 5)
puntos.set('Mica', 23)
puntos.set('Pedro', 30)

/*Estructura actual es la siguiente

{
	"MegaStar": 20,
	"MoDeR": 14,
	"Jyn": 5,
	"Mica": 23,
	"Pedro": 30
}
------
Ahora vamos a verificar si alguna de las claves es igual o mayor que 20
*/

let vf = puntos.some(false, (v) => v >= 20) /*
	v = Es el valor que se está procesando en ese momento, como hemos puesto "false", estamos buscando entre claves, y no propiedades, "v" es el valor que verificamos, por eso ponemos "v >= 20", lo que quiere decir "v es mayor o igual que 20"
*/

if (!vf) console.log('Ninguna clave es mayor o igual que 20') /*Como establecimos datos los cuales son mayores y uno igual que 20, retornará el console.log de abajo*/
	else console.log('Hay una clave la cual es mayor o igual que 20')

let vf2 = puntos.some(false, (v) => v == 50) /*Con "==" decimos que "v es igual que 50", como no establecimos ningún dato igual a 50, retornará que no hay a tu consola*/

if (vf2) console.log('Hay una clave que tiene de valor 50')
	else console.log('No hay ninguna clave con valor de 50')

```

### [Num. 2] Ejemplo - Comprobando Strings
```js
const db = require('megadb')
const puntos = new db.crearDB('Puntajes')

/*Ahora establezcamos unos cuantos valores en este caso puntos*/

puntos.set('MegaStar', 'Programador')
puntos.set('MoDeR', 'Médico')
puntos.set('Jyn', 'Obrero')
puntos.set('Mica', 'Policía')
puntos.set('Pedro', 'Contador')

/*Estructura actual es la siguiente

{
	"MegaStar": "Programador",
	"MoDeR": "Médico",
	"Jyn": "Obrero",
	"Mica": "Policía",
	"Pedro": "Contador"
}
------
Ahora vamos a verificar si alguna de las claves es igual o mayor que 20
*/

let vf = puntos.some(false, (v) => v == "Programador") /*
	v = Es el valor que se está procesando en ese momento, como hemos puesto "false", estamos buscando entre claves, y no propiedades, "v" es el valor que verificamos, por eso ponemos "v >= 20", lo que quiere decir "v es mayor o igual que 20"
*/

if (!vf) console.log('No hay un programador')
	else console.log('Si hay un programador') /*"MegaStar" está establecido como "Programador", entonces retornará esto*/

```

### [Num. 3] Ejemplo - Comprobando en propiedades

```js
const db = require('megadb')
const estudiantes = new db.crearDB('Estudiantes')

/*Establezcamos algunos estudiantes en la "clase1"*/

estudiantes.establecer('clase1', {
	"Mario": {
		edad: 15,
		padre: 'Dustin',
		madre: null, // null...
		notas: 10
	},
	"Pedro": {
		edad: 16,
		padre: 'Jorge',
		madre: 'Jenny',
		notas: 6
	},
	"Marco": {
		edad: 15,
		padre: 'Nelfer',
		madre: 'María',
		notas: 9
	},
	"Eduar": {
		edad: 15,
		padre: 'Omar',
		madre: 'Paola',
		notas: 7.3
	}
})

/*
Estructura actual de la base de datos "Estudiantes.json"
{
	"clase1": {
		"Mario": {
			edad: 15,
			padre: "Dustin",
			madre: null,
			notas: 10
		},
		"Pedro": {
			edad: 16,
			padre: "Jorge",
			madre: "Jenny",
			notas: 6
		},
		"Marco": {
			edad: 15,
			padre: "Nelfer",
			madre: "María",
			notas: 9
		},
		"Eduar": {
			edad: 15,
			padre: "Omar",
			madre: "Paola",
			notas: 7.3
	}
}
*/

// Ahora vamos a comprobar si algún estudiante tiene en sus notas una mayor o igual que 8

let st = estudiantes.some('clase1', (v) => v.notas >= 8) 

/*
1. Ponemos "clase1" ya que allí es donde queremos buscar
2. v.notas "Notas" ya que queremos comprobar las notas
3. >= 8 : Mayor o igual que 8
*/

if (st) console.log('Algún estudiante tiene notas mayor o igual que 8 en "clase1"') // Retornará esto, ya que establecimos algún estudiante con notas mayor o igual que 8 (Marco, Mario)
	else console.log('Ningún estudiante tiene notas mayor o igual que 8 en "clase1"')

/*

Ahora comprobemos si algún estudiante tiene una edad igual a 17
*/

let st2 = estudiantes.some('clase1', (v) => v.edad == 17)

if (st2) console.log('Algún estudiante tiene la edad de 17 años en "clase1"')
	else console.log('Ningún estudiante tiene la edad de 17 años en "clase1"') /*Retornará esto*/

let st3 = estudiantes.some("clase1", (v) => v == 'Jyn') /*Acá comprobamos si alguna propiedad llamada "Jyn" está dentro de la clave "clase1", como no ponemos ningún . luego de v, significa que no estamos entrando en ninguna propiedad*/

if (st3) console.log('SÍ hay ningún estudiante llamado "Jyn" en "clase1"') 
	else console.log('NO un estudiante llamado "Jyn" en "clase1"') /*Como no está la propiedad "Jyn" EN "clase1", retornará esto*/

```

### [Num. 4] Ejemplo - Comprobando Arrays
```js
const db = require('megadb')
const trabajo = new db.crearDB('Trabajo')

// Establezcamos un valor simple con un Array

trabajo.set('Disponibles', ["Limpiador", "Gerente", "Contador", "Cajero"])

/*Estructura actual del archivo 

{
	"Disponibles": [
		"Limpiador", 
		"Gerente", 
		"Contador", 
		"Cajero"
	]
}
--------------
Bien, ahora comprobemos si algún valor de ese Array se incluye "Gerente"
*/

let x = trabajo.some(false, (v) => v.includes('Gerente')) /*Recordamos poner "false", ya que no está dentro de una clave*/

if (x) console.log('Hay un trabajo disponible de Gerente')
	else console.log('No hay un trabajo disponible de Gerente')

// Ahora comprobemos si está uno llamado "Jefe"

let x2 = trabajo.some(false, (v) => v.includes('Jefe'))

if (!x2) console.log('No hay un trabajo disponible de Jefe') // Entonces retornará esto, ya que no está "Jefe" en el array
	else console.log('Si hay un trabajo disponible de Jefe')
```