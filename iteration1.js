// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const buttonShowMe$$ = document.querySelector(".showme");

console.log(buttonShowMe$$);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado$$ = document.querySelector("#pillado");

console.log(pillado$$);

// 1.3 Usa querySelector para mostrar por consola todos los p

const parrafos$$ = document.querySelectorAll("p");

console.log(parrafos$$);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

pokemones$$ = document.querySelectorAll(".pokemon");

console.log(pokemones$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

const dataFunctions$$ = document.querySelectorAll("[data-function='testMe']");

console.log(dataFunctions$$);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

const tercerPersonaje$$ = document.querySelectorAll("[data-function='testMe']");

console.log(tercerPersonaje$$[2]);