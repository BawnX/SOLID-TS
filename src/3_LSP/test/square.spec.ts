import { Square } from "../PrincipioSustitucionLiskov/square";

describe('Square Simple Tests', () => {
  test('not respect the liskov substitution principle breaking the rectangle laws while modifying its length() ', () => {
    const squareLengthAndWidth = 2;

    const square: Square = new Square(squareLengthAndWidth)

    const newSquareLength = 4;
    square.setLength(newSquareLength);

    const expectedAreaTakingIntoAccountRectangleLaws = 8;

    expect(expectedAreaTakingIntoAccountRectangleLaws).not.toEqual(square.getArea())
  });
})