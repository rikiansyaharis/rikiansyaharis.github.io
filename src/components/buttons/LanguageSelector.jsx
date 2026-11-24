
function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-0.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setLanguage("id")}
        className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
          language === "id"
            ? "bg-[var(--primary-color)] text-white shadow-sm"
            : "text-slate-600 dark:text-slate-300 hover:text-[var(--primary-hover)]"
        }`}
      >
        🇮🇩 ID
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
          language === "en"
            ? "bg-[var(--primary-color)] text-white shadow-sm"
            : "text-slate-600 dark:text-slate-300 hover:text-[var(--primary-hover)]"
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

export default LanguageSelector;
