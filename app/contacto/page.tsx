"use client";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setState("sending");
    setError("");

    try {
      const response = await fetch("/api/v1/contacto/solicitudes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.get("nombre"),
          email: form.get("email"),
          telefono: form.get("telefono") || null,
          mensaje: form.get("mensaje"),
          consentimiento: form.get("consentimiento") === "on",
          consentimiento_version: "contacto-v1",
        }),
      });

      if (!response.ok) {
        setError(
          response.status === 429
            ? "Hay demasiadas solicitudes. Espera un momento e inténtalo de nuevo."
            : response.status === 422
              ? "Revisa los campos del formulario e inténtalo de nuevo."
              : "No pudimos enviar la solicitud. Inténtalo de nuevo.",
        );
        setState("error");
        return;
      }

      formElement.reset();
      setState("success");
    } catch {
      setError(
        "No hay conexión con el servicio. Comprueba tu red e inténtalo de nuevo.",
      );
      setState("error");
    }
  }

  return (
    <section className="content">
      <p className="eyebrow">Contacto</p>
      <h1>Cuéntanos qué necesitas</h1>
      <p className="lead">
        Déjanos tus datos y el equipo de administración revisará tu solicitud.
      </p>
      <form className="form" onSubmit={submit}>
        <label>
          Nombre
          <input name="nombre" required minLength={2} maxLength={120} />
        </label>
        <label>
          Correo electrónico
          <input name="email" type="email" required />
        </label>
        <label>
          Teléfono <span>(opcional)</span>
          <input name="telefono" maxLength={30} />
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            required
            minLength={10}
            maxLength={4000}
            rows={6}
          />
        </label>
        <label className="check">
          <input name="consentimiento" type="checkbox" required /> Acepto que se
          use esta información para responder mi solicitud.
        </label>
        <button className="button primary" disabled={state === "sending"}>
          {state === "sending" ? "Enviando…" : "Enviar solicitud"}
        </button>
        {state === "success" && (
          <p className="feedback success" role="status">
            Recibimos tu solicitud.
          </p>
        )}
        {state === "error" && (
          <p className="feedback error" role="alert">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}
