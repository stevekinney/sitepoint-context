import { PropsWithChildren, useState } from 'react';

import Button from '../button';
import ColorProperty from '../color-properties/color-property';

type AddSavedColorProps = {
  onSave: (color: string) => void;
};

const AddSavedColor = ({ onSave }: PropsWithChildren<AddSavedColorProps>) => {
  let [savedColorName, setSavedColorName] = useState('');

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(savedColorName);
      }}
    >
      <ColorProperty
        label="Color Name"
        value={savedColorName}
        onChange={(e) => setSavedColorName(e.target.value)}
      />
      <Button variant="primary" className="w-full">
        💾 Save Color
      </Button>
    </form>
  );
};

export default AddSavedColor;
