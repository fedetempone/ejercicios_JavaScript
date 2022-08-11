let typeSuscripción = [
    "free",
    "basic", 
    "expert", 
    "expertplus"
    ];
let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de TempDeveloper durante un mes", 
    "puedes tomar casi todos los cursos de TempDeveloper durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de TempDeveloper durante un año"];
let i;
let userSuscription = prompt("Escribí el plan al que quieras suscribirte:\n Free \n Basic\n Expert\n ExpertPlus").toLowerCase();
    for (i=0; i < typeSuscripción.length; i++) {
        if(userSuscription === null || userSuscription != typeSuscripción[i]){
            console.warn('opcion no valida, debe completar el campo correctamente');
        }else{
            for (i=0; i < typeSuscripción.length; i++) {
                if (userSuscription == typeSuscripción[i]) {
                    console.log(`Te acabas de suscribir al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
                }
            }
        }
    }