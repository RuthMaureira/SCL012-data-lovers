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

import { resultType } from "../src/data";

let FRUI

describe('resultType', () => {

  it('debería ser una función', () => {
    expect(typeof resultType).toBe('function');
  });

  describe('resultType', () => {
    // escribe aquí tu test
    expect(resultType(FRUIT, 'pera')).toBe(Array(3));
  });
});
