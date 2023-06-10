import { useColor } from '../../context';
import HexColor from '../hex-color';

type ColorSelectProps = {
  label?: string;
};

const ColorSelect = ({ label = 'Color' }: ColorSelectProps) => {
  const { hexColor, setHexColor } = useColor();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="color-input">{label}</label>
      <input
        id="color-input"
        className="h-80 w-full"
        type="color"
        value={hexColor}
        onChange={(e) => setHexColor(e.target.value)}
      />
      <HexColor hexColor={hexColor} />
    </div>
  );
};

export default ColorSelect;
