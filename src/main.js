/*Video: pause and play*/
/* Se crea variables para conectar DOM con HTML */
let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

/* cuando se presione botón: pause or play*/
btn.addEventListener('click', videoAction);

function videoAction() {
  /* Si video estaba pausado y presionan botón, dar play y cambiar ícono*/
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="far fa-pause-circle fa-2x"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="far fa-play-circle fa-2x"></i>';
  }
}

/*---------------------------------------------------------------------------------*/

/*Data a utilizar*/
import POKEMON from './data/pokemon/pokemon.js'


/* Pruebas data */
console.log(POKEMON);
console.log(POKEMON[0].name);
console.log(POKEMON[0].num);
console.log(POKEMON[0].type);
console.log(POKEMON[0].type[0]);
console.log(POKEMON[0].next_evolution[0].name);

// console.log(typeof POKEMON[2].next_evolution[0].name);

console.log(POKEMON.length);
console.log(Object.keys(POKEMON[0]));

console.log(POKEMON[0].candy_count);
console.log(typeof POKEMON[0].candy_count);
console.log(POKEMON.map(poke => poke.candy_count));

import {
  resultType
} from './data.js'; // Importar la función qe está en data.js
console.log(resultType(POKEMON, 'Grass'));
console.log(resultType(POKEMON, 'Poison'));
console.log(resultType(POKEMON, 'Fire').length);

import {
  resultEgg
} from './data.js'; // Importar la función qe está en data.js
console.log(resultEgg(POKEMON, '2 km'));

import {
  resultCandy
} from './data.js'; // Importar la función qe está en data.js
console.log(resultCandy(POKEMON, '25'));


import {
  orderPoke
} from './data.js'; // Importar la función qe está en data.js
// console.log(orderPoke(POKEMON, 'height', 'desc'));

/*---------------------------------------------------------------------------------*/


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

console.log(createCard(POKEMON[0]));
console.log(createCard(POKEMON[2]));

/*---------------------------------------------------------------------------------*/

/* Cargar tarjetas cuando se cargue página */
window.addEventListener("load", start, false);

function start() {

  for (let i = 0; i < POKEMON.length; i++) {
    let tarjeta = createCard(POKEMON[i]);
    /* Añadir como hijos a div wrap */
    let cardWrap = document.getElementById('wrap');
    cardWrap.appendChild(tarjeta);

  }
  orderPoke(POKEMON, 'id', 'asc');
};


/*---------------------------------------------------------------------------------*/

/* Buscador por nombre o número */

const inputPoke = document.getElementById('inputPoke');
const listPoke = document.getElementById('listPoke');
const btnSearch = document.getElementById('btnSearch');

const searchPoke = (dataPoke, dataList) => {
  let createList = [];
  dataPoke.forEach((poke) => {
    createList.push(`<option value='${poke.name}'>${poke.num}</option>`);
  });
  dataList.innerHTML = createList.join('');
  return 1;
};

searchPoke(POKEMON, listPoke);

/* Buscar pokemon al hacer click en botón */
btnSearch.addEventListener('click', buscar);

function buscar(){
  console.log(inputPoke.value);

  if(inputPoke.value === ''){
    alert("Recuerde ingresar información (nombre/número Pókemon)");
    start();
  }

  else {

    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    /* seleccionar el elegido */
    let seleccion = POKEMON.filter(poke => poke.name.includes(inputPoke.value));
    console.log(seleccion);

    /* muestre en wrap tarjeta */
    let tarjeta = createCard(seleccion[0]);
    /* Añadir como hijos a div wrap */
    let cardWrap = document.getElementById('wrap');
    cardWrap.appendChild(tarjeta);


  }
}







/*---------------------------------------------------------------------------------*/

/*Filtrar por tipo*/

/* variable para select typeKanto */
let selectType = document.getElementById("tipoPoke");

console.log(selectType.value);

selectType.addEventListener('change', () => {

  /* Si se selecciona esta opción resetear el resto de select e input */
  document.getElementById("inputPoke").value = "";
  document.ready = document.getElementById("huevoPoke").value = 'allEgg';
  document.ready = document.getElementById("candyPoke").value = 'allCandy';
  document.ready = document.getElementById("ordenPoke").value = 'order';

  console.log(selectType.value);

  if (selectType.value === 'allType') {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    start();

  } else {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    /* variable que almacena valor seleccionado */
    let selectValue = selectType.value;
    /* variable para almacenar resultado */
    let selectResult = resultType(POKEMON, selectValue);

    console.log(selectResult);
    //recorriendo con for el resultado
    for (let i = 0; i < selectResult.length; i++) {
      /* muestre en wrap tarjeta */
      let tarjeta = createCard(selectResult[i]);
      /* Añadir como hijos a div wrap */
      let cardWrap = document.getElementById('wrap');
      cardWrap.appendChild(tarjeta);
    }
  }
});

