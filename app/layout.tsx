import "./styles.css";
import Link from "next/link";
import { PublicNavigation } from "./navigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="public-skip" href="#main-content">
          Saltar al contenido
        </a>
        <header>
          <Link href="/" className="brand">
            Gestión Residencial
          </Link>
          <PublicNavigation />
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer>
          Proyecto académico · Información y textos legales pendientes de
          validación institucional
        </footer>
      </body>
    </html>
  );
}
