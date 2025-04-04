"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create",
    href: "/new-game",
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-20 flex flex-col gap-3 sticky z-50">
      <div className="w-full h-16 rounded-lg border-2 flex items-center justify-between pl-3 overflow-hidden bg-background border-border">
        <Link href="/" className="text-2xl font-bold">
          Bingo
        </Link>
        <div className="flex items-center h-full">
          {navItems.map((item) => (
            <Link
              className={cn(
                "border-l-2 h-full flex items-center justify-center px-5 transition-all hover:bg-blue-100 border-border",
                pathname === item.href ? "bg-blue-300 hover:bg-blue-300" : ""
              )}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