/*---------------------------------------------------------------------------------*/

/*Filtrar por distancia eclosión huevo*/

/* variable para select huevoPoke */
let selectEgg = document.getElementById("huevoPoke");

selectEgg.addEventListener('change', () => {

  /* Si se selecciona esta opción resetear el resto de select e input */
  document.getElementById("inputPoke").value = "";
  document.ready = document.getElementById("tipoPoke").value = 'allType';
  document.ready = document.getElementById("candyPoke").value = 'allCandy';
  document.ready = document.getElementById("ordenPoke").value = 'order';


  if (selectEgg.value === 'allEgg') {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    start();

  } else {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    /* variable que almacena valor seleccionado */
    let selectValue = selectEgg.value;
    /* variable para almacenar resultado */
    let selectResult = resultEgg(POKEMON, selectValue);

    //recorriendo con for el resultado
    for (let i = 0; i < selectResult.length; i++) {
      /* muestre en wrap tarjeta */
      let tarjeta = createCard(selectResult[i]);
      /* Añadir como hijos a div wrap */
      let cardWrap = document.getElementById('wrap');
      cardWrap.appendChild(tarjeta);
    }
  }
});

/*---------------------------------------------------------------------------------*/

/*Filtrar por cantidad de caramelos para evolucionar*/

/* variable para select candyPoke */
let selectCandy = document.getElementById("candyPoke");

selectCandy.addEventListener('change', () => {

  /* Si se selecciona esta opción resetear el resto de select e input */
  document.getElementById("inputPoke").value = "";
  document.ready = document.getElementById("tipoPoke").value = 'allType';
  document.ready = document.getElementById("huevoPoke").value = 'allEgg';
  document.ready = document.getElementById("ordenPoke").value = 'order';

  if (selectCandy.value === 'allCandy') {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    start();

  } else {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    /* variable que almacena valor seleccionado */
    let selectValue = selectCandy.value;
    /* variable para almacenar resultado */
    let selectResult = resultCandy(POKEMON, selectValue);
    //recorriendo con for el resultado
    for (let i = 0; i < selectResult.length; i++) {
      /* muestre en wrap tarjeta */
      let tarjeta = createCard(selectResult[i]);
      /* Añadir como hijos a div wrap */
      let cardWrap = document.getElementById('wrap');
      cardWrap.appendChild(tarjeta);
    }
  }
});


/*---------------------------------------------------------------------------------*/

/* Ordenar según orden alfabético (nombre), id, peso y altura. */

/* variable para select ordenPoke */
let selectOrder = document.getElementById("ordenPoke");

selectOrder.addEventListener('change', () => {

  /* Si se selecciona esta opción resetear el resto de select e input */
  document.getElementById("inputPoke").value = "";
  document.ready = document.getElementById("tipoPoke").value = 'allType';
  document.ready = document.getElementById("huevoPoke").value = 'allEgg';
  document.ready = document.getElementById("candyPoke").value = 'allCandy';

  if (selectOrder.value === 'order') {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    orderPoke(POKEMON, 'id', 'asc');
    start();

  } else {
    /* pedir que vacie wrap en html */
    document.getElementById("wrap").innerHTML = "";
    /* variable que almacena valor seleccionado */
    let selectValue = selectOrder.value;
    let selectResult;

    switch (selectValue) {
      case "A-Z":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'name', 'A-Z');
        break;
      case "Z-A":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'name', 'Z-A');
        break;
      case "idAsc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'id', 'asc');
        break;
      case "idDesc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'id', 'desc');
        break;
      case "hAsc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'height', 'asc');
        break;
      case "hDesc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'height', 'desc');
        break;
      case "wAsc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'weight', 'asc');
        break;
      case "wDesc":
      /* variable para almacenar resultado */
      selectResult = orderPoke(POKEMON, 'weight', 'desc');
        break;
    }

    //recorriendo con for el resultado
    for (let i = 0; i < selectResult.length; i++) {
      /* muestre en wrap tarjeta */
      let tarjeta = createCard(selectResult[i]);
      /* Añadir como hijos a div wrap */
      let cardWrap = document.getElementById('wrap');
      cardWrap.appendChild(tarjeta);
    }
  }
});

/*---------------------------------------------------------------------------------*/



/*---------------------------------------------------------------------------------*/
