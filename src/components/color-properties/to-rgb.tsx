import { useContext } from 'react';
import { hex } from 'color-convert';

import ColorProperty from './color-property';
import { ColorContext } from '../../context';

const HexToRGB = () => {
  const { hexColor } = useContext(ColorContext);

  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <ColorProperty label="R" type="number" value={r} />
      <ColorProperty label="G" type="number" value={g} />
      <ColorProperty label="B" type="number" value={b} />
    </section>
  );
};

export default HexToRGB;
