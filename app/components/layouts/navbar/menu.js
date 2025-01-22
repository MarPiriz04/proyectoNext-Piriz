"use client";

import { useState } from "react";
import MenuList from "./menuList";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 hover:text-blue-600"
      >
        {isOpen ? "Cerrar" : "Abrir"} Menú
      </button>
      {isOpen && <MenuList />}
    </div>
  );
};

export default Menu;
