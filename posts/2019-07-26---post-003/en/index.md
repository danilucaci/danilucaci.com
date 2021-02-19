---
title: "How to reset and seed a prisma.io database"
slug: "reset and seed prisma database"
date: "2019-07-26"
category: "blog"
intro: "On one of the projects that I’m working on, I needed to reset and seed the Prisma database so that I can make breaking changes in the GraphQL schema.
|
After digging through the Prisma docs for a while to learn how to do it, I decided to put this post together with all the steps needed to reset and seed a prisma.io database.
|
So this is what you’ll learn in this article, how I managed to reset and seed a Prisma database using data stored on a separate file."
snippet: "Step-by-step guide on how to reset and seed a Prisma database using data stored on a separate file."
tags:
    - graphql
    - prisma.io
posted: true
locale: "en"
twinPost: "inicializar y resetear base de datos prisma"
---

## The GraphQL Schema

Before we get started, this is the GraphQL Schema you will need to follow this
guide:

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

The schema is made of 4 types. The first type stores the different payment
methods that the app accepts. The other types in the schema are made of a
`Country` parent type which has a relation to a `City` type, which in turn have
a relation to a `Neighborhood` type.

If you already have inserted data in the database, and you want to make breaking
changes to the schema, it is sometimes easier to just reset it entirely than
trying to delete items one by one.

## Resetting the prisma database

Using the Prisma CLI it’s easy to do by running in the terminal:

```shell-session
prisma reset
```

If don’t have it installed on your machine, you can install it with
`npm install prisma`.

Then you will be asked to either confirm or cancel the database reset process:

```shell-session
? Are you sure that you want to reset the data of server in stage dev? y/N (n)
```

If you need to provide a `.env` file you can add the `--env-file` flag:

```shell-session
prisma reset --env-file .env
```

With this, you now have the Prisma database reset with all the previous data
erased.

```shell-session
Resetting server@dev 4748ms
```

Once you have reset the database —or if it’s the first time you work with
Prisma— you can begin seeding it with your data.

## Storing the data

Following the previous schema, I will use a `seed.js` file that holds the
seeding logic and a `seedData.js` file that holds the data to seed.

First, the `seedData.js` file is made of several objects that contain the data
needed in the seeding mutations.

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

The `paymentMethods` object is made of an array of strings with the names of the
different payment methods.

`spainCities` is an array of objects that contain the names of the cities and
the nested neighborhoods for each of them.

You can also inline all of the data and skip the importing and exporting step,
but I am separating mine since I have many more types and data that I’m seeding,
so the file would get too long.

## Seeding the database

The next step is the create a `seed.js` file to handle the database seeding
logic.

First, you need to import your Prisma server that has the connection to the
database.

Then, you need to import the objects with the data from the `seedData.js` file
–if you decided to save them in a separate file, if not you can skip this step.

```js
// the prisma server
const db = require("./db");

// the data to seed in the database
const { paymentMethods, spainCities } = require("./seedData");
```

The next step is to create a function that will be used to seed the data in the
Prisma database.

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

Here I am using two different mutations to create the payment methods and the
country.

As you can see, I am using a `forEach` loop to create them, so that I can reduce
the amount of code.

If you don’t have too many objects to create, you could also write everything
inline, with a mutation call for each type of data, like so:

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

If you decide to loop over them, just remember to make the callback function
`async` in the `forEach` loop, otherwise, it will throw an error.

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

Then, to execute the seeding function you need to call it with:

```js
main().catch((e) => console.error(e));
```

If any errors are returned when executing the mutations, they will show up in
the console (terminal).

The `createCountry` mutation is not inside a loop since I’m only creating a
single country, but if you need to create more than one, you can use the same
logic as before, by using a `forEach` loop.

To create the cities, neighborhoods and their relations to the parent `Country`
type, I am using the `create:` method of the mutation.

This way I can create many nested objects of the parent `Country` type without
having to create them individually and then having to connect them.

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

The `create` method accepts an array of objects, which are stored in the
`spainCities` object.

If you didn’t store them in a separate variable, the equivalent code would be to
inline them in the `create` method:

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

This way you can create many nested types of a single parent type.

In this case, the parent type is `Country` which has a relation to the `City`
type, which in turn has a relation to the `Neighborhood` type.

If you already have created a type, and you have it’s `id`, you can use the
`connect` method instead of the `create` one, to connect the parent type to a
nested one by using the `id`, since both `create` and `connect` accept a list of
objects.

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

If you put everything together, the final `seed.js` file will like this:

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

## Resetting and seeding the database

Once you have all the logic in place, you can now reset and seed the database.

In the terminal, type `prisma seed ./seed.js`. If you’d like to reset and then
seed the database, you can add the `--reset` flag, which will first reset it,
and then begin seeding the data.

```shell-session
prisma seed --reset ./seed.js
```

If you need to provide a `.env` file you can do it like so:

```shell-session
prisma seed --reset --env-file .env ./seed.js
```

If everything went fine 🤞, you should now have the database reset and seeded
with your data.

## Takeaways

So this just about all you need to reset and seed a Prisma database using their
cli.

When I was trying to do it for the first time in my project I had to dig through
the prisma.io docs and several StackOverflow questions before it all made sense.
The most helpful thing I learned was that you can `create` or `connect` several
objects in a single mutation.

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

I hope this article helped you learn how you can also reset or seed your Prisma
database. If you have any questions, please feel free to leave a comment.
