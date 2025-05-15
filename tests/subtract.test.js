const subtract = require('../src/subtract');

describe('subtract', () => {
    test('should return the difference of two positive numbers', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test('should return the difference of two negative numbers', () => {
        expect(subtract(-10, -5)).toBe(-5);
    });

    test('should return the difference of a positive and a negative number', () => {
        expect(subtract(10, -5)).toBe(15);
    });

    test('should return the difference of a negative and a positive number', () => {
        expect(subtract(-10, 5)).toBe(-15);
    });

    test('should return the difference when one of the numbers is zero', () => {
        expect(subtract(10, 0)).toBe(10);
        expect(subtract(0, 10)).toBe(-10);
    });

    test('should return 0 when both numbers are zero', () => {
        expect(subtract(0, 0)).toBe(0);
    });

    test('should return false if one or both inputs are not numbers', () => {
        expect(subtract('10', 5)).toBe(false);
        expect(subtract(10, '5')).toBe(false);
        expect(subtract('10', '5')).toBe(false);
        expect(subtract(null, 5)).toBe(false);
        expect(subtract(10, undefined)).toBe(false);
        expect(subtract({}, [])).toBe(false);
    });

    test('should return false if inputs are missing', () => {
        expect(subtract()).toBe(false);
        expect(subtract(10)).toBe(false);
    });
});