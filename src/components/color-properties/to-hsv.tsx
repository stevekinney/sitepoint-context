import { hex } from 'color-convert';

import ColorProperty from './color-property';
import { useColor } from '../../context';

const HexToHSV = () => {
  const { hexColor } = useColor();
  const color = hex.hsv(hexColor);
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
