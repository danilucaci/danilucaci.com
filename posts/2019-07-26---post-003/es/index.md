---
title: "Como inicializar y resetear una base de datos prisma"
slug: "inicializar y resetear base de datos prisma"
date: "2019-07-26"
category: "blog"
intro: "En uno de los proyectos en los que estoy trabajando, necesitaba restablecer e inicializar la base de datos Prisma para poder hacer cambios en el esquema GraphQL.
|
Después de revisar la documentación de Prisma durante un tiempo para aprender a hacerlo, decidí crear esta guía con todos los pasos necesarios para restablecer e inicializar una base de datos prisma.io.
|
Por tanto, esto es lo que aprenderás en este artículo, cómo conseguí restablecer e inicializar una base de datos Prisma utilizando datos almacenados en un archivo externo."
snippet: "Guía paso a paso sobre cómo restablecer e inicializar una base de datos Prisma utilizando datos almacenados en un archivo externo."
tags:
    - graphql
    - prisma.io
posted: true
locale: "es"
twinPost: "reset and seed prisma database"
---

## El esquema GraphQL

Antes de empezar, este es el esquema GraphQL que necesitarás para seguir la guía:

```graphql
type PaymentMethod {
  id: ID! @unique
  type: String! @unique
}

type Country {
  id: ID! @unique
  name: String!
  image: String!
  cities: [City!]!
}

type City {
  id: ID! @unique
  name: String!
  image: String!
  country: Country!
  neighborhoods: [Neighborhood!]!
}

type Neighborhood {
  id: ID! @unique
  name: String! @unique
  city: City!
}
```

El esquema está compuesto por 4 tipos. El primero almacena los diferentes métodos de pago que la aplicación acepta. Los otros tipos del esquema están formados por uno llamado `Country` que tiene una relación con un tipo `City` y que a su vez tiene una relación con uno `Neighborhood`.

Si ya tienes datos en la base de datos y quieres hacer cambios que cambiarían el esquema de forma significativa, aveces es más fácil resetear la base de datos entera antes que intentar borrar entradas una por una.

## Reseteando la base de datos prisma

Usando el CLI de Prisma es muy sencillo hacerlo si ejecutas en el terminal:

```shell-session
prisma reset
```

Si no lo tienes instalado en tu maquina, puedes instalarlo con `npm install prisma`.

Entonces te preguntará si quieres continuar o cancelar el proceso de reseteo de la base de datos:

```shell-session
? Are you sure that you want to reset the data of server in stage dev? y/N (n)
```

Si necesitas usar un fichero `.env` puedes añadir el _flag_ `--env-file`.

```shell-session
prisma reset --env-file .env
```

Ahora ya tendrás la base de datos Prisma reseteada con todos los datos anteriores eliminados.

```shell-session
Resetting server@dev 4748ms
```

Una vez has reseteado la base de datos –o si es la primera vez que usas Prisma– puedes empezar con la inicialización de los datos.

## Almacenando los datos

Siguiendo el esquema GraphQL anterior, usaré un fichero `seed.js` que contiene la lógica para inicializar la base de datos y un fichero `seedData.js` que contiene los datos necesarios.

Primero, el fichero `seedData.js` contiene varios objetos con los datos necesarios en las mutaciones para inicializar la base de datos.

```js
//seedData.js
const paymentMethods = ["VISA", "MASTERCARD", "Paypal"];

const spainCities = [
  {
    name: "Barcelona",
    image: "https://res.cloudinary.com/...",
    neighborhoods: {
      create: [
        { name: "El Raval" },
        { name: "Gothic Quarter" },
        { name: "La Barceloneta" },
        { name: "El Poblenou" },
      ],
    },
  },
  {
    name: "Madrid",
    image: "https://res.cloudinary.com/...",
    neighborhoods: {
      create: [
        { name: "Chueca" },
        { name: "Las Cortes" },
        { name: "Huertas" },
        { name: "Gran Vía" },
      ],
    },
  },
];

module.exports = {
  paymentMethods,
  spainCities,
};
```

