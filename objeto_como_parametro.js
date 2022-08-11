// ↓ RECIBIR OBJETO COMO PARAMETRO Y RECORRER SUS ELEMENTOS ↓

/*function recibirObjeto(objetoComoParametroGil){
    for (let elementos in object){
        console.log(`object.${elementos} = ${object[elementos]}`);
        // console.log(elementos, object[elementos]); esta sería la forma traducida de lo de arriba para entenderlo mejor
    };
}
let object = {
    1:"tuvieja",
    2:"tuhermana",
    3:"tumadrina",
    4:20,
    5:80,
}
recibirObjeto(object); */

/*

*/

// MEJOR FORMA DE HACERLO ↓↓

/*function recibirObjeto(objetoComoParametroGil){
    for (let elementos in objetoComoParametroGil){
        console.log(`object.${elementos} = ${objetoComoParametroGil[elementos]}`);
        // console.log(elementos, object[elementos]); esta sería la forma traducida de lo de arriba para entenderlo mejor
    };
}
recibirObjeto({1:'Tuvi', 2:'tu hermana',3: 'tu madrina', 4: 20, 5: 80});*/


/*↓ CON ESTA FUNCION RECORRO EL OBJETO PRIMERO CONVIRTIENDOLO
A UN Array Y GUARDANDOLO EN UNA VARIABLE (ESA VARIABLE SE CONVIERTE 
TAMBIEN EN ARRAY) LUEGO RECORRO ESA VARIABLE ARRAY CON UN CICLO FOR 
Y FINALMENTE OBTENGO LOS ELEMENTOS DEL OBJETO PERO SOLO LOS VALORES*/ 

function recibirObjeto(obj){
    const arr = Object.values(obj)
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    };
}
recibirObjeto({1:'Tuvi', 2:'tu hermana',3: 'tu madrina', 4: 20, 5: 80});