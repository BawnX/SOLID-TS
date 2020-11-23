import {Rectangle} from '../PrincipioSustitucionLiskov/rectangle';

describe('Rectangle Simple Tests', () => {
  test('calculate its Area', () => {
    const rectangleLength: number = 2;
    const rectangleWidth: number = 2;

    const rectangle: Rectangle = new Rectangle(rectangleLength, rectangleWidth);

    const expectedArea: number = 4;

    expect(expectedArea).toEqual(rectangle.getArea());
  });
});
