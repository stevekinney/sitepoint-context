import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';

const ColorProperties = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h3>Color Properties</h3>
      <HexToRGB />
      <HexToHSL />
      <HexToHSV />
      <HexToCMYK />
    </div>
  );
};

export default ColorProperties;
