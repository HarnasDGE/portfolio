import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Options = ({ position, className }) => {
  const optionsContainer = {
    left: (
      <div
        className={`sticky top-0 h-full flex flex-col gap-4 p-2 ${className}`}
      >
        <ColorModeSwitcher />
        <LanguageSwitcher />
      </div>
    ),
    top: (
      <div
        className={`sticky top-0 left-0 w-full p-2  flex justify-end items-center gap-4 border-b-2 bg-light dark:bg-dark border-navbar dark:border-dnavbar shadow z-[9999] ${className}`}
      >
        <ColorModeSwitcher />
        <LanguageSwitcher />
      </div>
    ),
  };

  return optionsContainer[position] || null;
};
