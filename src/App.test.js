import React from 'react';
import App from './App';
import { render, screen } from "@testing-library/react"

test('renders learn react link', () => {
  render(<App />);
  screen.debug()
});
