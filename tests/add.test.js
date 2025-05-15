const add = require('../src/add');

describe('add function', () => {
    test('should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('should return false if inputs are not numbers', () => {
        expect(add('2', 3)).toBe(false);
        expect(add(2, '3')).toBe(false);
        expect(add(null, 3)).toBe(false);
        expect(add(2, undefined)).toBe(false);
        expect(add({}, [])).toBe(false);
    });

    test('should return false if inputs are missing', () => {
        expect(add()).toBe(false);
        expect(add(2)).toBe(false);
    });

    test('should handle zero correctly', () => {
        expect(add(0, 5)).toBe(5);
        expect(add(5, 0)).toBe(5);
        expect(add(0, 0)).toBe(0);
    });
});