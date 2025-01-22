"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuList = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contacto", label: "Contact" },
    { href: "/productos", label: "Catalogo" },
  ];

  return (
    <nav className="mt-4 flex justify-center space-x-6" aria-label="Main Navigation">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`text-lg ${
            pathname === link.href ? "text-blue-600 font-bold" : "text-gray-800 hover:text-blue-600"
          } transition-colors`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default MenuList;
