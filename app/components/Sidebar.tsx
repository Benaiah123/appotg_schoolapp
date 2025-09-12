"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserDropdown from "./Dropdown";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Students", href: "/students" },
  { name: "Parents", href: "/parents" },
  { name: "Teachers", href: "/teachers" },
  { name: "Lesson notes", href: "/lesson-notes" },
  { name: "Academics", href: "/academics" },
  { name: "Attendance", href: "/attendance" },
  { name: "Student Fees", href: "/fees" },
  { name: "Library", href: "/library" },
  { name: "Transport", href: "/transport" },
  { name: "Hostel", href: "/hostel" },
  { name: "Examination", href: "/examination" },
  { name: "Manage Grade", href: "/grades" },
  { name: "Message", href: "/message" },
];

export default function Sidebar() {
  const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
  <header className="relative bg-[#1E2A66] text-white px-5 py-4 flex md:hidden items-center justify-between ">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          &#9776;
        </button>

        {/* Dashboard Text */}
        <span className="text-lg font-medium">Dashboard</span>

        {/* ADMIN Badge */}
        <span className="bg-white text-black text-xs font-normal px-2 py-1 rounded">
          ADMIN
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* User Icon */}
        <Image src="/icons/f7_person-crop-circle.png" alt="logo" width={24} height={24}/>

        {/* Dropdown Arrow */}
        <UserDropdown />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-[#1E2A66] shadow-md z-50">
          <ul className="flex flex-col divide-y divide-gray-200">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 hover:bg-gray-100 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>



    <aside className="bg-[#1E2A5E] hidden md:block text-white w-64 p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="text-blue-600 rounded-full p-2">
          <Image 
          src="/images/Screenshot 2025-08-25 190316.png"
          alt="logo"
          width={50}
          height={50}
          />
        </div>
        <span className="font-bold text-lg">App OTG</span>
      </div>

      {/* Menu */}
      <nav className="space-y-2 text-[#BABABA]">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-lg px-3 py-2 ${
                active
                  ? "bg-white text-[#1E2A5E] font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
    </>
  );
}
