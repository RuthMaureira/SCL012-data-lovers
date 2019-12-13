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


/*Data a utilizar*/
import POKEMON from './data/pokemon/pokemon.js'
/*Funciones*/
import { resultName, resultType, resultEgg, resultCandy, orderPoke } from "../src/data";


describe('resultName', () => {

  it('resultName debería ser una función', () => {
    expect(typeof resultName).toBe('function');
  });

  // describe('resultName(POKEMON, 'Bulbasaur') debería devolver ["Bulbasaur"])', () => {
  //   // escribe aquí tu test
  //   expect(resultName(POKEMON, 'Bulbasaur')).toStrictEqual(["Bulbasaur"]);
  // });
});


describe('resultType', () => {

  it('resultType debería ser una función', () => {
    expect(typeof resultType).toBe('function');
  });

  // describe('resultType(POKEMON, 'Dragon') debería devolver [["Dratini"], ["Dragonair"], ["Dragonite"]])', () => {
  //   // escribe aquí tu test
  //   expect(resultType(POKEMON, 'Dragon')).toStrictEqual([["Dratini"], ["Dragonair"], ["Dragonite"]]);
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