El objeto `paymentMethods` esta formado por un array de _strings_ con los nombres de los métodos de pago.

`spainCities` es un array de objetos que contienen los nombres de las ciudades y los barios de cada una de ellas.

También puedes escribir todo en el mismo objeto y saltar el paso de importar, pero mi esquema GraphQL es bastante grande y decidí guardar parte de los datos en un fichero externo para poder reducir la complejidad del fichero `seedData.js`.

## Inicializando la base de datos

El siguiente paso es crear un fichero llamado `seed.js` para poder inicializar la base de datos.

Primero, necesitarás importar el servidor Prisma que tiene la conexión con la base de datos. Despúes, tendrás que importar los objetos que contienen los datos del fichero `seedData.js` –si has decidido guardarlos en un fichero externo, si no, puedes saltar este paso.

```js
// the prisma server
const db = require("./db");

// the data to seed in the database
const { paymentMethods, spainCities } = require("./seedData");
```

El siguiente paso es crear una función para poder inicializar la información que quieres guardar en la base de datos Prisma.

```js
async function main() {
  paymentMethods.forEach(async (method) => {
    await db.mutation.createPaymentMethod({
      data: { type: method },
    });
  });

  await db.mutation.createCountry({
    data: {
      name: "Spain",
      image: "https://res.cloudinary.com/...",
      cities: {
        create: spainCities,
      },
    },
  });
}
```

Como puedes ver, estoy usando dos mutaciones diferentes para crear los métodos de pago y el país. Para ello, utilizo un bucle `forEach` para poder reducir la cantidad de código que tengo que escribir a mano, ya que el bucle ejecutará cada mutación individualmente.

Si no tienes que crear demasiados datos, también puedes usar una mutación para cada uno de ellos. De esta manera, tendrás una mutación para cada dato que quieres guardar en la base de datos.

```js
async function main() {
  await db.mutation.createPaymentMethod({
    data: { type: "VISA" },
  });
  await db.mutation.createPaymentMethod({
    data: { type: "MASTERCARD" },
  });
  await db.mutation.createPaymentMethod({
    data: { type: "Paypal" },
  });

  await db.mutation.createCountry({
    data: {
      name: "Spain",
      image: "https://res.cloudinary.com/...",
      cities: {
        create: spainCities,
      },
    },
  });
}
```

Si decides usar el bucle para guardar los datos, recuerda que tendrás que hacer que la función _callback_ del bucle `forEach` sea del tipo `async`. De lo contrario, devolverá un error.

```js{3,4,6}
Resetting server@dev 4397ms
server/src/seed.js:45
    await db.mutation.createRoomAmenityType({
    ^^^^^

SyntaxError: await is only valid in async function
    at Module._compile (internal/modules/cjs/loader.js:718:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10)
 ...
```

Ahora para ejecutar la función de inicialización solo tienes que llamarla con:

```js
main().catch((e) => console.error(e));
```

Si la función devuelve algún error cuando se ejecutan las mutaciones, lo podrás ver en la consola del terminal.

La mutación `createCountry` no esta dentro de un bucle también ya que solo guardo un país, pero si necesitas crear mas de uno, puedes usar la misma lógica que en el caso de los metodos de pago y hacerlo con un bucle `forEach`.

Para crear las ciudades, barrios y sus relaciones con el tipo pariente `Country`, estoy usando el método `create` de la mutación.

De esta manera, puedo crear varios objetos a la vez del tipo pariente `Country` sin tener que crearlos uno a uno y después tener que conectarlos al mismo.

```js{6}
await db.mutation.createCountry({
  data: {
    name: "Spain",
    image: "https://res.cloudinary.com/...",
    cities: {
      create: spainCities,
    },
  },
});
```

El método `create` acepta un array de objetos, los cuales están almacenanados en el objeto `spainCities`.

