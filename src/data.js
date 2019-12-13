/* Manejo de data */

/* esta es una función de ejemplo
export const example = () => {
  return 'example';
};*/

/* Filtrar por nombre */
export let resultName = (dataPoke, nameKanto) => {
  /* Método include() determina si una matriz contiene un elemento específico. Devuelve verdadero si la matriz contiene el elemento y falso si no. */
  return dataPoke.filter(poke => poke.name.includes(nameKanto));
};

/* Filtrar por tipo */

export let resultType = (dataPoke, typeKanto) => {
  return dataPoke.filter(poke => poke.type.includes(typeKanto));
};

/* Filtrar por egg */

export let resultEgg = (dataPoke, eggKanto) => {
  return dataPoke.filter(poke => poke.egg.includes(eggKanto));
};

/* Filtrar por candy */

export let resultCandy = (dataPoke, candyKanto) => {
  return dataPoke.filter(poke => poke.candy_count == candyKanto);
};


/* Ordenar alfabéticamente, ID, altura y peso */

/* A-Z: Si a<b return -1, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si a=b retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes.
Si a>b return 1, se sitúa b en un indice menor que a.*/

export let orderPoke = (dataPoke, sortBy, sortOrder) => {

  /*Ordenar alfabeticamente */
  if (sortBy === "name" && sortOrder === "A-Z") {
    return dataPoke.sort(function(a, b) {
      if (a.name == b.name) {
        return 0;
      }
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
  } else if (sortBy === "name" && sortOrder === "Z-A") {
    return dataPoke.sort(function(a, b) {
      if (b.name == a.name) {
        return 0;
      }
      if (b.name > a.name) {
        return 1;
      } else {

        return -1;
      }
    });
  }

  /* Ordenar por id */
  else if (sortBy == "id" && sortOrder == "asc") {
    return dataPoke.sort((a, b) => (a.id - b.id));
  } else if (sortBy == "id" && sortOrder == "desc") {
    return dataPoke.sort((a, b) => (b.id - a.id));
  }

  /* Ordenar por peso */
  else if (sortBy == "weight" && sortOrder == "asc") {
    return dataPoke.sort((a, b) => (parseFloat(a.weight) - parseFloat(b.weight)));
  } else if (sortBy == "weight" && sortOrder == "desc") {
    return dataPoke.sort((a, b) => (parseFloat(b.weight) - parseFloat(a.weight)));
  }

  /* Ordenar por altura */
  else if (sortBy == "height" && sortOrder == "asc") {
    return dataPoke.sort((a, b) => (parseFloat(a.height) - parseFloat(b.height)));
  } else if (sortBy == "height" && sortOrder == "desc") {
    return dataPoke.sort((a, b) => (parseFloat(b.height) - parseFloat(a.height)));
  }

  /*Ordenar por avg_spawns */
  else if (sortBy == "spawn" && sortOrder == "asc") {
    return dataPoke.sort((a, b) => (parseFloat(a.avg_spawns) - parseFloat(b.avg_spawns)));
  } else if (sortBy == "spawn" && sortOrder == "desc") {
    return dataPoke.sort((a, b) => (parseFloat(b.avg_spawns) - parseFloat(a.avg_spawns)));
  }


};
