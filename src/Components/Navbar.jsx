import React, { useState, useEffect } from "react";
import { Menu, X, Home, Stethoscope, Users, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", icon: <Home size={18} />, id: "home" },
    { name: "Consulting", icon: <Stethoscope size={18} />, id: "consulting" },
    { name: "Specialist", icon: <Users size={18} />, id: "specialist" },
    { name: "Feedback", icon: <MessageSquare size={18} />, id: "feedback" },
  ];

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-4 md:px-12 lg:px-20">
        
        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-10 text-slate-700 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className={`relative flex items-center gap-2 transition-colors group ${
                activeSection === link.id ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              <span
                className={`transition-opacity ${
                  activeSection === link.id ? "opacity-100 text-blue-500" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {link.icon}
              </span>
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full bg-blue-600"
                    : "w-0 group-hover:w-full bg-blue-400"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* === Mobile Toggle Button === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 top-4 p-2 rounded-md hover:bg-blue-50 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === Mobile Dropdown === */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-blue-100 px-6 py-4 space-y-4 animate-fadeIn">
          <nav className="flex flex-col items-center gap-4 text-slate-700 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === link.id ? "text-blue-600" : "hover:text-blue-600"
                }`}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
