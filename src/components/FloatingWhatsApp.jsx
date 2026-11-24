
function FloatingWhatsApp({ profile, t }) {
  const phone = profile?.phone;
  const message = profile?.textWame?.replace("{firstName}", profile?.firstName) || "Halo, saya tertarik dengan portfolio kamu.";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <div className="floating-wa-container">
      <div className="wa-tooltip">{t.chatWhatsapp}</div>

      <div className="wa-ping-layer-1"></div>
      <div className="wa-ping-layer-2"></div>

      <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="wa-link-btn floating-wa-btn" aria-label={t.chatWhatsapp}>
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.14 7.27C8.98 7.27 8.71 7.33 8.48 7.58C8.25 7.83 7.61 8.43 7.61 9.65C7.61 10.87 8.5 12.05 8.62 12.21C8.75 12.38 10.36 14.86 12.83 15.93C13.42 16.18 13.88 16.34 14.24 16.45C14.83 16.64 15.37 16.61 15.79 16.55C16.27 16.48 17.25 15.96 17.46 15.38C17.66 14.8 17.66 14.3 17.6 14.2C17.54 14.1 17.38 14.04 17.14 13.92C16.9 13.8 15.73 13.22 15.51 13.14C15.29 13.06 15.13 13.02 14.97 13.26C14.81 13.5 14.35 14.04 14.21 14.2C14.07 14.36 13.93 14.38 13.69 14.26C13.45 14.14 12.44 13.81 11.25 12.75C10.32 11.92 9.69 10.9 9.51 10.59C9.33 10.28 9.49 10.11 9.61 9.99C9.72 9.88 9.86 9.7 9.98 9.56C10.1 9.42 10.14 9.32 10.22 9.16C10.3 9 10.26 8.86 10.2 8.74C10.14 8.62 9.68 7.48 9.48 7.02C9.29 6.56 9.09 6.62 8.95 6.62C8.81 6.62 8.65 6.62 8.49 6.62L9.14 7.27Z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
