// const sum = require('./sum');
import { sum } from "../sum";

it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it('adds 3 + 5 to equal 8', () => {
    expect(sum(3, 5)).toBe(8);
});