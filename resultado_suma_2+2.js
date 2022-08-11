let userData = prompt("Escribe el resultado de la suma 2 + 2");
let userDataInt = parseInt(userData);
let userDataString = userData.toLowerCase();
resultInt = 4;
resultString = "cuatro";

if(userDataString === resultString || userDataInt === resultInt){
    console.log("Felicitaciones, te va muy bien en Matematicas\nEl Resultado es:" , resultInt, "(",resultString,")" )
} else {
    console.log("Tu Respuesta es incorrecta\n El Resultado es: " ,resultInt,"(",resultString,")")
}

