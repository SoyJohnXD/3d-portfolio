// src/components/Navbar.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavItems = ({ links }) => (
  <ul className="nav-ul flex gap-6">
    {links.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const LanguageToggle = ({ i18n }) => {
  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center bg-black-300 rounded-full p-1 border border-gray-300">
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          currentLanguage === "es"
            ? "bg-primary text-white"
            : "text-white-600 hover:bg-black-400"
        }`}
      >
        ES
      </button>
      <div className="h-4 w-px bg-black-400 mx-1" />
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          currentLanguage === "en"
            ? "bg-primary text-white"
            : "text-white-600 hover:bg-black-400"
        }`}
      >
        EN
      </button>
    </div>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = t("navLinks", { returnObjects: true });

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-white font-bold text-xl hover:text-primary transition-colors"
          >
            John Londoño
          </a>

          <div className="flex items-center gap-6">
            <nav className="sm:flex hidden items-center gap-6">
              <NavItems links={navLinks} />
              <LanguageToggle i18n={i18n} />
            </nav>

            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary focus:outline-none sm:hidden flex"
              aria-label="Toggle Menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`nav-sidebar overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="p-5 flex flex-col gap-4">
          <NavItems links={navLinks} />
          <div className="mt-4 flex justify-center">
            <LanguageToggle i18n={i18n} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
