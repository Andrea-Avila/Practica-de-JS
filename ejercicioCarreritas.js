var carreritas= ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];


carreritas .splice (2,2); //Elimina a Jorge
carreritas .splice (0,0,"Ramiro","Jorge");  //Coloca a Ramiro en primer lugar y jorge en segundo
carreritas .splice(2,1); //Elimina a roberto por que se salio de la carrera
carreritas .splice(3,0,"Sofia","Andrea"); //baja a andrea un lugar y coloca a Sofia antes.
carreritas .splice(4,1,"Jose"); //Solo agrega a Jose como quinto participante
carreritas .splice(5,1); //Elimina a sofia repetida

console.log(carreritas);
