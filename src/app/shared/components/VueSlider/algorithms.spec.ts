import { geometric, linear, log } from './algorithms';

describe('VueSlider Algorithms', () => {

  test('geometric should return correct position', () => {
    expect(geometric.getPosition(50, 0, 100)).toBe(70.71067811865476);
  });

  test('geometric should return correct value', () => {
    expect(geometric.getValue(70.71067811865476, 0, 100)).toBe(50);
  });

  test('linear should return correct position', () => {
    expect(linear.getPosition(50, 0, 100)).toBe(50);
  });

  test('linear should return correct value', () => {
    expect(linear.getValue(50, 0, 100)).toBe(50);
  });

  test('linear should return min value', () => {
    expect(linear.getValue(-50, 0, 100)).toBe(0);
  });

  test('linear should return max value', () => {
    expect(linear.getValue(150, 0, 100)).toBe(100);
  });

  test('log should return correct position', () => {
    expect(log.getPosition(50, 0, 100)).toBe(84.94850021680094);
  });

  test('log should return correct value', () => {
    expect(log.getValue(84.94850021680094, 0, 100)).toBe(50);
  });

  test('log should return correct position', () => {
    expect(log.getPosition(50, 1, 100)).toBe(84.94850021680094);
  });

  test('log should return correct value', () => {
    expect(log.getValue(84.94850021680094, 1, 100)).toBe(50);
  });

  test('log should return min value', () => {
    expect(log.getValue(-50, 0, 100)).toBe(0);
  });

  test('log should return max value', () => {
    expect(log.getValue(150, 0, 100)).toBe(100);
  });

});
