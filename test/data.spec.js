// importamos la función `example`
// import { example } from "../src/data";
//
// describe('example', () => {
//
//   it('debería ser una función', () => {
//     expect(typeof example).toBe('function');
//   });
//
//   describe('example', () => {
//     // escribe aquí tu test
//   });
// });

/*Data y funciones a utilizar*/

/*Funciones*/
import { resultName, resultType, resultEgg, resultCandy, orderPoke } from "../src/data";

const datos = [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.71 m',
  weight: '6.9 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.69,
  avg_spawns: 69,
  spawn_time: '20:00',
  multipliers: [1.58],
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  next_evolution: [{
    num: '002',
    name: 'Ivysaur',
  }, {
    num: '003',
    name: 'Venusaur',
  }],
}, {
  id: 5,
  num: '005',
  name: 'Charmeleon',
  img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
  type: [
    'Fire',
  ],
  height: '1.09 m',
  weight: '19.0 kg',
  candy: 'Charmander Candy',
  candy_count: 100,
  egg: 'Not in Eggs',
  spawn_chance: 0.012,
  avg_spawns: 1.2,
  spawn_time: '19:00',
  multipliers: [1.79],
  weaknesses: [
    'Water',
    'Ground',
    'Rock',
  ],
  prev_evolution: [{
    num: '004',
    name: 'Charmander',
}]
}];


describe('resultName', () => {

  it('resultName debería ser una función', () => {
    expect(typeof resultName).toBe('function');
  });

  it('resultName(datos, "Bulbasaur") debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}])', () => {
    // escribe aquí tu test
    expect(resultName(datos,'Bulbasaur')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });
});


describe('resultType', () => {

  it('resultType debería ser una función', () => {
    expect(typeof resultType).toBe('function');
  });

  it('resultType(datos, "Grass") debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}])', () => {
    // escribe aquí tu test
    expect(resultType(datos,'Grass')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

});

describe('resultEgg', () => {

  it('resultEgg debería ser una función', () => {
    expect(typeof resultEgg).toBe('function');
  });

  it('resultEgg(datos, "2 km") debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}])', () => {
    // escribe aquí tu test
    expect(resultEgg(datos,'2 km')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

});

describe('resultCandy', () => {

  it('resultCandy debería ser una función', () => {
    expect(typeof resultCandy).toBe('function');
  });

  it('resultCandy(datos, "25") debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}])', () => {
    // escribe aquí tu test
    expect(resultCandy(datos,'25')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

});

/* Ordenar: 8 casos */
describe('orderPoke', () => {

  it('orderPoke debería ser una función', () => {
    expect(typeof orderPoke).toBe('function');
  });

  it('orderPoke(datos, name, A-Z) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'name', 'A-Z')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]);
  });

  it('orderPoke(datos, name, Z-A) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'name', 'Z-A')).toMatchObject([{"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}, {"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

  it('orderPoke(datos, id, asc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'id', 'asc')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]);
  });

  it('orderPoke(datos, id, desc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'id', 'desc')).toMatchObject([{"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}, {"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

  it('orderPoke(datos, weight, asc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'weight', 'asc')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]);
  });

  it('orderPoke(datos, weight, desc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'weight', 'desc')).toMatchObject([{"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}, {"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

  it('orderPoke(datos, height, asc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'height', 'asc')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]);
  });

  it('orderPoke(datos, height, desc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'height', 'desc')).toMatchObject([{"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}, {"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

  it('orderPoke(datos, spawn, asc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'spawn', 'asc')).toMatchObject([{"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}, {"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}]);
  });

  it('orderPoke(datos, spawn, desc) debería retornar arreglo [{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]', () => {
    // escribe aquí tu test
    expect(orderPoke(datos, 'spawn', 'desc')).toMatchObject([{"avg_spawns": 69, "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "multipliers": [1.58], "name": "Bulbasaur", "next_evolution": [{"name": "Ivysaur", "num": "002"}, {"name": "Venusaur", "num": "003"}], "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], "weight": "6.9 kg"}, {"avg_spawns": 1.2, "candy": "Charmander Candy", "candy_count": 100, "egg": "Not in Eggs", "height": "1.09 m", "id": 5, "img": "http://www.serebii.net/pokemongo/pokemon/005.png", "multipliers": [1.79], "name": "Charmeleon", "prev_evolution": [{"name": "Charmander", "num": "004",}]}]);
  });
});
