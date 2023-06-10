import { PropsWithChildren, createContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ColorContext = createContext<any>(null);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [hexColor, setHexColor] = useState('#e56e24');

  return (
    <ColorContext.Provider value={{ hexColor, setHexColor }}>
      {children}
    </ColorContext.Provider>
  );
};
