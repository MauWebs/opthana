import { useState, useEffect } from "react";
import BillingUI from "./ui/BillingUI";
import SalesLandingUI from "./ui/SalesWebsitesUI";
import SystemsForCompaniesUI from "./ui/SystemsForCompaniesUI";
import PlansUI from "./ui/PlansUI";

function FeaturesModal({ activeFeature, setActiveFeature, features }: { activeFeature: number | null, setActiveFeature: (index: number | null) => void, features: any[] }) {
  const feature = activeFeature !== null ? features[activeFeature] : null;
  const isOpen = activeFeature !== null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])


  return (

    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${activeFeature !== null ? "visible pointer-events-auto" : "invisible pointer-events-none delay-300"
        }`}
    >
      <style>{`
        .custom-scroll {
          flex: 1 1 0%;
          overflow-y: auto;
        }

        /* Scrollbar base */
        .custom-scroll::-webkit-scrollbar {
          width: 5px !important;
        }

        /* Fondo del scrollbar */
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Thumb (la barrita) */
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 0px;
        }

        /* Hover */
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgb(192, 192, 192)
        }

        .custom-scroll::-webkit-scrollbar-button {
          display: none;
        }

        @keyframes shine {
          0% {
            transform: skewX(-45deg) translateX(-200%);
          }
          50% {
            transform: skewX(-45deg) translateX(500%);
          }
          100% {
            transform: skewX(-45deg) translateX(500%);
          }
        }
      `}</style>
      {/* BACKDROP */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[4px] transition-opacity duration-300 ${activeFeature !== null ? "opacity-100" : "opacity-0"
          }`}
        onClick={() => setActiveFeature(null)}
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
      ${activeFeature !== null
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
          }
    `}
      >
        {/* === CARD PREMIUM (la que copiaste) === */}
        <div className="relative isolate rounded-xl bg-white">
          {/* Glow radial */}
          <div
            className="absolute inset-0 -z-10 blur-xl saturate-200 transform-gpu "
            style={{
              background:
                "radial-gradient(189.26% 126.1% at 49.27% 0%, rgba(108,71,255,0) 10%, rgba(255,249,99,0.15) 34%, rgba(98,72,246,0.24) 67.53%, rgba(98,72,246,0) 95.38%)",
            }}
          />

          {/* Card gris */}
          <div
            className="relative overflow-hidden rounded-xl bg-[#F7F7F8]"
            style={{
              boxShadow:
                "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.08) 0px 5px 15px, rgba(47,48,55,0.2) 0px 15px 35px -5px",
            }}
          >
            {/* === MODAL BLANCO INTERNO === */}
            <div
              className="
            flex flex-col 
            w-[560px] max-w-[90vw]
            max-h-[85vh]
            rounded-xl
            bg-white
            
          "
              style={{
                boxShadow:
                  "rgb(217,217,222) 0px 0px 0px 0.5px, rgba(0,0,0,0.06) 0px 1px 2px 0px, rgba(0,0,0,0.08) 0px 0px 2px 0px",
              }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-5 py-2 border-b border-[#e4e4e7] bg-[#EFF1F3]/70 rounded-t-xl">
                <h3 className="leading-9 text-[16px] suisse-600 tracking-[0.01em] text-[#030712]/80">
                  {feature?.title}
                </h3>

                <button
                  onClick={() => setActiveFeature(null)}
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

              {/* CONTENT */}
              <div className="flex-1 overflow-y-auto p-6 text-[13px] text-[#42434D] custom-scroll">
                {feature?.modalContent}
              </div>


              {/* FOOTER */}
              <div className="border-t border-[#e4e4e7] px-5  bg-[#F7F7F7] rounded-b-xl py-3">
                <a
                  href="#offers"
                  onClick={() => setActiveFeature(null)}
                  className="group relative flex h-8 w-full items-center justify-center overflow-hidden rounded-md text-[13px] text-white cursor-pointer transition-all duration-150 hover:bg-[#3a3b42]"
                  style={{
                    boxShadow:
                      "0 0 0 1px #2e2e35, inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 0 0 1px rgba(255,255,255,0.05)",
                    backgroundColor: "rgb(47,48,55)",
                  }}
                >
                  Ver ofertas
                  <div className="group relative isolate inline-flex items-center justify-center overflow-hidden text-[12px] transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white"><svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg><svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg></div>
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )

}

export default function FeaturesGrid() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const GRID_BORDER_COLOR = "#e5e5e5";

  const gridWrapperStyle: React.CSSProperties = {
    backgroundColor: GRID_BORDER_COLOR,
  };

  const cardClass =
    "flex flex-col items-start gap-2 p-8 text-left lg:px-9 lg:py-10";

  const FEATURES = [
    {
      title: "Desarrollo de software",
      description: (
        <>
          Desarrollamos soluciones digitales para{" "}
          <span className="suisse-600 text-[#6c47ff]/80 underline underline-offset-3">
            optimizar
          </span>{" "}
          tus procesos internos, mejorar tus operaciones y acompañar el crecimiento
          de tu negocio.
        </>
      ),
      modalContent: (
        <>
          <p className="mb-4">
            Nos especializamos en la creación de plataformas digitales y soluciones
            comerciales pensadas para convertirse en productos reales de negocio.
            No desarrollamos software por desarrollar: creamos sistemas que generan
            ingresos y pueden escalar en el tiempo.
          </p>

          <p className="mb-4">
            Diseñamos y construimos productos digitales propios o para terceros,
            listos para vender, cobrar y operar de forma automatizada.
          </p>

          <ul className="list-disc list-outside mb-4 ml-5 space-y-2">
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Plataformas web comerciales:
              </strong>{" "}
              sistemas listos para ofrecer servicios o vender productos digitales.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Modelos de suscripción:
              </strong>{" "}
              pagos recurrentes, planes mensuales y membresías.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Productos digitales:
              </strong>{" "}
              desde MVPs hasta plataformas listas para escalar.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Automatización total:
              </strong>{" "}
              usuarios, cobros, accesos y procesos funcionando solos.
            </li>
          </ul>

          <BillingUI />

          <p>
            Si tu idea es crear un producto digital, una plataforma de servicios o
            un sistema que facture de forma automática, este servicio está pensado
            para eso.
          </p>
        </>
      ),
    },

    {
      title: "Webs orientadas a ventas",
      description: (
        <>
          Diseñamos experiencias digitales para{" "}
          <span className="suisse-600 text-[#6c47ff]/80 underline underline-offset-3">
            atraer
          </span>{" "}
          más clientes, aumentar tus conversiones y potenciar los resultados de
          tus ventas.
        </>
      ),
      modalContent: (
        <>
          <p className="mb-4">
            Creamos sitios web diseñados específicamente para vender. No son
            simplemente páginas lindas, son activos comerciales pensados para
            captar clientes y generar oportunidades de forma constante.
          </p>

          <p className="mb-4">
            Cada sección está pensada como parte de un recorrido claro que lleva al
            usuario a tomar acción: escribirte, agendar una llamada o comprar.
          </p>

          <ul className="list-disc list-outside mb-4 ml-5 space-y-2">
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Captación automática de leads:
              </strong>{" "}
              formularios, WhatsApp y llamados a la acción estratégicos.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Diseño enfocado en conversiones:
              </strong>{" "}
              estructura pensada para cerrar más ventas.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Escalables y medibles:
              </strong>{" "}
              tu web como parte real de tu embudo comercial.
            </li>
          </ul>

          <SalesLandingUI />

          <p>
            Tu web deja de ser presencia online y pasa a ser una herramienta que
            trabaja todos los días para vender por vos.
          </p>
        </>
      ),
    },

    {
      title: "Sistemas para empresas",
      description: (
        <>
          Creamos sistemas internos que{" "}
          <span className="suisse-600 text-[#6c47ff]/80 underline underline-offset-3">
            automatizan
          </span>{" "}
          tus tareas clave, organizan tu información y mejoran el control de tu
          negocio.
        </>
      ),
      modalContent: (
        <>
          <p className="mb-4">
            Diseñamos sistemas internos pensados para empresas que quieren escalar
            sin desorden. Centralizamos operaciones, automatizamos tareas y
            convertimos procesos caóticos en flujos claros y eficientes.
          </p>

          <p className="mb-4">
            Nuestros sistemas funcionan como el cerebro operativo de tu empresa,
            reduciendo errores y liberando tiempo para enfocarte en crecer.
          </p>

          <ul className="list-disc list-outside mb-4 ml-5 space-y-2">
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Automatización operativa:
              </strong>{" "}
              menos tareas manuales, más productividad.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Control total del negocio:
              </strong>{" "}
              clientes, ventas y procesos en un solo lugar.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Datos para decidir mejor:
              </strong>{" "}
              métricas claras y dashboards en tiempo real.
            </li>
          </ul>

          <SystemsForCompaniesUI />

          <p>
            Un sistema bien armado no solo ordena tu empresa: aumenta la eficiencia
            y mejora la rentabilidad.
          </p>
        </>
      ),
    },

    {
      title: "Plataformas y aplicaciones",
      description: (
        <>
          Construimos productos digitales que{" "}
          <span className="suisse-600 text-[#6c47ff]/80 underline underline-offset-3">
            escalan
          </span>{" "}
          con tu negocio, se adaptan a tus necesidades y sostienen el crecimiento
          de tus operaciones.
        </>
      ),
      modalContent: (
        <>
          <p className="mb-4">
            Desarrollamos aplicaciones y plataformas pensadas como negocios
            digitales completos. Productos que venden, cobran y gestionan usuarios
            de forma automática.
          </p>

          <p className="mb-4">
            Ideal si querés lanzar tu propia app, plataforma SaaS o solución digital
            con modelos de ingresos claros.
          </p>

          <ul className="list-disc list-outside mb-4 ml-5 space-y-2">
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Gestión automática de usuarios:
              </strong>{" "}
              registros, accesos y permisos.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Modelos de monetización:
              </strong>{" "}
              suscripciones, pagos únicos o planes.
            </li>
            <li>
              <strong className="suisse-600 text-[#42434D]">
                Escalabilidad real:
              </strong>{" "}
              crece la base de usuarios sin aumentar la complejidad.
            </li>
          </ul>

          <PlansUI />

          <p>
            Convertimos ideas en productos digitales listos para salir al mercado y
            generar ingresos.
          </p>
        </>
      ),
    },
  ];

  return (
    <div
      className="relative"
      style={{ boxShadow: "0 -6px 12px -8px rgb(0 0 0 / 0.10)" }}
    >
      <div className="border-b border-[#131316]/5" style={{ backgroundColor: "#FBFBFB" }}>
        <div className="sm:flex mx-auto w-full px-0 sm:px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-0 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div
            className="grid grid-cols-1 gap-px text-[13px] sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-none sm:rounded-xl"
            style={gridWrapperStyle}
          >
            {FEATURES.map((feature, index) => (
              <div key={index} className={cardClass} style={{ backgroundColor: "#FBFBFB" }}>
                <h3 className="mt-2 leading-4 text-[17.5px] suisse-600 tracking-[0.01em] text-[#030712]/80">
                  {feature.title}
                </h3>

                <div className="max-w-xs text-pretty text-neutral-600/85 sm:max-w-none">
                  <p>{feature.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  className="mt-2 group relative isolate inline-flex items-center overflow-hidden
                  rounded-md px-2.5 h-[1.625rem] 
                  shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(19,19,22,0.18),0_1px_0_0_rgba(255,255,255,0.10)_inset]
                  [background:linear-gradient(180deg,rgba(19,19,22,0)_45%,rgba(19,19,22,0.03)_55%),#fff]
                  transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]
                  suisse-600 text-[#131316]/70 text-[12px] suisse tracking-[.4px]"
                >
                  <span>Leer información</span>

                  <svg
                    viewBox="0 0 10 10"
                    aria-hidden="true"

                    className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none
                    group-hover:translate-x-6 group-hover:opacity-0 
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                    />
                  </svg>

                  <svg
                    viewBox="0 0 10 10"
                    aria-hidden="true"

                    className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none
                    -translate-x-2 opacity-0 
                    group-hover:translate-x-0 group-hover:opacity-100
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FeaturesModal activeFeature={activeFeature} setActiveFeature={setActiveFeature} features={FEATURES} />

    </div>
  );
}