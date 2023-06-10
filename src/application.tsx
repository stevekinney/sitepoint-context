import ColorProperties from './components/color-properties';
import ColorPicker from './components/color-picker';
import RelatedColors from './components/related-colors';

const Application = () => {
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker />
      <ColorProperties />
      <RelatedColors />
    </div>
  );
};

export default Application;
