import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const OptionsLeft = () => {
  return (
    <div className="sticky top-0 h-full p-2">
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};