Si no los almacenaste en un fichero externo, el código equivalente sería escribirlos en el mismo objeto en el método `create`.

```js
await db.mutation.createCountry({
  data: {
    name: "Spain",
    image: "https://res.cloudinary.com/...",
    cities: {
      create: [
        {
          name: "Barcelona",
          image: "https://res.cloudinary.com/...",
          neighborhoods: {
            create: [
              { name: "El Raval" },
              { name: "Gothic Quarter" },
              { name: "La Barceloneta" },
              { name: "El Poblenou" },
            ],
          },
        },
        {
          name: "Madrid",
          image: "https://res.cloudinary.com/...",
          neighborhoods: {
            create: [
              { name: "Chueca" },
              { name: "Las Cortes" },
              { name: "Huertas" },
              { name: "Gran Vía" },
            ],
          },
        },
      ],
    },
  },
});
```

De esta manera puedes crear muchos tipos anidados en el mismo tipo pariente que los contiene.

En este caso, el tipo pariente es el `Country`, el cual tiene una relación con el tipo `City`, el cual a su vez tiene una relación con el tipo `Neighborhood`.

Si ya has creado los tipos previamente y tienes el `id` de cada uno de ellos, puedes usar el método `connect` en vez del `create` en la mutación, para conectarlos con el tipo pariente, ya que tanto el método `create` como el `connect` aceptan una lista de objetos.

```js
await db.mutation.createCountry({
  data: {
    name: "Spain",
    image: "https://res.cloudinary.com/...",
    cities: {
      create: [
        {
          name: "Barcelona",
          image: "https://res.cloudinary.com/...",
          neighborhoods: {
            connect: [
              { id: "id1" },
              { id: "id2" },
              { id: "id3" },
              { id: "id4" },
            ],
          },
        },
      ],
    },
  },
});
```

Si juntas todo en el fichero final `seed.js`, tendrás lo siguiente:

```js
//seed.js
const db = require("./db");

const { paymentMethods, spainCities } = require("./seedData");

paymentMethods.forEach(async (method) => {
  await db.mutation.createPaymentMethod({
    data: { type: method },
  });
});

await db.mutation.createCountry({
  data: {
    name: "Spain",
    image: "https://res.cloudinary.com/...",
    cities: {
      create: spainCities,
    },
  },
});

main().catch((e) => console.error(e));
```

## Reseteando e inicializando la base de datos

Una vez tienes todo el código necesario, puedes empezar a resetear e inicializar la base de datos.

En tu terminal, escribe `prisma seed ./seed.js`. Si quieres resetear la base de datos primero y después inicializarla, puedes añadir el _flag_ `--reset`, para primero hacer el reseteo y después almacenar los datos.

```shell-session
prisma seed --reset ./seed.js
```

Si necesitas usar un fichero `.env`, puedes hacerlo de la siguiente manera:

```shell-session
prisma seed --reset --env-file .env ./seed.js
```

Si todo ha salido bien 🤞, ahora deberías tener la base de datos reseteada e inicializada con tus datos.

## Conclusiones

Esto es básicamente todo lo que necesitas para poder resetear e inicializar una base de datos Prisma usando su cli.

Cuando estaba intentando hacerlo por primera vez en mi proyecto, tuve que buscar mucho en la documentación oficial de prisma.io y en varias entradas en StackOverflow antes de entender como funciona todo. Lo más útil que aprendí fue que los métodos `create` y `connect` acceptan una lista de objetos para poder crear o conectar varios tipos a la vez en la misma mutación.

```js
create: [
  { name: "Chueca" },
  { name: "Las Cortes" },
  { name: "Huertas" },
  { name: "Gran Vía" },
],

...
connect: [
  { id: "id1" },
  { id: "id2" },
  { id: "id3" },
  { id: "id4" },
],
```

Espero que esta guía te haya ayudado a aprender como puedes resetear e inicializar tu base de datos Prisma. Si tienes alguna pregunta, no dudes en dejar un comentario.
