import { useEffect } from 'react';

export const ScrollToError = ({
  clue,
  isSubmitting
}: {
  clue: string;
  isSubmitting: boolean;
}) => {
  useEffect(() => {
    const el = document.querySelector(`.${clue}`);
    (el?.parentElement ?? el)?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [isSubmitting]);
  return null;
};
