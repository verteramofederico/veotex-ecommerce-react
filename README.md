# Veotex

## Ecommerce

Desarollo de ecommerce. Stack: node, express, react, mysql.


1. Instalar react
npm install -g create-react-app
2. Crear la app
create-react-app- my-app

Podria hacer 1 y 2 todo en el mismo comando:
npx create-react-app xnombreappx

3. npm start y app funcionando.


Index.js
El archivo madre es src/index.js y su contenido es unico. No se repite
Levanta la app. 
Tiene 4 lineas indespensables: 

1) tener la variable de react en scope. 
import React from 'react';
2) tener la variable reactDom en scope
import ReactDOM from 'react-dom';
3) tener un componenente (o un nodo, mas basico)
Elemento nodo
const a = <p>Hola Mundo</p>
Componennte. Siempre comienzan en mayuscula
Son siempre funciones que retornan algo. 
import App from './App';
4) tener una funcion render corriendo
Se ejecutan siempre en JSX
ReactDOM.render(
    <App />
  document.getElementById('root')
);

Virtual DOM: representaicon de una app de react en forma de objeto. Cada
parte del dom se repsentra como una fibra/nodo. Los nodos mas populares son elementos de react y estos se separan dos categorias.
