import { ChangeEventHandler } from 'react';

type ColorPropertyProps = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const ColorProperty = ({ value, label }: ColorPropertyProps) => {
  return (
    <div className="text-center border-primary-100 border-2">
      <h2>{label}</h2>
      <p>{value}</p>
    </div>
  );
};

export default ColorProperty;
