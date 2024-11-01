import Link from "next/link";
import React from "react";

const navigation = [
  {
    title: "About >",
    href: "#about",
  },
  {
    title: "Deliveries",
    href: "#deliveries",
  },
  {
    title: "Contact us",
    href: "#contact_us",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

function NavBar({ className }) {
  return (
    <nav className={className}>
      {navigation.map((link) => (
        <Link key={link.title} href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
export default NavBar;
