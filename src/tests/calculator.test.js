import '@testing-library/jest-dom/extend-expect';
import calculate from './calculator';

describe('Test calculator functions', () => {
  const buttonName = '=';
  const plus = { total: '2', next: '3', operation: '+' };
  const resultPlus = calculate(plus, buttonName);

  it('test if sum 2 + 3 = 5', () => {
    expect(resultPlus.total).toBe('5');
  });

  const minus = { total: '5', next: '2', operation: '-' };
  const resultMinus = calculate(minus, buttonName);

  it('test if subtraction 5 - 2 = 3', () => {
    expect(resultMinus.total).toBe('3');
  });

  const multiplication = { total: '3', next: '5', operation: 'x' };
  const resultMulti = calculate(multiplication, buttonName);

  it('test if multiplication 3 * 5 = 15', () => {
    expect(resultMulti.total).toBe('15');
  });

  const division = { total: '15', next: '3', operation: '÷' };
  const resultDevision = calculate(division, buttonName);

  it('test if sum 15 ÷ 3 = 5', () => {
    expect(resultDevision.total).toBe('5');
  });

  const remainder = { total: '12', next: '5', operation: '%' };
  const resultRemainder = calculate(remainder, buttonName);

  it('test if sum 12 % 5 = 2', () => {
    expect(resultRemainder.total).toBe('2');
  });
});
