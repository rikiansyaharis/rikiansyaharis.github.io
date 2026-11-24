
const socialIcons = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ),

  LinkedIn: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.95 18.45H4.97V9h2.98v9.45ZM6.46 7.71a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.2V9h2.85v1.29h.04c.4-.74 1.37-1.53 2.82-1.53 3.01 0 3.56 1.98 3.56 4.56v4.38Z" />
    </svg>
  ),

  Instagram: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  ),
};

const SocialLinks = ({ profile, t }) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: profile?.social?.github || "",
    },
    {
      name: "LinkedIn",
      url: profile?.social?.linkedin || "",
    },
    {
      name: "Instagram",
      url: profile?.social?.instagram || "",
    },
  ];

  return (
    <div className="pt-6 border-t-0 md:border-t border-[var(--card-border)] dark:border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-6">

      <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-muted)] dark:text-white/90">
        {t.connectWithMe}
      </span>

      <div className="flex items-center gap-3">
        {socialLinks
          .filter((social) => social.url)
          .map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} Profile`}
              className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text)] hover:text-white hover:bg-[#0F766E] hover:border-[#0F766E] hover:-translate-y-1 transition-all shadow-sm"
            >
              {socialIcons[social.name]}
            </a>
          ))}
      </div>

    </div>
  );
};

export default SocialLinks;
