import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('tests button functionality of calculator', () => {
  let first;
  let display;
  beforeEach(() => {
    render(<Calculator />);
    [display] = screen.getAllByText('0');
    first = '8';
    fireEvent.click(screen.getByText(first));
  });
  afterEach(() => {
    fireEvent.click(screen.getByText('AC'));
  });
  it('Tests display after input', () => {
    const operation = '+';
    const second = '5';
    fireEvent.click(screen.getByText(operation));
    fireEvent.click(screen.getByText(second));
    expect(display.textContent).toEqual(first + operation + second);
  });
  it('Tests addition operation', () => {
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(display.textContent).toEqual(`${5 + 8}`);
  });
  it('Tests subtraction operation', () => {
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(display.textContent).toEqual(`${8 - 5}`);
  });
  it('Tests multiplication operation', () => {
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(display.textContent).toEqual(`${5 * 8}`);
  });
  it('Tests division operation', () => {
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display.textContent).toEqual(`${8 / 2}`);
  });
});
