import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  //render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const myCount = screen.getByTestId(/count/i);
  expect(myCount.innerHTML).toBe("0");
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const myButton = screen.getByText(/\+/i);
  const myCount = screen.getByTestId(/count/i);
  var intTemp = parseInt(myCount.innerHTML);
  act(() => {
    myButton.click();
  });
  expect(parseInt(myCount.innerHTML)).toBe(intTemp+1);
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const myButton = screen.getByText(/\-/i);
  const myCount = screen.getByTestId(/count/i);
  var intTemp = parseInt(myCount.innerHTML);
  act(() => {
    myButton.click();
  });
  expect(parseInt(myCount.innerHTML)).toBe(intTemp-1);
  // Complete the unit test below based on the objective in the line above
});
