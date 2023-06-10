import { useContext } from 'react';

import { ColorContext } from '../../context';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

const RelatedColors = () => {
  const { hexColor } = useContext(ColorContext);
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
