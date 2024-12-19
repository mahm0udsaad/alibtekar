"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "الرئيسية", href: "/" },
  { name: "خدماتنا", href: "/services" },
  { name: "أعمال سابقة", href: "/previous-works" },
  { name: "من نحن", href: "/about" },
  { name: "اتصل بنا", href: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.jpg"
              alt="مركز الإبتكار الفني للألمنيوم"
              width={250}
              height={100}
              className="h-18 w-auto"
            />
          </Link>

          <div className="hidden lg:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-[#3949AB] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-[#3949AB] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
