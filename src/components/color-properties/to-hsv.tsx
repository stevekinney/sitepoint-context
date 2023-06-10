import { useContext } from 'react';
import { hex } from 'color-convert';

import ColorProperty from './color-property';
import { ColorContext } from '../../context';

const HexToHSV = () => {
  const context = useContext(ColorContext);
  const color = hex.hsv(context?.hexColor || '#000000');
  const [h, s, v] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <ColorProperty label="H" type="number" value={h} />
      <ColorProperty label="S" type="number" value={s} />
      <ColorProperty label="V" type="number" value={v} />
    </section>
  );
};

export default HexToHSV;
