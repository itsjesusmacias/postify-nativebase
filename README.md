# README

¡Bienvenido! El objetivo de esta prueba técnica es poner a prueba tus conocimientos sobre el framework o stack con el que trabajamos cada día en OpositaTest y sobretodo para poder valorar tu capacidad para resolver problemas, así para conocer tu forma de trabajar.
Valoraremos el:

- Análisis y manejo de APIs
- Tipado de los datos
- Organización del código
- Segmentación en servicios, hooks, componentes, etc.
- Conocimiento de algunos componentes core de React Native (Text, FlatList, StyleSheet, etc.)
- Buenas prácticas: clean code, reutilización de código...
- Testing
- Comprensión de la tarea.

## Detalles

Deberás construir una aplicación en la que se muestre un listado de posts ordenados por el número de reacciones que tienen. Es decir, primero se mostrarán aquellos posts que tengan más reacciones.

La aplicación que tienes delante tiene únicamente un componente `App` que realiza una llamada a `https://dummyjson.com/posts` para obtener los posts.

A partir de esta llamada, deberás construir lo siguiente:

1. La aplicación deberá mostrar el listado de posts ordenados por su "reactions". Se deberán mostrar los primeros 15 posts ordenados por sus reacciones.
2. Cada post deberá mostrar un título, las tags, número de reacciones que tiene y si está marcado como favorito o no (más adelante se explicará esto).
   [Ejemplo](https://drive.google.com/file/d/1KO2wc0AmmjDJKqNFAWiEkDxrKqNdfPZ1/view?usp=share_link)
3. Cada post será interaccionable y al presionar sobre el elemento del mismo se abrirá una modal donde se mostrará la información detallada, como el título, descripción, tags y el número de reacciones.
4. Esta modal dispondrá de un botón de cerrar para poder volver a la vista anterior, además deberás introducir también un botón para que se marque un post como "favorito". Al presionar sobre este botón, se deberá indicar de alguna manera en la modal de que el post es un "favorito". Al volver a la vista anterior, se deberá reflejar de alguna manera también en el item.
5. En caso de que un post se haya marcado como favorito, **deberá aparecer entre los primeros del listado**.

### Consideraciones

- Se deberán manejar los estados de carga y error en la vista al obtener los datos.
- Se valorará crear servicios para la llamada al endpoint, así como el uso de hooks reutilizables para otras partes de la aplicación e incluso el uso de mappers.
- OPCIONAL: Se puede usar una paginación para obtener los siguientes posts al llegar al final de la vista, de manera que al llegar al final del scroll, se carguen los siguientes.

## Requisitos de Stack

Para el desarrollo de la aplicación deberás utilizar las siguientes herramientas:

- React / React Native
- Unit tests (jest, react-testing-library...)
- Manejo de errores
- TypeScript (_opcional)_

### Consideraciones

- Se pueden usar librerías o dependencias externas a React o React Native, pero se deberá justificar su uso.
- Puedes dedicar el tiempo necesario para realizar la prueba.
- Si tienes alguna duda, ¡consulta!

