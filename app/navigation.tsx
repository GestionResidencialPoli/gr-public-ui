"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AUTH_UI_URL } from "./config";

export function PublicNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="public-navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button
        ref={toggle}
        className="public-menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="public-links"
        onClick={() => setOpen(!open)}
      >
        {open ? "Cerrar menú" : "Menú"}
      </button>
      <nav
        id="public-links"
        data-open={open}
        aria-label="Navegación principal"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <Link href="/sobre-nosotros">Sobre nosotros</Link>
        <Link href="/faq">Preguntas frecuentes</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/terminos">Términos</Link>
        <Link href="/privacidad">Privacidad</Link>
        <a className="button primary" href={AUTH_UI_URL}>
          Iniciar sesión
        </a>
      </nav>
    </div>
  );
}
