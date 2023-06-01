var elementoHoroscopo = prompt ("Ingresa Horosocopo");

 var elementoDia = prompt ("Ingresa tu Dia de Nacimiento de la siguiente manera (dd)");
 var elementoMes = prompt ("Ingresa tu Mes de Nacimiento de la siguiente manera (mm)");
 
 
if (elementoMes =="03" && elementoMes <="04" ) {
    horoscopo = "Aries";
}
else if (elementoMes =="03" && elementoMes <="04") {
    clasificacionIMC = "infrapeso";
}


switch (elementoHoroscopo) {
    case "Aries":
        console.log("Disfrutarás de buena comunicación con todo el mundo hoy, aunque podrías desilusionarte con alguno-a de tus amigos-as o con los proyectos inmediatos. Algún asunto te tendrá un poco preocupado-a. En general, será un mal día para los viajes largos, pues podrías tener complicaciones en su transcurso: ten cuidado, Aries.");
        break;
    case "Tauro":
        console.log("Tauro, posiblemente dejes que sea tu pareja quien resuelva los problemas que se presenten en casa, y harías bien, pues contigo hoy no habrá quién se aclare... cambiarás tanto de parecer, que no concretarás nada. Tu falta de comprensión de las situaciones de los demás podrá llevarte a encontronazos con las personas cercanas.");
        break;
    case "Geminis":
        console.log("En estos momentos de tu vida centrarás tu interés en el plano afectivo; además, en los planos profesional y económico te irá bien. Sin embargo, Géminis, eres demasiado reticente a expresar abiertamente tus sentimientos: ábrete a los demás, ¿cómo quieres que te den cariño si tú pareces insensible a él? Piensa en ello.");
        break;
    case "Cancer":
        console.log("Es tiempo de ocuparte de ti, Cáncer, de mirar por tu salud y bienestar. Puede que estés un poco harto-a del horario de tu trabajo, y es que, necesitas más tiempo para ti. Te encantaría cambiar algunas cosas en tu vida, pero por ahora, no te quedará más remedio que esperar. Por último, mantendrás unas buenas relaciones sociales.");
        break;
    case "Leo":
        console.log("Hoy será un mal día en el terreno profesional, además, incluso podrías tener problemas con la ley. Si estás esperando la sentencia de un juicio, las cosas se te pondrán en contra y no te darán la razón. En el terreno sentimental tampoco te irá bien; es posible los engaños os distancien. Leo, en general, hoy todo será desfavorable.");
        break;
    case "Virgo":
        console.log("TTendrás que esforzarte al máximo para obtener lo que te pertenece hoy: no te vendas y exige lo que creas que es justo. Es el momento de que te dediques a tu propia persona; en este sentido, podrías empezar por llevar una dieta sana y hacer cada día un poco de ejercicio. Virgo, no seas tan perezoso-a.");
        break;
    case "Libra":
        console.log("Es posible que hoy sientas mucho interés en cuestiones relacionadas con el aprendizaje o los medios de comunicación. También sentirás deseos de investigar con detenimiento en algún tema concreto que podría estar relacionado con la espiritualidad. Libra, te sentirás mejor rodeado-a de gente, así que te dedicarás a preparar actividades deportivas o recreativas para compartir con los demás.");
        break;
    case "Escorpio":
        console.log("Puede que te sientas algo estancado-a en alguna faceta de la vida, pero, en realidad, no existe tal estancamiento; a veces, se mueven unas cosas, mientras otras parece que no lo hacen. Esta vez, lo que se moverá será algo muy profundo e interno: dale tiempo al tiempo, Escorpio.");
        break;
    case "Sagitario":
        console.log("Hoy será el día de las relaciones, Sagitario, podrás aprovecharte de cierta ayuda extra para resolver todos los problemas que pudieras tener con tu pareja. Además, también será el momento para consolidar tus relaciones sentimentales o iniciar otras nuevas, si eso es lo que realmente deseas.");
        break;
    case "Capricornio":
        console.log("El día pondrá de relieve las penas que tengas en el corazón... Es el momento de dejar atrás el pasado y de transformar todas las experiencias dolorosas, con el fin de abrirte sin ningún temor a nuevas relaciones. A veces, tenemos algunos deseos, como tener una pareja estable, y no los conseguimos, ignorando que, inconscientemente, lo estamos rechazando debido a nuestros miedos internos.");
        break;
    case "Acuario":
        console.log("Es posible que se produzcan cambios radicales en tu vida hoy; tal vez te lleves una desilusión muy grande con una persona y sufras dolor de corazón. Puede que por ello decidas cambiar el escenario en el que se desarrolla tu vida. Te vendría muy bien hacerlo, pues podrás aclarar tus ideas.");
        break;
    case "Piscis":
        console.log("Tendrás la oportunidad de conocer a nuevas personas y de participar en proyectos comunes que te beneficiarán no solamente en el ámbito económico, sino también en el personal. Tal vez encuentres tu primer trabajo o cambies radicalmente de profesión; en cualquier caso, los cambios estarán servidos en este terreno.");
        break;

    default:
       console.log("Ingresaste un Signo que no es valido");
}