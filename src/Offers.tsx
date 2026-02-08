import { useState, useEffect } from "react";

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
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
        const url = "https://script.google.com/macros/s/AKfycbwj-DxQPS-UMLV2zeTI6V8FuTscGhozbNPOsB5vHI5slywL_vrHsIL1gcIpQyYpZT30Lw/exec";

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
        onClick={onClose}
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
            <h3 className="leading-9 text-[16px] suisse-600 tracking-[0.01em] text-[#030712]/80">
              Solicitar servicios
            </h3>

            <button
              onClick={onClose}
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
              <div className="flex flex-col items-center justify-center py-12 gap-2">
                <svg viewBox="0 0 18 18" className="size-[16px] flex-none"><path fill="#195a31b9" fillRule="evenodd" clipRule="evenodd" d="M13.136 4.607a.75.75 0 0 1 .257 1.029l-4.5 7.5a.75.75 0 0 1-1.173.144l-3-3a.75.75 0 1 1 1.06-1.06l2.321 2.32 4.006-6.676a.75.75 0 0 1 1.029-.257Z"></path></svg>
                <p className="text-[13px] font-medium text-[#195a31b9]">Completado correctamente</p>
              </div>
            ) : (
              <>
            <div className="flex flex-col -gap-[1px] -mt-2">
              <p className="text-[12px] text-gray-500">Completa el formulario o contáctanos por nuestras redes.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="group relative flex h-8 items-center justify-center gap-2 rounded-md bg-white text-[12px] text-[#000]/35 [text-shadow:0_0_0.01px_currentColor] transition-all duration-150 hover:bg-[#F3F4F6]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px" }}>
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

const PRICING_PLANS = [
  {
    name: "Desarrollo de Sitios Webs",
    description: "Armado completo de páginas webs",
    priceArg: "$ 79.000",
    priceUsd: "$ 79",
    ideal: "Si querés tener presencia online y captar clientes de manera profesional",
    features: [
      "Branding de tu empresa",
      "Diseño web profesional",
      "Formularios de contacto",
      "Regalos y lead mangnets",
      "Newsletters para clientes",
      "Email integrado (opcional)",
      "Dominio y hosting (incluidos)",
      "Gestión de blogs y contenido",
      "Links de WhatsApp integrados",
    ]
  },
  {
    name: "Softwares y Plataformas",
    description: "Desarrollo de sistemas completos",
    priceArg: "$ 129.000",
    priceUsd: "$ 129",
    ideal: "Si querés crear un producto digital y automatizar procesos en tu empresa",
    features: [
      "Paneles de administración",
      "Sistema de usuarios y roles",
      "Registro de usaurios y sesiones",
      "Bases de datos para tu empresa",
      "Modelos de suscripción y pagos",
      "Soporte técnico para tus clientes",
      "Ingresos pasivos para tu empresa",
      "Automatización de procesos y tareas",
      "Seguridad avanzada y autnticaciónes",
    ]
  },
  {
    name: "Aplicaciones Móviles",
    description: "Apps para Android y iOS",
    priceArg: "$ 149.000",
    priceUsd: "$ 149",
    ideal: "Si buscás fidelizar clientes o generar ventas mediante productos o soluciones",
    features: [
      "App para Android y iOS",
      "Notificaciones y avisos",
      "Aplicación móvil a medida",
      "Diseño de interfaz intuitivo",
      "Cuentas y perfiles de usuarios",
      "Plataforma con subscripciones",
      "Registro de usaurios y sesiones",
      "Pasarelas de pago para clientes",
      "Gestión de contenido y publicaciones",
    ]
  },
];

