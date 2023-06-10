import { useColor } from '../../context';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

const RelatedColors = () => {
  const { hexColor } = useColor();
  let triadColors = getTriadColors(hexColor);
  let complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette title="Triad Colors" hexColors={triadColors} />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
