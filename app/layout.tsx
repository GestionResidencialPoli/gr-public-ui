import "./styles.css";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><header><Link href="/" className="brand">Gestión Residencial</Link><nav><Link href="/faq">Preguntas frecuentes</Link><Link href="/contacto">Contacto</Link><Link href="/terminos">Términos</Link><Link href="/privacidad">Privacidad</Link></nav></header><main>{children}</main><footer>Proyecto académico · Información y textos legales pendientes de validación institucional</footer></body></html>;
}
