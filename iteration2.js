// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

//--> Crear el div

const div$$ = document.createElement("div");

//--> Insertarlo en el HTML

document.body.appendChild(div$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//--> Crear el div
//--> Crear el p
//--> Meter el p en el div
//--> Meter el div en el body

const div2$$ = document.createElement("div");
const p$$ = document.createElement("p");

div2$$.appendChild(p$$);

document.body.appendChild(div2$$);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement("div");


for (let index = 0; index < 5; index++) {
    const p2$$ = document.createElement("p");
    div2$$.appendChild(p2$$);
}

document.body.appendChild(div3$$);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//--> Crear la P
//--> Darle contenido a la p
//--> Meter la p en el html

const p3$$ = document.createElement("p");

p3$$.append("Soy dinámico!");

document.body.appendChild(p3$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//--> Seleccionar el H2
//--> Meter el contenido / modificarlo

const h2$$ = document.querySelector("h2.fn-insert-here");

h2$$.append("Wubba Lubba dub dub");

document.body.appendChild(h2$$);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//--> Crear un UL
//--> Hacer un LI
//--> Al LI le damos el contenido de texto de una app
//--> Meter el LI en el UL
//--> Hacerlo realidad

const ul$$ = document.createElement("ul");

for (const app of apps) {

    const li$$ = document.createElement("li");

    //Darle contenido
    li$$.append(app);

    //Meterlo en el UL
    ul$$.append(li$$);
}


document.body.appendChild(ul$$);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//--> Seleccionar los nodos
const nodoRemove$$ = document.querySelectorAll(".fn-remove-me");

for (const nodoToRemove$$ of nodoRemove$$) {
    nodoToRemove$$.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

//--> Crear el p
//--> Meterte el texto

//--> Coger todos los divs para encontrar el que queremos utilizar para meterlo delante
//--> Insertar "insertBefore" donde toca 

const p4$$ = document.createElement("p");

p4$$.append("Voy en medio!");

const divs$$ = document.querySelectorAll("div");

//--> La posición 1 de mi divs$$ es el que va justro después de P

document.body.insertBefore(p4$$, divs$$[1]);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsert$$ = document.querySelectorAll("div.fn-insert-here");

for (const div$$ of divsInsert$$) {

    const p5$$ = document.createElement("p");

    p5$$.append("Voy dentro!");

    div$$.appendChild(p5$$);
}
