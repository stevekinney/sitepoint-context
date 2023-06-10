import { hex } from 'color-convert';

import ColorProperty from './color-property';
import { useColor } from '../../context';

const HexToCMYK = () => {
  const { hexColor } = useColor();
  let color = hex.cmyk(hexColor);
  let [c, m, y, k] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <ColorProperty label="C" type="number" value={c} />
      <ColorProperty label="M" type="number" value={m} />
      <ColorProperty label="Y" type="number" value={y} />
      <ColorProperty label="K" type="number" value={k} />
    </section>
  );
};

export default HexToCMYK;
