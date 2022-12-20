
function init() {
    // Seleccionar elemento por ID
    const mainSection = document.getElementById("main-section");
    console.log("Selector por ID", mainSection);

    //Selector de elecmentos por name
    const inputPassword = document.getElementsByName("pass");
    console.log("Selector por name", inputPassword);

    //Seleccionar por element (tagname) (todos los <p> o <h1>, <div>)
    const allParagraphs = document.getElementsByTagName("p");
    const allInputs = document.getElementsByTagName("input");

    console.log("Todos los <p>", allParagraphs);
    console.log("Todos los <input>", allInputs);


    //Seleccionar elementos con la misma clase
    const allText = document.getElementsByClassName("text");
    console.log("Todos los elementos con la clase text", allText);

    //Obtener un atributo de un elemento previamente seleccionado.
    const mainSectionAttr = mainSection.getAttribute("upgrade");
    console.log("mainSectionAttr", mainSectionAttr);
};

window.onload = init;
