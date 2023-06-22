import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-start text-lg font-medium"
    >
      <Icons.sun
        strokeWidth={1.5}
        className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icons.moon
        strokeWidth={1.5}
        className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />

      <span className="ml-6 hidden md:block">Theme</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
