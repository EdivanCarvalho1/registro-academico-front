"use client";

import { FaSchool, FaUserCircle, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    "Registro Escolar",
    "Horário",
    "Ensino",
    "Ajuda",
    "Configuração",
  ];

  return (
    <header className="h-[100px] bg-white text-black flex border-b border-gray-600">
      {/* Logo */}
      <div className="w-[10%] h-full flex items-center justify-center">
        <FaSchool className="w-1/2 h-1/2" />
      </div>

      {/* Navegação */}
      <nav className="w-[80%] h-full flex justify-end items-center gap-4 relative">
        {menuItems.map((item, index) => (
          <div className="relative" key={index}>
            <button
              onClick={() => toggleDropdown(item)}
              className="px-4 py-2 text-sm font-medium  text-purple-950 rounded  "
            > <span className="p-1">▼</span>
              {item}
            </button>
            {openDropdown === item && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Action
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Another action
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Something else here
                </a>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Perfil */}
      <div className="w-[10%] h-full flex items-center justify-center">
        <div className="border-[1.85px] border-black rounded-[10px] h-[55%] w-[55%] flex items-center justify-center gap-1">
          <FaUserCircle className="h-[80%] w-[70%]" />
          <FaAngleDown />
        </div>
      </div>
    </header>
  );
}