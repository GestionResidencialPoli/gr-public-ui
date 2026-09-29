import Link from "next/link";

export default function Home() {
  return <section className="hero"><div><p className="eyebrow">Una comunidad más simple</p><h1>Todo lo que necesita tu unidad residencial, en un solo lugar.</h1><p className="lead">Comunicación, reservas, portería y administración con información clara para cada persona de la copropiedad.</p><div className="actions"><Link className="button primary" href="/contacto">Hablar con el equipo</Link><Link className="button" href="/faq">Conocer más</Link></div></div><div className="hero-card"><span>03</span><p>roles coordinados</p><span>01</span><p>experiencia compartida</p></div></section>;
}
