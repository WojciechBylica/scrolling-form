import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MyForm } from './MyForm';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

test('renders form fields', () => {
  render(<MyForm />);
  const fields = screen.getAllByRole('textbox');
  expect(fields).toHaveLength(3);
});

test('it contains a button', () => {
  render(<MyForm />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('form-button');
  expect(button).toHaveAccessibleName();
});
