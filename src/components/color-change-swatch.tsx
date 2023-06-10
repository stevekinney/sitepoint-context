import clsx from 'clsx';

import Button from './button';
import { useColor } from '../context';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
};

const ColorChangeSwatch = ({ hexColor, className }: ColorChangeSwatchProps) => {
  const { setHexColor } = useColor();

  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={() => {
        setHexColor(hexColor);
      }}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
