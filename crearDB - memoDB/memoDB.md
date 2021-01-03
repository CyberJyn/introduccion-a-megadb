Este constructor te permite crear una "Base de datos", la cual NO es visible en ninguna carpeta/lugar. Se crea en la memoria del paquete (package). Es útil para poder hacer cosas rápidas o de muy corto tiempo sin tener que ocupar espacio en las carpeta "mega_databases" o algún sub-directorio o sub-carpeta.

**Recuerda que como no es visible y se crea en la memoria del package, esta base de datos se va a borrar toda entera cada vez que tu proyecto se reinicie/apague**

Anotaciones :
	[1] Con este constructor SOLO PUEDES UTILIZAR 18 MÉTODOS DE LOS 23 TOTALES los cuales son :
		1. delIndex
		2. setIndex
		3. some
		4. random
		5. find
		6. filter
		7. size
		8. establecer
		9. obtener
		10. tiene
		11. eliminar
		12. purgeall
		13. sumar
		14. restar
		15. extract
		16. datos
		17. ordenar
		18. keys
	[2] Como en "crearDB", se debe declarar un "new" después de la definición (Después del signo "=")

Constructor :

```js
const db = require('megadb')

//Forma 1
new db.memoDB(<Nombre>)

//Forma 2
const { memoDB } = require('megadb')

new memoDB(<Nombre>)
```

Nombre : Nos referiremos al nombre que quieras poner, este no sera visible en ningún lugar

Ejemplo usando algún método: 

```js
const db = require('megadb') // Acá requerimos a megadb
const Nombre = new db.memoDB('Dinero') // Acá creamos el memoDB, recuerda que esto no sera visible en ningún lugar

Nombre.establecer('Esto es', 'Una memoDB') // Establezcamos algo aleatorio para visualizarlo

console.log(Nombre.datos()) // No te preocupes si no entiendes esto, claramente si no sabes que es, no lo vas a enténder.

// Pero en tu consola recibirás esto
/*
Promise { { 
	"Esto es": "Una memoDB"
} }
*/
```