export default function Offers() {
  const [currency, setCurrency] = useState<"ARG" | "USD">("ARG");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div id="offers" className="overflow-hidden">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative mx-auto max-w-[63rem] pb-20 pt-20 md:pt-24">

          <div
            className="absolute -bottom-32 right-full top-0 z-20 w-px"
            style={{
              background:
                "linear-gradient(rgba(19, 19, 22, 0), rgba(19, 19, 22, 0.075) 4rem, rgba(19, 19, 22, 0.075) calc(100% - 7rem), rgba(19, 19, 22, 0))",
            }}
          />

          <div
            className="absolute -bottom-32 left-full top-0 z-20 w-px"
            style={{
              background:
                "linear-gradient(rgba(19, 19, 22, 0), rgba(19, 19, 22, 0.075) 4rem, rgba(19, 19, 22, 0.075) calc(100% - 7rem), rgba(19, 19, 22, 0))",
            }}
          />

          <section className="relative z-30 sm:z-10">
            <div className="relative isolate">

              <div className="absolute -top-px left-1/2 ml-[-50cqw] hidden h-px w-[100cqw] bg-gray-950/5 sm:block" />
              <div className="absolute -bottom-px left-1/2 ml-[-50cqw] hidden h-px w-[100cqw] bg-gray-950/5 sm:block" />

              <div
                className="absolute -inset-y-px right-full -z-10 hidden bg-repeat-y sm:block"
                style={{
                  backgroundImage:
                    'url("https://clerk.com/_next/static/media/dither@l.566ce9b4.webp")',
                  backgroundSize: "100%",
                  backgroundPosition: "0px 1px",
                  width: "8.8125rem",
                  imageRendering: "pixelated",
                }}
              />

              <div
                className="absolute -inset-y-px left-full -z-10 hidden -scale-x-100 bg-repeat-y sm:block"
                style={{
                  backgroundImage:
                    'url("https://clerk.com/_next/static/media/dither@l.566ce9b4.webp")',
                  backgroundSize: "100%",
                  width: "8.8125rem",
                  imageRendering: "pixelated",
                }}
              />

              <div
                className="-mx-6 mt-16 bg-white sm:mx-0 __className_f367f3"
                style={{
                  boxShadow:
                    "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px",
                }}
              >

                {/* HEADER — DARK */}
                <div className="grid h-10 grid-cols-[1fr_auto_1fr] items-center border-b border-black/10 px-4 select-none" style={{ backgroundColor: "#131316" }}>
                  <div className="flex gap-x-1.5">
                    <div className="size-2 rounded-full bg-gray-400/40" />
                    <div className="size-2 rounded-full bg-gray-400/40" />
                    <div className="size-2 rounded-full bg-gray-400/40" />
                  </div>
                  <div className="flex items-center gap-x-2 text-[13.5px] font-medium inter text-white/93">

                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#5E5F6E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="M1.75 8a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0ZM1.75 8h12.5" />
                      <path d="M8 1.75A9.563 9.563 0 0 1 10.5 8A9.563 9.563 0 0 1 8 14.25A9.563 9.563 0 0 1 5.5 8A9.563 9.563 0 0 1 8 1.75Z" />
                    </svg>
                    Opthana Tech
                  </div>
                </div>

                <div className="px-8 py-16 pt-10 inter bg-gray-100/50">
                  <div className="text-balance text-center">
                    <h2 className="font-semibold tracking-[-0.01em] text-black text-3xl sm:text-[36px] inter">
                      Ofertas de Servicios
                      <br className="lg:hidden" />
                    </h2>
                    <p className="text-[#000]/60 text-sm sm:text-[13px] font-medium max-w-md mx-auto lg:max-w-2xl mt-2">Nos adaptamos a tus necesidades con planes flexibles diseñados para escalar junto a tu negocio.</p>
                  </div>
                  <div className="mt-7 flex flex-col items-center gap-y-6 lg:flex-row lg:gap-x-8 lg:justify-center">
                    {PRICING_PLANS.map((plan, index) => (
                      <div
                        key={index}
                        className="w-80 max-w-full flex-none overflow-hidden rounded-md lg:w-full lg:max-w-80 lg:flex-auto flex flex-col"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 3px 12px",
                        }}
                      >
                        <div className="bg-gray-50">
                          <div className="p-4">
                            <div className="text-[1.0625rem]/6 font-semibold text-black">
                              {plan.name}
                            </div>
                            <div className="text-[12px] font-medium tracking-[0.01em] text-gray-600">
                              {plan.description}
                            </div>
                            <div className="mt-3 flex items-center gap-x-1.5">
                              <div className="text-[22px] font-bold tracking-[0.02em] text-black">
                                {currency === "ARG" ? plan.priceArg : plan.priceUsd}
                              </div>
                              <div className="text-[12px] font-medium tracking-[0.01em] text-gray-600 mt-0.5">
                                {currency === "ARG" ? "/ pesos argentinos" : "/ dólares"}
                              </div>
                            </div>
                            <div
                              className="mt-3 flex w-fit overflow-hidden rounded-md bg-black/2.5"
                              style={{
                                boxShadow:
                                  "0 0 0 1px rgb(0 0 0 / 0.06), 0 1px 2px rgb(25 28 33 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.06)",
                              }}
                            >
                              <button
                                onClick={() => setCurrency("ARG")}
                                className={`px-2.5 py-1 text-[11px] font-medium tracking-[0.01em] transition-all ${currency === "ARG"
                                  ? "rounded-md bg-white text-gray-950 shadow-[0_0_0_1px_rgb(0_0_0_/_0.06),_0_1px_2px_rgb(25_28_33_/_0.06),_0_0_2px_rgb(0_0_0_/_0.08)]"
                                  : "text-gray-600 hover:text-gray-900"
                                  }`}
                              >
                                ARG
                              </button>
                              <button
                                onClick={() => setCurrency("USD")}
                                className={`px-2.5 py-1 text-[11px] font-medium tracking-[0.01em] transition-all ${currency === "USD"
                                  ? "rounded-md bg-white text-gray-950 shadow-[0_0_0_1px_rgb(0_0_0_/_0.06),_0_1px_2px_rgb(25_28_33_/_0.06),_0_0_2px_rgb(0_0_0_/_0.08)]"
                                  : "text-gray-600 hover:text-gray-900"
                                  }`}
                              >
                                USD
                              </button>
                            </div>
                          </div>
                          <div className="border-y border-black/[0.03] p-4">
                            <button
                              data-button=""
                              onClick={() => setIsContactModalOpen(true)}
                              className="group relative isolate flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#0161FE] p-1.5 text-[12px]  text-white"
                              style={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.24) 0px 1px 1px 0px, rgba(34, 42, 53, 0.14) 0px 2px 3px 0px, rgba(255, 255, 255, 0.38) 0px 1px 1px 0px inset, rgb(1, 97, 254) 0px 0px 0px 1px",
                                transform: "translateY(0px)",
                              }}
                            >
                              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10"></div>
                              Solicitar servicio <span className="ml-1 flex items-center">
                                <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none
                    group-hover:translate-x-6 group-hover:opacity-0 
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                                </svg>
                                <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none
                    -translate-x-2 opacity-0 
                    group-hover:translate-x-0 group-hover:opacity-100
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg></span>
                            </button>
                          </div>
                        </div>
                        <div className="p-4 text-[12px] font-medium text-black flex-1">
                          {plan.features.map((feature, i) => (
                            <div
                              key={i}
                              className={`flex gap-x-2 ${i > 0 ? "mt-4" : ""}`}
                            >
                              <svg viewBox="0 0 18 18" className="size-[16px] flex-none">
                                <path
                                  fill="#195a31b9"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.136 4.607a.75.75 0 0 1 .257 1.029l-4.5 7.5a.75.75 0 0 1-1.173.144l-3-3a.75.75 0 1 1 1.06-1.06l2.321 2.32 4.006-6.676a.75.75 0 0 1 1.029-.257Z"
                                />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* IDEAL */}
                        <div className="border-t border-black/5 bg-gray-50 px-4 py-3 text-xs text-gray-700">
                          <span className="font-semibold text-gray-900">Ideal:</span>{" "}
                          {plan.ideal}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}