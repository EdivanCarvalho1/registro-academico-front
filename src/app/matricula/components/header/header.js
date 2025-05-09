"use client";

import { FaSchool, FaUserCircle, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <header className="h-[4.5rem] bg-white text-black flex border-b border-gray-300">
      {/* Logo */}
      <div className="w-[10%] h-full flex items-center justify-center">
        <a href="./login">
          <Image
            alt="school icon"
            src="/school-icon.svg"
            width={60}
            height={60}
          />
        </a>
      </div>

      {/* Navegação */}
      <nav className="w-[80%] h-full flex justify-end items-center gap-4 relative">
        {menuItems.map((item, index) => (
          <div className="relative" key={index}>
              <button
                onClick={() => toggleDropdown(item)}
                className="px-4 py-2 text-sm font-medium  text-[#493159] rounded  "
              > <span className="p-1">▼</span>
            <a href='/consulta-relatorio'>
                {item}
            </a>
              </button>

          </div>
        ))}
      </nav>

      {/* Perfil */}
      <div className="w-[10%] h-full flex items-center justify-center">
        <div className="border-[1.85px] border-[#493159] rounded-[10px] h-[65%] w-[45%] flex items-center justify-center gap-1">
          <FaUserCircle className="h-[80%] w-[70%]" />
          <FaAngleDown />
        </div>
      </div>
    </header>
  );
}