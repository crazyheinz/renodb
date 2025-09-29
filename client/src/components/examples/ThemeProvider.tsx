import { ThemeProvider } from '../ThemeProvider';
import { Button } from "@/components/ui/button";
import { useTheme } from '../ThemeProvider';

function ThemeToggleExample() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 space-y-4">
      <div>Current theme: {theme}</div>
      <div className="space-x-2">
        <Button 
          variant={theme === "light" ? "default" : "outline"}
          onClick={() => setTheme("light")}
        >
          Light
        </Button>
        <Button 
          variant={theme === "dark" ? "default" : "outline"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
        <Button 
          variant={theme === "system" ? "default" : "outline"}
          onClick={() => setTheme("system")}
        >
          System
        </Button>
      </div>
    </div>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <ThemeToggleExample />
    </ThemeProvider>
  );
}