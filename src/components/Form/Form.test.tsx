import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyForm } from './MyForm';

test('renders form fields', () => {
  render(<MyForm />);
  const fields = screen.getAllByRole('textbox');
  expect(fields).toHaveLength(3);
});
