---
title: "Cómo formatear y testear tu código usando git pre-commit hooks"
slug: "como formatear y testear codigo usando git pre commit hooks"
date: "2020-08-26"
category: "blog"
intro: "No hay duda de que los beneficios de utilizar un sistema de control de versiones
como Git son muchos. Sin embargo, por sí solo, Git solo hará un seguimiento de
los commits que tú y tus compañeros de equipo hagaís en un
repositorio, sin realizar ninguna comprobación sobre la calidad del código,
como, por ejemplo: si sigue las reglas de linting, si está libre de errores o si pasa pruebas
unitarias o de integración.
|
Para resolver estos problemas de forma sencilla, puedes usar Git hooks junto con
herramientas que te permitan ejecutar herramientas de linting y pruebas antes o
después de los eventos de Git, como crear un commit o subir código a un
repositorio remoto."
snippet:
  "Cómo usar Git hooks, husky y lint-staged para ejecutar scripts que ejecutan
  herramientas de linting y testing antes de realizar un commit o subir código a
  un repositorio."
tags:
  - git hooks
  - test
posted: true
locale: "es"
twinPost: "how to lint and test code using git pre-commit hooks"
---

## ¿Qué son los Git hooks?

Los Git hooks son scripts que Git ejecutará antes o después de algunas acciones
que puedes realizar en tu repositorio, como crear un nuevo commit o subir código
a un repositorio. Aunque estos son algunos de los hooks más comunes, puedes
obtener más información sobre todos los demás en la
[documentación oficial](https://git-scm.com/docs/githooks).

## La solución

Al usar Git hooks, podrás ejecutar herramientas de _linting_ y probar el código
que estás introduciendo con tu commit para verificar si sigue las reglas que tú
y tu equipo habeís establecido. De esta manera, puedes asegurarte de que todos
los commits siguen mejores prácticas, estén libres de fallos como errores de
sintaxis o que pasen pruebas unitarias, de integración o de tipo end-to-end.

Si el código no pasa una de las reglas de los Git hooks, no se realizará el
commit y podrás ver un informe de error de lo que se debe corregir para que se
pueda realizar el commit. Por otro lado, si el código pasa todas las reglas
especificadas, el commit se creará automáticamente.

Esto te permite fallar rápidamente sin tener que esperar a que las herramientas
de CI (que pueden tardar mucho tiempo) fallen la compilación, lo que hará que
tengas que cambiar mucho de contexto así afectando negativamente tu
productividad. Puedes obtener más información sobre por qué esto es malo para tu
productividad en este video de
[Paul Armstrong en @ReactEurope 2019](https://www.youtube.com/watch?v=ikn_dBSski8&feature=youtu.be&t=434).
En cambio, en solo un par de minutos, o incluso menos, dependiendo de tu
configuración, podrás ejecutar scripts y herramientas antes o después de los
eventos de Git para ver si tu código está pasando los tests y las reglas de
_linting_.

Así que vamos a ver cómo lograr estos objetivos mediante el uso de los Git
hooks, `husky` y `lint-staged` para poder ejecutar scripts que ejecutan
herramientas de _linting_ y pruebas antes de realizar un commit o publicar
código a un repositorio remoto.

## Instalación y configuración

Aunque puedes ejecutar Git hooks usando scripts de shell, es mucho más fácil
usarlos con herramientas como `husky`. Por lo general, `husky` se usa junto con
el paquete `lint-staged` que te permite ejecutar _hooks_ solo contra los
archivos que están en el _staging area_ de Git, para evitar tener que ejecutar
las herramientas de _linting_ con todo tu código o ejecutar todo el conjunto de
tests de tu repositorio cada vez que realizas un nuevo commit. Al usar el
paquete `lint-staged`, podrás lintear y testear solo los archivos en el _staging
area_ de de Git.

### Instalando dependencias

#### husky

Primero, tendrás que instalar el paquete `husky`, lo que te permitirá ejecutar
Git hooks como `pre-commit`.

```bash
npm i --save-dev husky
```

#### lint-staged

Después, tendrás que instalar el paquete `lint-staged` para poder ejecutar los
scripts solo contra los archivos del _staging area_ de Git.

```bash
npm i --save-dev lint-staged
```

## Linting

### Configurando husky

Una vez has instalado `husky`, tendrás que configurarlo. Para ello, yo he usado
un fichero `.huskyrc.js` para incluir la configuración, pero
[también soporta muchas otras maneras de hacerlo](https://github.com/typicode/husky#local-commands-huskyrc)
(una de las más comunes es incluir las reglas y los scripts en el fichero
`package.json`).

```js
// .huskyrc.js
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};
```

Esto ejecutará `lint-staged` cuando el hook `pre-commit` es ejecutado, lo cual,
a su vez, ejecutará los scripts que hayas incluido en la configuración del
paquete `lint-staged`.

### Configurando lint-staged

El siguiente paso es configurar `lint-staged` para que tenga todos los scripts
que quieres ejecutar sobre los archivos del _staging area_ de Git. Para ello,
tendrás que crear un fichero llamado `.lintstagedrc.js` que contiene la
configuración de `lint-staged` —también hay otras maneras de hacerlo, para saber
más, puedes leerlo en la
[documentación oficial](https://github.com/okonet/lint-staged#configuration).

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js"],
};
```

En este ejemplo, estoy usando `lint-staged` para ejecutar el script de npm
`lint:js` del fichero `package.json` que ejecutará `eslint` en todos los
ficheros que tengan una extensión de `.js`, dentro de la carpeta `src`. Si el
código dentro de estos ficheros no sigue alguna de las reglas de la
configuración de `eslint`, se devolverá un error y eso hará que el commit no se
complete porque hay algún error.

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js"
}
```

Otra opción muy común es usar el _flag_ `--fix` de `eslint` para que arregle los
errores que se puedan solucionar de forma automática.

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix"
}
```

Ahora, si intentas crear un commit que tenga algún cambio en un fichero que
tenga una extensión `.js` dentro de la carpeta `src`, el script npm `lint:js`
será ejecutado por `lint-staged` cuando el hook `pre-commit` es ejecutado por
`husky`.

## Testing

Para ir un paso más allá, también puedes ejecutar los tests de tu repositorio
con `jest` cuando se ejecuta un Git hook.

Primero, tendrás que crear un script npm que ejecutará `jest` con los siguientes
_flags_:

- `--bail`: detendrá el _test suite_ entero cuando uno de los tests falle
- `--findRelatedTests`: es útil usarlo con hooks tipo `pre-commit` para poder
  ejecutar solo los tests que afectan los ficheros que están en el _staging
  area_ de Git

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix",
  "test:related": "jest --bail --findRelatedTests"
}
```

Depués, tendrás que configurar `lint-staged` para que ejecute también `jest`
antes de los Git hook que hayas elegido.

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js", "npm run test:related"],
};
```

Ahora, `lint-staged` ejecutará los scripts `lint:js` y `test:related` cada vez
antes de que hagas un commit. Si los tests pasan y no hay ningún error de
_linting_, el commit se llevará a cabo. De lo contrario, no se hará y verás un
mensaje de error con la información sobre lo que se tiene que arreglar en el
código.

### Creando un nuevo commit

En este ejemplo estoy creando un commit de prueba para que veas la información
que se muestra cuando se ejecutan los scripts anteriores con `lint-staged` y
`husky`.

```bash{5,6,7,8}
> git commit -m "hack hack hack"

husky > pre-commit (node v14.8.0)
✔ Preparing...
❯ Running tasks...
  ❯ Running tasks for src/**/*.js
    ⠼ npm run lint:js
    ◼ npm run test:related
◼ Applying modifications...
◼ Cleaning up...
```

### Todos los scripts pasan y el commit es creado

Una vez los scripts se han ejecutado y no hay ningún error, el commit se hará.

```bash{6}
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
[husky-post ccf9092] hack hack hack
 1 file changed, 1 insertion(+)
```

### Versión final de los archivos necesarios

#### `package.json`

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix",
  "test:related": "jest --bail --findRelatedTests"
}
```

#### `lint-staged`

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js", "npm run test:related"],
};
```

#### `husky`

```js
// .huskyrc.js
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};
```

## Conclusiones

Ahora, cada vez que hagas un nuevo commit, podrás ver rápidamente si el código
está libre de problemas de _linting_, errores y si pasa las pruebas unitarias o
de integración. Al introducir estas herramientas en tus proyectos, puedes tener
mucha más confianza en el código que publicas porque puedes ver más rápido si
tiene algún problema que pueda afectar al repositorio sin tener que esperar a
que las herramientas de CI te informen de los problemas.

Desde que he añadido los hooks de Git a mi flujo de trabajo, me siento mucho más
cómodo escribiendo código y creando commits porque sé que tengo herramientas
automatizadas que filtrarán y probarán los cambios que estoy introduciendo en
cada commit.
