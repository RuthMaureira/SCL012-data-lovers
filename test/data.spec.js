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
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.71 m',
  weight: '6.9 kg',
  candy_count: 25,
  egg: '2 km',
  avg_spawns: 69,
  spawn_time: '20:00',
}, {
  id: 2,
  num: '002',
  name: 'Ivysaur',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.99 m',
  weight: '13.0 kg',
  candy_count: 100,
  egg: 'Not in Eggs',
  avg_spawns: 4.2,
  spawn_time: '07:00'
}];


describe('resultName', () => {

  it('resultName debería ser una función', () => {
    expect(typeof resultName).toBe('function');
  });

  describe('resultName(datos, "Bulbasaur") debería devolver arreglo [{"avg_spawns": 69, "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "name": "Bulbasaur", "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weight": "6.9 kg"}]', () => {
    // escribe aquí tu test
    expect(resultName(datos,'Bulbasaur')).toMatchObject([{"avg_spawns": 69, "candy_count": 25, "egg": "2 km", "height": "0.71 m", "id": 1, "name": "Bulbasaur", "num": "001", "spawn_chance": 0.69, "spawn_time": "20:00", "type": ["Grass", "Poison"], "weight": "6.9 kg"}]);
  });
});


describe('resultType', () => {

  it('resultType debería ser una función', () => {
    expect(typeof resultType).toBe('function');
  });

  // describe('resultType(datos, 'Grass') debería devolver arreglo', () => {
  //   // escribe aquí tu test
  //   expect(resultType(datos, 'Grass')).toStrictEqual(["Dratini"]);
  // });

});

describe('resultEgg', () => {

  it('resultEgg debería ser una función', () => {
    expect(typeof resultEgg).toBe('function');
  });

});

describe('resultCandy', () => {

  it('resultCandy debería ser una función', () => {
    expect(typeof resultCandy).toBe('function');
  });

});

describe('orderPoke', () => {

  it('orderPoke debería ser una función', () => {
    expect(typeof orderPoke).toBe('function');
  });

});
