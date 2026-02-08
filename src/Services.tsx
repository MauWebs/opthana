import { AuthenticationForYourCustomers } from "./animations/AuthenticationForYourCustomers";
import { useState } from "react";

const SERVICES = [
  {
    title: "Web profesional para tu negocio",
    description: "Diseño y desarrollo de sitios web rápidos, escalables y optimizados para convertir visitas en ventas.",
    items: [
      { label: "<Landing pages />", component: null },
      { label: "<Registro de clientes />", component: null },
      { label: "<Formularios y contactos />", component: null },
    ]
  },
  {
    title: "Plataformas y sistemas con dashboards",
    description: "Desarrollo de plataformas web y sistemas internos con dashboards, métricas en tiempo real y automatizaciones para tomar mejores decisiones.",
    items: [
      { label: "<Plataformas />", component: null },
      { label: "<Software empresarial />", component: null },
      { label: "<Sistemas de suscripciones />", component: null },
      { label: "<Autenticación para tus clientes />", component: AuthenticationForYourCustomers },
    ]
  },
  {
    title: "Aplicaciones móviles para iOS y Android",
    description: "Diseño y desarrollo de aplicaciones móviles enfocadas en experiencia de usuario, performance y objetivos de negocio.",
    items: [
      { label: "Apps nativas e híbridas", component: null },
      { label: "Aplicaciones conectadas a sistemas existentes", component: null },
      { label: "Dashboards móviles y apps internas", component: null },
      { label: "Publicación y mantenimiento", component: null }
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div id="services" className="overflow-hidden pb-32 pt-20 sm:pb-[13.75rem] sm:pt-32 xl:pt-[8.75rem]">
      <div className="relative z-20 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="isolate grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-[14.5rem_1fr] sm:gap-y-24 lg:grid-cols-[20rem_1fr] lg:gap-x-20 lg:gap-y-40 xl:grid-cols-[24rem_1fr] xl:gap-x-0 xl:gap-y-6">
          <div className="col-span-full max-w-lg sm:justify-self-center sm:text-center xl:col-auto xl:text-left">
            <h2
              className="text-[13px] text-[#6c47ff] suisse"
            >
              Nuestros Servicios
            </h2>

            <p className="mt-4  leading-9 text-[32px] suisse-600 tracking-[-0.01em] text-gray-950">Realizamos desarrollos enfocado en tus ventas</p>
            <p className="mb-3 mt-4 text-[14px] text-[#5f5f6f]" style={{ lineHeight: '1.5rem' }} >Nos encargamos de crear sistemas para empresas, desde webs corporativas hasta sistemas automatizados y apps móviles, convirtiendo visitantes en ventas constantes.</p>
            <a className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity text-[13px] text-[#000]/80 [text-shadow:0_0_0.09px_currentColor] tracking-[0.02em]" target="" href="/docs/components/overview">
              Ver todas las ofertas
              <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity">
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
              </svg>
              <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity">
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
              </svg>
            </a>
          </div>
          <div
            className="col-start-1 grid grid-cols-1 grid-rows-1 border-b border-gray-950/5"
            style={{ paddingBottom: `calc(${(SERVICES.length - 1) * 3.5}rem + ${(SERVICES.length - 1)}px)` }}
            data-rac=""
          >
            {SERVICES.map((service, index) => {
              const isOpen = activeService === index;
              const transformStyle = index <= activeService
                ? `translate3d(0, calc(${index * 3.5}rem + ${index}px), 0)`
                : `translate3d(0, calc(100% + ${(index - 1) * 3.5}rem + ${(index - 1)}px), 0)`;

              return (
                <div
                  key={index}
                  className="col-start-1 row-start-1 transition duration-300"
                  style={{ transform: transformStyle }}
                  data-rac=""
                  data-expanded={isOpen}
                >
                  <h3 className="react-aria-Heading">
                    <button
                      onClick={() => {
                        setActiveService(index);
                        setActiveItem(0);
                      }}
                      id={`react-aria-service-${index}`}
                      className={`flex w-full gap-x-4 border-t border-gray-950/5 pt-4 text-left soehne-mono-500 text-[11px] uppercase tracking-[1px] transition-colors items-center ${isOpen ? "pb-2 text-gray-950" : "pb-4 text-gray-500 hover:text-gray-950"}`}
                      data-rac=""
                      type="button"
                      disabled={isOpen}
                      data-react-aria-pressable="true"
                      aria-expanded={isOpen}
                      aria-controls={`react-aria-service-panel-${index}`}
                      slot="trigger"
                      data-disabled={isOpen}
                    >
                      <span className={`size-2 flex-none rounded-full ${isOpen ? "bg-[#6c47ff] border-[1px] border-white ring-1 ring-[#4c32b3]/90" : "ring-1 ring-gray-400"}`}></span>
                      {service.title}
                      <svg viewBox="0 0 24 24" aria-hidden="true" className={`ml-auto size-6 flex-none fill-[#5e5f6e] ${isOpen ? "rotate-180" : ""}`}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.77 9.413a.844.844 0 0 0-.045 1.192l3.657 3.938a.844.844 0 0 0 1.236 0l3.656-3.938a.844.844 0 1 0-1.236-1.148L12 12.73 8.962 9.457a.844.844 0 0 0-1.192-.044Z"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    className={`transition [transition-behavior:allow-discrete] [@starting-style]:opacity-0 ${isOpen ? "grid grid-cols-1 grid-rows-1 pb-2.5 pl-2.5 delay-100 duration-300" : "opacity-0 hidden"}`}
                    data-rac=""
                    id={`react-aria-service-panel-${index}`}
                    role="group"
                    aria-labelledby={`react-aria-service-${index}`}
                    aria-hidden={!isOpen}
                    hidden={(!isOpen ? "until-found" : undefined) as any}
                    style={isOpen ? { "--disclosure-panel-width": "auto", "--disclosure-panel-height": "auto" } as React.CSSProperties : { "--disclosure-panel-width": "0px", "--disclosure-panel-height": "0px" } as React.CSSProperties}
                  >
                    <div className="col-start-1 row-start-1">
                      <p className="text-pretty pl-4 text-[12px] text-[#5f5f6f]">{service.description}</p>
                      <ul role="list" className="mt-1.5 pl-4">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <button
                              onClick={() => setActiveItem(itemIndex)}
                              className={`block w-full py-3 text-left soehne-mono-500 text-[12px] transition-colors ${activeItem === itemIndex ? "text-[#6c47ff]" : "text-[#131316]/80 hover:text-[#131316]/40 duration-500"}`}
                              data-rac=""
                              type="button"
                              tabIndex={0}
                              data-react-aria-pressable="true"
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative row-start-2 mx-auto aspect-[352/602] w-full max-w-[17.5rem] sm:col-start-2 sm:row-auto md:aspect-auto md:max-w-[45rem] xl:row-span-2 xl:row-start-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative isolate aspect-[352/602] w-full flex-none md:aspect-[720/602] md:w-full xl:ml-36">
                {(() => {
                  const ActiveComponent = SERVICES[activeService].items[activeItem].component;
                  return ActiveComponent ? <ActiveComponent /> : null;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}