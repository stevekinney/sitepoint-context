import { useContext } from 'react';
import { hex } from 'color-convert';

import ColorProperty from './color-property';
import { ColorContext } from '../../context';

const HexToHSL = () => {
  const { hexColor } = useContext(ColorContext);

  let color = hex.hsl(hexColor);
  let [h, s, l] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <ColorProperty label="H" type="number" value={h} />
      <ColorProperty label="S" type="number" value={s} />
      <ColorProperty label="L" type="number" value={l} />
    </section>
  );
};

export default HexToHSL;
