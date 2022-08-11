/*function recibirArray(arrayComoParametroGil){
    for(let i = 0; i < arreglo.length; i++ ){
        console.log(arreglo[i]);
    }
}

let arreglo = ["manzana", "naranja", 1, 2];
recibirArray(arreglo);*/

/* function recibirArray(arrayComoParametroGil){
    arreglo.forEach(function (a){
        console.log(a);
    });
}

let arreglo = ["manzana", "naranja", 1, 2];

recibirArray(arreglo);*/


//↓ la mejor manera de recibir arreglo como parametro ↓
/*function primerElemento(arreglo){
    console.log(arreglo[0]);
}
primerElemento(['tuvieja',1,2,3]);*/

// ↓ recibir arreglo como parametro imprimiendo 
// todos sus elementos (distinas maneras) ↓

// EJEMPLO 1
// function primerElemento(arreglo){
//     arreglo.forEach(function (a) {
//         console.log(a);
//     });
// }
// primerElemento(['tuvieja',1,2,3]);


//EJEMPLO 2
function primerElemento(arreglo){
    for(let i=0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    };
}
primerElemento(['tuvieja',1,2,3]);