/* Función que crea cards con info de pokemon*/
function createCard(objPoke) {

  /* Creación de elementos div*6, p*8, img, h4*/
  let cardTarjetaWrap = document.createElement("div");
  let cardTarjeta = document.createElement("div");
  let cardAdelante = document.createElement("div");
  let cardNumPoke = document.createElement("p");
  let imgPoke = document.createElement("img");
  let cardNamePoke = document.createElement("h4");
  let cardType = document.createElement("div");
  let cardAtras = document.createElement("div");
  let cardAltura = document.createElement("p");
  let cardPeso = document.createElement("p");
  let cardDebil = document.createElement("p");
  // let cardTypeDebil = document.createElement("div");
  let cardEgg = document.createElement("p");
  let cardMediaSpawn = document.createElement("p");
  let cardSpawnTime = document.createElement("p");
  let cardEvo = document.createElement("p");
  let cardCantCandy = document.createElement("p");

  /* Asignación de clases*/
  /* Asignación de atributos */
  /* Valores */
  /* Info elementos y árbol padre-hijo*/


  cardTarjetaWrap.classList.add("tarjeta-wrap");

  /* div Tarjeta */
  cardTarjeta.classList.add("tarjeta");
  cardTarjetaWrap.appendChild(cardTarjeta);

  /* Tarjeta por adelante */
  cardAdelante.classList.add("adelante");
  cardTarjeta.appendChild(cardAdelante);

  /* Num pokemon */
  cardNumPoke.classList.add("numPoke");
  cardNumPoke.innerHTML = "#" + objPoke.num;
  cardAdelante.appendChild(cardNumPoke);

  /* Img pokemon */
  imgPoke.setAttribute("src", objPoke.img);
  imgPoke.setAttribute("alt", "imagen de " + objPoke.name);
  imgPoke.classList.add("imgCard");
  cardAdelante.appendChild(imgPoke);

  /* Nombre pokemon */
  cardNamePoke.classList.add("namePoke");
  cardNamePoke.innerHTML = objPoke.name;
  cardAdelante.appendChild(cardNamePoke);

  /* Tipo pokemon */
  cardType.innerHTML = objPoke.type;
  cardAdelante.appendChild(cardType);

  /* Tarjeta por atrás */
  cardAtras.classList.add("atras");
  cardTarjeta.appendChild(cardAtras);

  /* Altura pokemon */
  cardAltura.innerHTML = "Altura: " + objPoke.height;
  cardAtras.appendChild(cardAltura);

  /* Peso pokemon */
  cardPeso.innerHTML = "Peso: " + objPoke.weight;
  cardAtras.appendChild(cardPeso);

  /* Débilidades */
  let debil = "Débil a: ";
  for (let i = 0; i < objPoke.weaknesses.length; i++) {
    debil += objPoke.weaknesses[i] + " ";
  }
  cardDebil.innerHTML = debil;
  cardAtras.appendChild(cardDebil);

  // /* Debilidades tipos de pokemon */
  // cardTypeDebil.innerHTML = objPoke.weaknesses;
  // cardAtras.appendChild(cardTypeDebil);

  /* Eclosión de Huevos - distancia */
  cardEgg.innerHTML = "Huevo: " + objPoke.egg;
  cardAtras.appendChild(cardEgg);

  /* Media spawn */
  cardMediaSpawn.innerHTML = "Media spawn: " + objPoke.avg_spawns;
  cardAtras.appendChild(cardMediaSpawn);

  /* Hora más habitual de encontrarlo*/
  cardSpawnTime.innerHTML = "Spawn time[Hr]: " + objPoke.spawn_time;
  cardAtras.appendChild(cardSpawnTime);

  /* Siguiente evolución */
  if (typeof objPoke.next_evolution === 'undefined') {
    cardEvo.innerHTML = "Evolución: No";
    cardAtras.appendChild(cardEvo);
    /* Candy cantidad */
    cardCantCandy.innerHTML = "Candy[Unid]: N/A";
    cardAtras.appendChild(cardCantCandy);
  } else if (typeof objPoke.next_evolution != 'undefined') {
    cardEvo.innerHTML = "Evolución: " + objPoke.next_evolution[0].name;
    cardAtras.appendChild(cardEvo);
    /* Candy cantidad */
    cardCantCandy.innerHTML = "Candy[Unid]: " + objPoke.candy_count;
    cardAtras.appendChild(cardCantCandy);
  }

  return cardTarjetaWrap;
}

/*---------------------------------------------------------------------------------*/

/*Data a utilizar*/
import POKEMON from './data/pokemon/pokemon.js'

// import {
//   orderPoke
// } from './data.js';



/*---------------------------------------------------------------------------------*/

// let result1, result2;

