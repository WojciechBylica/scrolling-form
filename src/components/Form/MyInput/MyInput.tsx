import { useFormikContext } from 'formik';
import type { FormValues } from '../types';
import { StatusVisualiser } from '../StatusVisualiser/StatusVisuliser';

export const MyInput = ({
  name,
  label
}: {
  name: 'firstName' | 'lastName' | 'email';
  label: string;
}) => {
  const { values, handleChange, errors, touched, setFieldValue } =
    useFormikContext<FormValues>();

  return (
    <label htmlFor={name} className="form-label">
      <p className="form-paragraph">{label}</p>
      <div className="form-inputBox">
        <StatusVisualiser fieldName={!!touched[name] && !!errors[name]} />
        <input
          id={name}
          name={name}
          type="text"
          className="form-input"
          onBlur={({ target }) => {
            setFieldValue(name, target.value.trim());
          }}
          onChange={handleChange}
          value={values[name]}
          autoComplete="off"
        />
        {errors[name] && touched[name] && (
          <div className="form-error">{errors[name]}</div>
        )}
      </div>
    </label>
  );
};
