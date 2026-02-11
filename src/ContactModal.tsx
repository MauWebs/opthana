import { useEffect, useState } from "react";
import { useContactModal } from "./ContactModalContext";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !emailRegex.test(formData.email.trim()),
      message: !formData.message.trim()
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      setIsSubmitting(true);
      try {
        const url = "https://script.google.com/macros/s/AKfycbz7G8hLaoO2JLs6RPjU0vOtJM4brSc4L_EwYEGlTVVKN_v4wWxbPZCYnPFsikcYWrbL/exec";

        const now = new Date();
        const formattedDate = `Se añadió el día ${now.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} a las ${now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })}`;

        const params = new URLSearchParams();
        params.append("Nombre", formData.name);
        params.append("Email", formData.email);
        params.append("Mensaje", formData.message);
        params.append("Fecha", formattedDate);

        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        });

        setSubmittedData({
          name: formData.name,
          email: formData.email,
        });
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setErrors({
        name: false,
        email: false,
        message: false
      });
      setSubmittedData(null); // Clear submittedData when modal closes
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none delay-300"
        }`}
    >
      {/* BACKDROP */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[4px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
        onClick={closeModal}
      />

      {/* === CONTENEDOR GLASS (externo) === */}
      <div
        className={`
      relative z-10
      rounded-2xl 
      bg-white/40
      p-[5px]
      backdrop-blur-[6px]
      transition-all duration-300
      ease-[cubic-bezier(0.32,0.72,0,1)]
      ${isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
          }
    `}
      >
        <div className="relative isolate rounded-xl bg-white shadow-2xl ring-1 ring-black/5 w-full max-w-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-2 border-b border-[#e4e4e7] bg-[#EFF1F3]/70 rounded-t-xl">
            <h3 className="leading-9 text-[16px] suisse-600 tracking-[0.01em] text-[#030712]/80 mt-0.5">
              {isSuccess ? "¡Muchas gracias!" : "Solicitar servicios"}
            </h3>

            <button
              onClick={closeModal}
              className="w-7 h-7 flex items-center justify-center rounded-full text-[#56585A]/80 hover:bg-black/5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto custom-scroll flex flex-col gap-4">

            {isSuccess ? (
              <div className="-mt-4">
                <div>

                  {/* Contenido */}
                  <div className="transition-opacity mt-2 space-y-2">

                    {/* Mensaje principal */}
                    <div className="rich-text text-[12px] leading-relaxed text-[#5f5f6f]">
                      Hemos recibido tu mensaje correctamente y nuestro equipo ya se encuentra
                      revisando tu solicitud con atención para comprender en detalle todas tus
                      necesidades, te enviamos una correo a {submittedData?.email}.
                    </div>

                    {/* Info box */}
                    <div className="relative flex items-start gap-2 rounded-md bg-[#F6F9FE] p-2 text-[12px] text-[#236dd7] ring-1 ring-inset ring-[#93c5fd80] rich-text-info ">
                      <svg
                        className="mt-[1px] h-4 w-4 flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-label="Info"
                        role="img"
                      >
                        <path
                          d="M8 5.75V7.25M8 10.2502V10.2602M13.25 8C13.25 10.8995 10.8995 13.25 8 13.25C5.10051 13.25 2.75 10.8995 2.75 8C2.75 5.10051 5.10051 2.75 8 2.75C10.8995 2.75 13.25 5.10051 13.25 8Z"
                          stroke="#236dd7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div className="rich-text">
                        Por favor, verificá tu correo en la bandeja de entrada o la carpeta de spam.
                      </div>
                    </div>

                  </div>

                  {/* Footer */}
                  <div className="mt-4 border-t border-gray-200 pt-3 flex items-center justify-between text-[11px] text-[#7a7a8a]/90">
                    {/* Izquierda */}
                    <div>
                      © 2026 Opthana Tech
                    </div>

                    {/* Derecha */}
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/opthana_es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#236dd7] underline hover:opacity-80 transition"
                      >
                        Instagram
                      </a>

                      <span className="opacity-40">|</span>

                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#236dd7] underline hover:opacity-80 transition"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>


                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col -gap-[1px] -mt-4">
                  <p className="text-[12px] text-gray-500">Completa el formulario o contáctanos por nuestras redes.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href="https://www.instagram.com/opthana_es/" target="_blank" rel="noopener noreferrer" className="group relative flex h-8 items-center justify-center gap-2 rounded-md bg-white text-[12px] text-[#000]/35 [text-shadow:0_0_0.01px_currentColor] transition-all duration-150 hover:bg-[#F3F4F6]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px" }}>
                    <div aria-label="Instagram" className="block group-hover:text-[#c13584]/85 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg></div>
                    Instagram
                  </a>
                  <a href="#" className="group relative flex h-8 items-center justify-center gap-2 rounded-md bg-white text-[12px] text-[#000]/35 [text-shadow:0_0_0.01px_currentColor] transition-all duration-150 hover:bg-[#F3F4F6]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px" }}>
                    <div aria-label="WhatsApp" className="block group-hover:text-[#1cb253] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg></div>
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <hr className="w-full border-[#eeeef0]" />
                  <span className="text-xs text-[#747686]">
                    o
                  </span>
                  <hr className="w-full border-[#eeeef0]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px]">Nombre completo</label>
                  <input
                    name="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-8 w-full rounded-md px-3 text-[13px] transition-colors duration-200 bg-white placeholder:text-[#5E5F6E] outline-none focus:bg-[#F3F4F6]"
                    style={{ boxShadow: errors.name ? "0 0 0 1px #ef4444" : "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px" }}
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.name && <span className="flex items-start gap-x-1"><svg viewBox="0 0 16 18" fill="none" className="w-4 flex-none fill-[#ef4444] dark:fill-[#ef4444]" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.866 4.012a.988.988 0 0 0-1.732 0L2.13 13.004c-.372.67.106 1.496.866 1.496h10.01c.76 0 1.238-.827.866-1.496L8.866 4.012Zm-1.66 5.74a.798.798 0 0 0 1.593 0l.14-2.254a.94.94 0 1 0-1.875 0l.141 2.253Zm.046 2.498a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg><span className="text-[12px] text-[#ef4444]">Completa este campo</span></span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px]">Correo electrónico</label>
                  <input
                    name="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-8 w-full rounded-md px-3 text-[13px] transition-colors duration-200 bg-white placeholder:text-[#5E5F6E] outline-none focus:bg-[#F3F4F6]"
                    style={{ boxShadow: errors.email ? "0 0 0 1px #ef4444" : "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px" }}
                    placeholder="correo@hotmail.com"
                  />
                  {errors.email && <span className="flex items-start gap-x-1"><svg viewBox="0 0 16 18" fill="none" className="w-4 flex-none fill-[#ef4444] dark:fill-[#ef4444]" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.866 4.012a.988.988 0 0 0-1.732 0L2.13 13.004c-.372.67.106 1.496.866 1.496h10.01c.76 0 1.238-.827.866-1.496L8.866 4.012Zm-1.66 5.74a.798.798 0 0 0 1.593 0l.14-2.254a.94.94 0 1 0-1.875 0l.141 2.253Zm.046 2.498a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg><span className="text-[12px] text-[#ef4444]">{!formData.email.trim() ? "Completa este campo" : "Ingresa un correo válido"}</span></span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px]">Como podemos ayduarte?</label>
                  <textarea
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md p-3 text-[13px] transition-colors duration-200 bg-white placeholder:text-[#5E5F6E] outline-none resize-none min-h-[80px] focus:bg-[#F3F4F6]"
                    style={{
                      boxShadow: errors.message ? "0 0 0 1px #ef4444" :
                        "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px",
                    }}
                    placeholder="Escribe brevemente lo que necesitas…"
                    onInput={(e) => {
                      const target = e.currentTarget
                      target.style.height = "auto"
                      target.style.height = `${target.scrollHeight}px`
                    }}
                  />
                  {errors.message && <span className="flex items-start gap-x-1"><svg viewBox="0 0 16 18" fill="none" className="w-4 flex-none fill-[#ef4444] dark:fill-[#ef4444]" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.866 4.012a.988.988 0 0 0-1.732 0L2.13 13.004c-.372.67.106 1.496.866 1.496h10.01c.76 0 1.238-.827.866-1.496L8.866 4.012Zm-1.66 5.74a.798.798 0 0 0 1.593 0l.14-2.254a.94.94 0 1 0-1.875 0l.141 2.253Zm.046 2.498a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg><span className="text-[12px] text-[#ef4444]">Completa este campo</span></span>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`group relative flex h-9 w-full shrink-0 items-center justify-center overflow-hidden rounded-md text-[13px] text-white cursor-pointer transition-all duration-150 hover:bg-[#3a3b42] mt-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  style={{
                    boxShadow:
                      "0 0 0 1px #2e2e35, inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255,255,255,0.05)",
                    backgroundColor: "rgb(47,48,55)",
                  }}
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Enviar mensaje
                      <div className="group relative isolate inline-flex items-center justify-center overflow-hidden text-[12px] transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white"><svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg><svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg></div>
                    </>
                  )}
                </button>

              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}