/* Gráfica */
google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  // result1 = orderPoke(POKEMON, 'spawn', 'desc');
  // result2 = result1.filter(poke => poke.avg_spawns > 0);
  //
  // console.log(result2);

  let data = google.visualization.arrayToDataTable([
    ['Element', 'Avg Spawns', {
      role: 'style'
    }, {
      role: 'annotation'
    }],
    ['Weedle', 712, '#3A69C2', '02:21'],
    ['Zubat', 652, '#FFCA05', '12:28'],
    ['Magikarp', 478, '#EE1831', '14:26'],
    ['Spearow', 473, '#021D48', '12:25'],
    ['Drowzee', 321, 'silver', '01:51'],
    ['Caterpie', 303.2, '#3A69C2', '16:35'],
    ['Eevee', 275, '#FFCA05', '05:32'],
    ['Psyduck', 254, '#EE1831', '03:41'],
    ['Paras', 236, '#021D48', '01:42'],
    ['Venonat', 228, 'silver', '02:31']
  ]);


  let options = {
    title: "Media de avistamientos Más frecuentes",
    width: '100%',
    height: '300',
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    titleTextStyle: {
      // color: <string>, // any HTML string color ('red', '#cc00cc')
      fontName: 'Roboto', // i.e. 'Times New Roman'
      fontSize: '20', // 12, 18 whatever you want (don't specify px)
      bold: 'true', // true or false
      italic: 'false' // true of false
    }
  };
  let chart = new google.visualization.ColumnChart(document.getElementById("barchart2"));
  chart.draw(data, options);
  window.addEventListener('resize', drawChart1, false);
}



/*---------------------------------------------------------------------------------*/

// let result3, result4;

/* Gráfica */
google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  // result3 = orderPoke(POKEMON, 'spawn', 'asc');
  // result4 = result1.filter(poke => poke.avg_spawns > 0);
  //
  // console.log(result4);

  let data = google.visualization.arrayToDataTable([
    ['Element', 'Avg Spawns', {
      role: 'style'
    }, {
      role: 'annotation'
    }],
    ['Dragonite', 0.11, '#3A69C2', '23:38'],
    ['Charizard', 0.31, '#FFCA05', '13:34'],
    ['Muk', 0.31, '#EE1831', '01:28'],
    ['Mr. Mime', 0.31, '#021D48', '01:51'],
    ['Gyarados', 0.32, 'silver', '02:15'],
    ['Kabutops', 0.32, '#3A69C2', '23:40'],
    ['Golem', 0.47, '#FFCA05', '12:16'],
    ['Victreebel', 0.59, '#EE1831', '12:19'],
    ['Lapras', 0.6, '#021D48', '08:59'],
    ['Omastar', 0.61, 'silver', '05:04']
  ]);


  let options = {
    title: "Media de avistamientos Menos Frecuentes",
    width: '100%',
    height: '300',
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    titleTextStyle: {
      // color: <string>, // any HTML string color ('red', '#cc00cc')
      fontName: 'Roboto', // i.e. 'Times New Roman'
      fontSize: '20', // 12, 18 whatever you want (don't specify px)
      bold: 'true', // true or false
      italic: 'false' // true of false
    }
  };
  let chart2 = new google.visualization.ColumnChart(document.getElementById("barchart3"));
  chart2.draw(data, options);
  window.addEventListener('resize', drawChart2, false);
}


/*---------------------------------------------------------------------------------*/

/* Legendarios */

// let legend = [132, 144, 145, 146, 150, 151];
let resultLegend = POKEMON.filter(poke => poke.avg_spawns == 0);
// console.log(resultLegend);
//
for (let i = 0; i < 6; i++) {
  /* pedir que vacie wrap en html */
  // document.getElementById("chart_wrap").innerHTML = "";

  /* muestre en wrap tarjeta */
  let tarjeta = createCard(resultLegend[i]);
  /* Añadir como hijos a div wrap */
  let cardWrap = document.getElementById('barchart1');
  cardWrap.appendChild(tarjeta);
}
//
//
//
//
//
// /*---------------------------------------------------------------------------------*/
//
// /*---------------------------------------------------------------------------------*/


let select1 = document.getElementById("legend");
let select2 = document.getElementById("masf");
let select3 = document.getElementById("menosf");

select1.addEventListener('click', legendarios);
select2.addEventListener('click', masfrec);
select3.addEventListener('click', menosfrec);

const bar1 = document.getElementById("barchart1");
const bar2 = document.getElementById("barchart2");
const bar3 = document.getElementById("barchart3");
const bar4 = document.getElementById("chart_wrap");

function legendarios() {
  bar1.style.display = "flex";
  bar4.style.display = "none";
  bar2.style.display = "none";
  bar3.style.display = "none";
}

function masfrec() {
  bar1.style.display = "none";
  bar4.style.display = "block";
  bar2.style.display = "block";
  bar3.style.display = "none";
}
//
function menosfrec() {
  bar1.style.display = "none";
  bar4.style.display = "block";
  bar2.style.display = "none";
  bar3.style.display = "block";
}
