import { test, render, screen, expect } from '@testing-library/react';
import App from './App';

const test = window.test;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
