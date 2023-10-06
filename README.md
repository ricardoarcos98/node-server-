1. ¿Qué sucedió al usar async y await?

async y await son palabras clave en JavaScript que se utilizan para trabajar con promesas de una manera más cómoda y fácil de leer. Cuando marcas una función con async, eso significa que la función siempre devolverá una promesa. await solo se puede usar dentro de una función async y hace que la ejecución de la función se pause hasta que la promesa se resuelva.

2. ¿Qué sucedió al usar el método then()?

El método then() se utiliza para manejar la resolución de una promesa. Se ejecuta cuando la promesa se resuelve y recibe el valor de resolución de la promesa. En el código que proporcionaste, then() se utiliza para imprimir un mensaje en la consola y luego mostrar el menú de nuevo.

3. ¿Qué diferencias encontraste entre async, await y el método then()?

async y await proporcionan una forma más limpia y legible de trabajar con promesas, especialmente cuando se manejan varias promesas en secuencia. En lugar de anidar múltiples llamadas then(), puedes escribir código que se parece más a la programación síncrona tradicional.

Por otro lado, then() se utiliza para manejar la resolución de una promesa y puede ser útil en situaciones donde solo necesitas manejar un único paso de resolución de promesa. Sin embargo, si tienes que manejar varias promesas en secuencia, el uso de then() puede llevar a un "callback hell" donde tienes múltiples niveles de callbacks anidados, lo que puede hacer que el código sea difícil de leer y mantener.