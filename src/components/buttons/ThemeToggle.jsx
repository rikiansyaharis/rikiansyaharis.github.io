
import { Moon, Sun } from "lucide-react";

function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2  focus:ring-[var(--primary-hover)] cursor-pointer ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
