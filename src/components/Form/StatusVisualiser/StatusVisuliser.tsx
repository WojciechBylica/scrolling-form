import logo from './logo192.png';

export const StatusVisualiser = ({ fieldName }: { fieldName: boolean }) => (
  <img
    src={logo}
    alt=""
    width={20}
    height={20}
    className={`${fieldName ? 'form-loader form-loader_error' : 'form-loader'}`}
  />
);
