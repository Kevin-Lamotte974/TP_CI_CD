import sum from './sum';

test('addition de 1 + 2 égale 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('addition de plusieurs nombres', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('addition de 0 arguments retourne 0', () => {
  expect(sum()).toBe(0);
});

test('addition de nombres négatifs', () => {
  expect(sum(-1, -2, -3, -4)).toBe(-10);
});

test('addition de nombres mélangés (positifs et négatifs)', () => {
  expect(sum(-5, 5, 10)).toBe(10);
});
