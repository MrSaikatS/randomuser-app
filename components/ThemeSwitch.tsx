import ThemeAtom from "@/utils/ThemeAtom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@nextui-org/react";
import { useAtom } from "jotai";

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  return (
    <>
      <Switch
        size='lg'
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        isSelected={theme}
        onValueChange={(isSelected: boolean) => setTheme(isSelected)}
      />
    </>
  );
};

export default ThemeSwitch;
