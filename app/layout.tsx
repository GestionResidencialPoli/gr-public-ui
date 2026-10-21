import "./styles.css";
import Link from "next/link";
import { AUTH_UI_URL } from "./config";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <header>
          <Link href="/" className="brand">
            Gestión Residencial
          </Link>
          <nav aria-label="Navegación principal">
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
            <Link href="/faq">Preguntas frecuentes</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/terminos">Términos</Link>
            <Link href="/privacidad">Privacidad</Link>
            <a className="button primary" href={AUTH_UI_URL}>
              Iniciar sesión
            </a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Proyecto académico · Información y textos legales pendientes de
          validación institucional
        </footer>
      </body>
    </html>
  );
}
