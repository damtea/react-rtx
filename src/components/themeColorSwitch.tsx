import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { SimpleToolTip } from "./rtx/toolbar/components/custom-tooltip";

export function ThemeColorSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className="bottom-3 left-3 fixed rounded-full"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SimpleToolTip
        title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      >
        {theme === "light" ? <IconMoon size={20} /> : <IconSun size={20} />}
      </SimpleToolTip>
    </Button>
  );
}
