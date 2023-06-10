import { useContext } from 'react';

import HexColor from '../hex-color';
import { ColorContext } from '../../context';

type ColorSelectProps = {
  label?: string;
};

const ColorSelect = ({ label = 'Color' }: ColorSelectProps) => {
  const context = useContext(ColorContext);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="color-input">{label}</label>
      <input
        id="color-input"
        className="h-80 w-full"
        type="color"
        value={context?.hexColor}
        onChange={(e) => context?.setHexColor(e.target.value)}
      />
      <HexColor hexColor={context?.hexColor} />
    </div>
  );
};

export default ColorSelect;
