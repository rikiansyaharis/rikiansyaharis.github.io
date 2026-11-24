import { Mail } from "lucide-react";

function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-500/20 hover:shadow-md hover:shadow-indigo-500/30 transition-all duration-200"
    >
      <span>Get in Touch</span>
      <Mail className="w-4 h-4" />
    </a>
  );
}

export default ContactButton;