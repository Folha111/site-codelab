"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Serviços",    anchor: "#servicos" },
  { label: "Portfólio",  anchor: "#portfolio" },
  { label: "Nosso Curso", anchor: "/curso" },
  { label: "Processo",   anchor: "#processo" },
  { label: "Contato",    anchor: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function resolveHref(anchor: string) {
    if (!anchor.startsWith("#")) return anchor;
    return isHome ? anchor : `/${anchor}`;
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="CodeLab" width={140} height={40} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.anchor}
              href={resolveHref(l.anchor)}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={resolveHref("#contato")}
            className="text-sm font-semibold px-5 py-2 rounded-full gradient-bg text-white hover:opacity-90 transition-opacity shadow-md shadow-violet-200"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.anchor}
              href={resolveHref(l.anchor)}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={resolveHref("#contato")}
            onClick={() => setOpen(false)}
            className="text-sm font-semibold px-5 py-2 rounded-full gradient-bg text-white text-center shadow-md"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
}
