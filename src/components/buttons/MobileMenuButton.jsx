import { Menu } from "lucide-react";

function MobileMenuButton({ onClick, isOpen }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Buka Menu Navigasi"
      aria-expanded={isOpen}
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}

export default MobileMenuButton;