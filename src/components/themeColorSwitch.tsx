import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

export function ThemeColorSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bottom-3 left-3 fixed">
      <Button
        className="rounded-full"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <IconMoon size={20} /> : <IconSun size={20} />}
      </Button>
    </div>
  );
}
