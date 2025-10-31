import React, { useState } from "react";
import { Menu, X, Home, Stethoscope, Users, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <Home size={18} />, id: "home" },
    { name: "Consulting", icon: <Stethoscope size={18} />, id: "consulting" },
    { name: "Specialist", icon: <Users size={18} />, id: "specialist" },
    { name: "Feedback", icon: <MessageSquare size={18} />, id: "feedback" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-betSKen px-6 py-4 md:px-12 lg:px-20">
        {/* === Logo Section === */}
        <div
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            V
          </div>
          <span className="font-semibold text-xl text-slate-800 tracking-tight">
            SK.care
          </span>
        </div>

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
            >
              <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.icon}
              </span>
              {link.name}
            </button>
          ))}
        </nav>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-blue-50 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100 px-6 py-4 space-y-4 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-slate-700 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="flex items-center gap-2 hover:text-blue-600 transition"
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
