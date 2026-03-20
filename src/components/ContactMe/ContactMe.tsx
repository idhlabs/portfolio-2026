import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactMe.css";

type MailStatus = "idle" | "sending" | "success" | "error";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [capValue, setCapValue] = useState<string | null>(null);
  const [mailStatus, setMailStatus] = useState<MailStatus>("idle");

  const resetComposer = () => {
    formRef.current?.reset();
    captchaRef.current?.reset();
    setCapValue(null);
    setMailStatus("idle");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const captchaToken = captchaRef.current?.getValue() ?? capValue;

    if (!formRef.current || !captchaToken) {
      setMailStatus("error");
      return;
    }

    const formData = new FormData(formRef.current);
    const templateParams = {
      user_name: String(formData.get("user_name") ?? ""),
      user_email: String(formData.get("user_email") ?? ""),
      message: String(formData.get("message") ?? ""),
      "g-recaptcha-response": captchaToken,
    };

    setCapValue(captchaToken);
    setMailStatus("sending");

    emailjs
      .send("service_0zegwqp", "template_k16pvw9", templateParams, {
        publicKey: "-yYviovuhGc-yfknj",
      })
      .then(() => {
        resetComposer();
        setMailStatus("success");
      })
      .catch(() => {
        setMailStatus("error");
        // Un token reCAPTCHA no se debe reutilizar tras un fallo.
        captchaRef.current?.reset();
        setCapValue(null);
      });
  };

  return (
    <section className="dh-mail-app">
      <div className="dh-mail-shell">
        <div className="dh-mail-main">
          <div className="dh-mail-content">
            <section className="dh-mail-intro">
              <p className="dh-mail-title">Centro de Mensajeria</p>
              <p className="dh-mail-subtitle">
                Trabajemos juntos para convertir grandes visiones en realidad.
              </p>
              <p className="dh-mail-hint">
                Completa el formulario para ponernos en contacto
              </p>
            </section>

            <form className="dh-mail-form" ref={formRef} onSubmit={sendEmail}>
              <label className="dh-mail-field">
                <span>Remitente</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </label>

              <label className="dh-mail-field">
                <span>Correo</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Ingresa tu correo electronico"
                  required
                />
              </label>

              <label className="dh-mail-field dh-mail-field-message">
                <span>Mensaje</span>
                <textarea
                  name="message"
                  placeholder="Escribe aqui tu mensaje..."
                  required
                />
              </label>

              <div className="dh-mail-captcha-wrap">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey="6Lc3_4wsAAAAAEwroP-Xh3H6xT46okidRVqwaTnO"
                  onChange={(val: string | null) => {
                    setCapValue(val);
                    if (mailStatus === "error") {
                      setMailStatus("idle");
                    }
                  }}
                  onExpired={() => {
                    setCapValue(null);
                    setMailStatus("error");
                  }}
                  onErrored={() => {
                    setCapValue(null);
                    setMailStatus("error");
                  }}
                  className="mt-5"
                />
              </div>

              <div className="dh-mail-actions">
                <button
                  type="submit"
                  className="dh-mail-button"
                  disabled={!capValue || mailStatus === "sending"}
                >
                  {mailStatus === "sending" ? "Enviando..." : "Transmitir"}
                </button>
                <button
                  type="button"
                  className="dh-mail-button dh-mail-button-secondary"
                  onClick={resetComposer}
                >
                  Reiniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
