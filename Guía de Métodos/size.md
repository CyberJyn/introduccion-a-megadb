Este metodo te permite obtener el numero de valores(claves/keys) de una base de datos

ALIAS :
	Ninguno.

Válido para los constructores :
	[1] crearDB
	[2] memoDB

Conocimientos previos mínimos :
	[1] método establecer
	[2]	Constructor crearDB (Carpeta : crearDB - memoDB)

Valor que retorna/devuelve :
	Retorna el numero de valores de la base de datos(claves/keys)

Nivel de Complejidad (Opinión propia) :
	1/10 - Mínima

Uso
```js
<db>.size()
```

db : DB la cual se aplicará el método

### [Num. 1] Ejemplo - Uso Simple
```js
const db = require('megadb')
const base = new db.crearDB('Base_deDatos')

// Establezcamos 3 claves

base.set('MegaStar', 'Valor 1')
base.set('Jyn', 'Valor 2')
base.set('Arielito', 'Valor 3')

// Ahora utilizemos el método

console.log(base.size()) /*En tu consola recibirás 3*/

/*
¿Por qué?

{
	1. "MegaStar": "Valor 1",
	2. "Jyn": "Valor 2",
	3. "Arielito": "Valor 3"
}

Actualmente hay 3 CLAVES, el método size, solo cuenta claves y no propiedades ni valores de una base de datos
*/

```