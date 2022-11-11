import { FormValues } from './types';

export const useMyForm = () => {
  const handleMyFormSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
    window.location.reload();
  };
  return { handleMyFormSubmit };
};
