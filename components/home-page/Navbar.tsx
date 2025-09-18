"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navLists: NavItem[] = [
  { label: "About Me", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-8 text-sm uppercase tracking-wide text-grey">
        {navLists.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.label}
              className="cursor-pointer transition-colors duration-300"
            >
              <Link
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive ? "text-secondary font-semibold" : "hover:secondary/70"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
