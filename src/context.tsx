import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

import { createContext } from './create-context';

type ColorState = {
  hexColor: string;
  setHexColor: Dispatch<SetStateAction<string>>;
};

const [useContext, Provider] = createContext<ColorState>();

export const useColor = useContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [hexColor, setHexColor] = useState('#e56e24');

  return <Provider value={{ hexColor, setHexColor }}>{children}</Provider>;
};
