import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  Award,
  FileText,
  Send,
} from "lucide-react";

const navigation = [
  { key: "home", label: "Home", href: "#home", icon: Home },
  { key: "about", label: "About", href: "#about", icon: User },
  { key: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { key: "education", label: "Education", href: "#education", icon: GraduationCap },
  { key: "skills", label: "Skills", href: "#skills", icon: Cpu },
  { key: "projects", label: "Projects", href: "#projects", icon: Layers },
  { key: "certificate", label: "Certificate", href: "#certificates", icon: Award },
  { key: "cv", label: "CV", href: "#cv", icon: FileText },
  { key: "contact", label: "Contact", href: "#contact", icon: Send },
];

export default navigation;