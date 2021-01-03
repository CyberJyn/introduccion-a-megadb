Con este constructor, podrás crear una base de datos.

Anotaciones : 
	[1] Al usarla, se te creará una carpeta llamada "mega_databases" si no la tienes ya, no te asustes, es normal. Allí se 
	encontrarán todas las bases de datos que vayas creando con sus sub-directorios o sub-carpetas.

	[2] Al usarla, se debe declarar "new" antes del constructor.

Modos de uso :

	[1] Tiene 2 modos de poder usarla. Una simple (Como la del ejemplo a continuación), o para poder crear sub-directorios o sub-carpetas donde irá el archivo .json 

Constructor
```js
//Forma 1
const db = require('megadb')
new db.crearDB(nombre_db, sub_directorio)

//Forma 2
const { crearDB } = require('megadb')

new crearDB(nombre_db, sub_directorio)
```

nombre_db : Esto será el nombre del archivo .json que se creará

<---------------------- MODO NÚMERO 1 (MÁS SIMPLE Y UTILIZADO) -------------------->

```js
// Ejemplo :
const db = require('megadb') // Acá estamos requiriendo a megadb

const NombreDela_BaseDeDatos = new db.crearDB('Nombre_Del_Archivo_json') // Acá creamos la base de datos (es un archivo .json - Que se note el "new")
/*
En tu carpeta se verá así :


[-] mega_databases
	- Nombre_Del_Archivo_json.json
*/

```

"NombreDela_BaseDeDatos" : Esto es muy importante. Con este nombre que le ponemos es nos vamos a referir a la base de datos con todos los métodos que vayas viendo acá.

Nota:
	[1] En este caso "const" fue la variable de declaración que usé, pero puedes usar una "let" o "var", lo recomendable es una constante, en mi opinión



<---------------------- MODO NÚMERO 2 -------------------->

Ahora véamos de la foma numero 2, en esta forma es donde podrías tenerlo todo más ordenado si así quieres, podrás crear sub-carpetas donde irían los archivos. Véamos ejemplos :

### [Num. 1] Ejemplo

```js
const db = require('megadb') // Acá estamos requiriendo a megadb

const NombreDela_BaseDeDatos = new db.crearDB('Nombre_Del_Archivo_json', 'CarpetaNúmero1')

/*
Te quedaría así :

[-] mega_databases
	[-] CarpetaNúmero1
		- Nombre_Del_Archivo_json.json
*/
```

Vemos que, ponemos una coma luego del nombre que queremos ponerle al archivo.json, así es como ponemos una sub-carpeta dentro d la carpeta llamada "mega_databases"
<---------------------- UNA FORMA MÁS ORDENADA ---------------------->

SUB-DIRECTORIOS

Acá **NO** se te va a crear un archivo nuevo en tu carpeta "mega_databases", si no dentro de la carpeta misma donde ejecutes el código.

### [Num. 2] Ejemplo :
```js
const db = require('megadb') // Acá estamos requiriendo a megadb

const NombreDela_BaseDeDatos = new db.crearDB({
	nombre: "Nombre_Del_Archivo_json", // Acá declaramos el nombre del archivo json
	carpeta: "CarpetaNúmero1" // Acá declaramos el nombre de la carpeta donde queremos que vaya el archivo json
})


/*
Te quedaría así :
	[+] node_modules
	[-] CarpetaNúmero1
		- Nombre_Del_Archivo_json.json
	[+] mega_databases
	[-] un_archivo_aleatorio.png
	[-] otro_archivo_aleatorio.js
*/

```

### [Num. 3] Ejemplo 

```js
const db = require('megadb') // Acá estamos requiriendo a megadb

const NombreDela_BaseDeDatos = new db.crearDB({
	nombre: "Archivo_json", // Acá declaramos el nombre del archivo json
	carpeta: "Nombre_De_Carpeta" // Acá declaramos el nombre de la carpeta donde queremos que vaya el archivo json
})

/*
Te quedaría así :
	[+] node_modules
	[-] CarpetaNúmero1
		- Archivo_json.json 
	[+] mega_databases
	[-] un_archivo_aleatorio.png
	[-] otro_archivo_aleatorio.js
*/
```

### [Num. 4] Ejemplo

```js
const db = require('megadb') // Acá estamos requiriendo a megadb

let NombreDela_BaseDeDatos = new db.crearDB({
	nombre: 'Nombre_Del_Archivo_json',
	carpeta: "Nombre_De_la_carpeta_que_no_va_en_mega_databases",
	sub: "Carpeta_Donde_Va"
})

/*
Te quedaría así :
	[+] node_modules
	[-] Nombre_De_la_carpeta_que_no_va_en_mega_databases
    	[-] Carpeta_Donde_Va
        	- Nombre_Del_Archivo_json.json
    [+] mega_databases
	[-] un_archivo_aleatorio.png
	[-] otro_archivo_aleatorio.js
*/
```
Si no lo entendiste la forma más ordenada, intenta crear un archivo de esta forma y posiblemente entiendas