const multiply = require('../src/multiply');

describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('should return the product of a positive and a negative number', () => {
        expect(multiply(5, -4)).toBe(-20);
    });

    test('should return the product of two negative numbers', () => {
        expect(multiply(-3, -7)).toBe(21);
    });

    test('should return 0 when one of the numbers is 0', () => {
        expect(multiply(0, 10)).toBe(0);
        expect(multiply(10, 0)).toBe(0);
    });

    test('should return false if one or both inputs are not numbers', () => {
        expect(multiply('a', 5)).toBe(false);
        expect(multiply(5, null)).toBe(false);
        expect(multiply(undefined, 5)).toBe(false);
        expect(multiply({}, [])).toBe(false);
    });

    test('should return false if inputs are missing', () => {
        expect(multiply()).toBe(false);
        expect(multiply(5)).toBe(false);
    });

    test('should handle edge cases with 0 correctly', () => {
        expect(multiply(0, 0)).toBe(0);
    });
});