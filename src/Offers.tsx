import { useState } from "react";
import { useContactModal } from "./ContactModalContext";

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
      "Registro de usuarios y sesiones",
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
      "Diseño de interfaz intuitiva",
      "Cuentas y perfiles de usuarios",
      "Plataforma con subscripciones",
      "Registro de usuarios y sesiones",
      "Pasarelas de pago para clientes",
      "Gestión de contenido y publicaciones",
    ]
  },
];

export default function Offers() {
  const [currency, setCurrency] = useState<"ARG" | "USD">("ARG");
  const { openModal } = useContactModal();

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
                              onClick={openModal}
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

    </div>
  );
}