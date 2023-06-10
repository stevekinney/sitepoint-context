import { useContext } from 'react';

import { ColorContext } from '../../context';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

const RelatedColors = () => {
  const context = useContext(ColorContext);
  let triadColors = getTriadColors(context?.hexColor || '#000000');
  let complementColors = getComplementColors(context?.hexColor || '#000000');

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
