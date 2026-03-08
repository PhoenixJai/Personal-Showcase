import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center border border-border">
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-none h-8 w-8 border-r border-border ${theme === 'light' ? 'bg-muted' : ''}`}
        onClick={() => setTheme("light")}
        title="Light Mode"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-none h-8 w-8 border-r border-border ${theme === 'dark' ? 'bg-muted' : ''}`}
        onClick={() => setTheme("dark")}
        title="Dark Mode"
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-none h-8 w-8 ${theme === 'system' ? 'bg-muted' : ''}`}
        onClick={() => setTheme("system")}
        title="System Theme"
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System Theme</span>
      </Button>
    </div>
  );
}
