import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { FormValues } from '../types';

export const ScrollToError = ({ clue }: { clue: string }) => {
  const { isSubmitting } = useFormikContext<FormValues>();
  useEffect(() => {
    const el = document.querySelector(`.${clue}`);
    (el?.parentElement ?? el)?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [isSubmitting]);
  return null;
};
