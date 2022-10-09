import { useFormik } from 'formik';
import './style.css';
import { Schema } from './schema';
import { initialValues } from './initialValues';
import { ScrollToError } from './ScrollToError';
import { FormValues } from './types';
import { off } from 'process';

export const MyForm = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    isSubmitting,
    setFieldValue
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      window.location.reload();
    },
    validationSchema: Schema
  });

  const StatusVisualiser = ({ fieldName }: { fieldName: boolean }) => (
    <img
      src={'logo192.png'}
      width={20}
      height={20}
      className={`${
        fieldName ? 'form-loader form-loader_error' : 'form-loader'
      }`}
    />
  );

  return (
    <form onSubmit={handleSubmit} className="form" name="myForm">
      <ScrollToError clue="form-error" isSubmitting={isSubmitting} />

      <label htmlFor="firstName" className="form-label">
        <p className="form-paragraph">First Name</p>
        <div className="form-inputBox">
          <StatusVisualiser
            fieldName={!!touched.firstName && !!errors.firstName}
          />
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-input"
            onBlur={({ target }) => {
              setFieldValue('firstName', target.value.trim());
            }}
            onChange={handleChange}
            value={values.firstName}
            autoComplete="off"
          />
          {errors.firstName && touched.firstName && (
            <div className="form-error">{errors.firstName}</div>
          )}
        </div>
      </label>

      <label htmlFor="lastName" className="form-label">
        <p className="form-paragraph">Last Name</p>
        <div className="form-inputBox">
          <StatusVisualiser
            fieldName={!!touched.lastName && !!errors.lastName}
          />
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-input"
            onBlur={({ target }) => {
              setFieldValue('lastName', target.value.trim());
            }}
            onChange={handleChange}
            value={values.lastName}
            autoComplete="off"
          />
          {errors.lastName && touched.lastName && (
            <div className="form-error">{errors.lastName}</div>
          )}
        </div>
      </label>

      <label htmlFor="email" className="form-label">
        <p className="form-paragraph">Email Address</p>
        <div className="form-inputBox">
          <StatusVisualiser fieldName={!!touched.email && !!errors.email} />
          <input
            id="email"
            name="email"
            type="text"
            className="form-input"
            onBlur={({ target }) => {
              setFieldValue('email', target.value.trim());
            }}
            onChange={handleChange}
            value={values.email}
            autoComplete="off"
          />
          {errors.email && touched.email && (
            <div className="form-error">{errors.email}</div>
          )}
        </div>
      </label>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};
