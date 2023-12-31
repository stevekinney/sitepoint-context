import { useContext } from 'react';

import { ColorContext } from '../../context';

const ColorSwatch = () => {
  const { hexColor } = useContext(ColorContext);
  return (
    <section className="flex flex-col items-center gap-2 h-80">
      <div
        className="w-full h-full border-2 border-slate-900"
        style={{ backgroundColor: hexColor }}
      />
    </section>
  );
};

export default ColorSwatch;
