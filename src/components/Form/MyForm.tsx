import { Formik } from 'formik';
import './style.css';
import { Schema } from './schema';
import { initialValues } from './initialValues';
import { ScrollToError } from './ScrollToError';
import { useMyForm } from './useMyForm';
import { MyInput } from './MyInput';

export const MyForm = () => {
  const { handleMyFormSubmit } = useMyForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleMyFormSubmit}
      validationSchema={Schema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form" name="myForm">
          <ScrollToError clue="form-error" />

          <MyInput name="firstName" label="First Name" />
          <MyInput name="lastName" label="Last Name" />
          <MyInput name="email" label="E-mail" />

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
