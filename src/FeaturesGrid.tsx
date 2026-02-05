import { useState } from "react";

function FeaturesModal({ activeFeature, setActiveFeature, features }: { activeFeature: number | null, setActiveFeature: (index: number | null) => void, features: any[] }) {
  const feature = activeFeature !== null ? features[activeFeature] : null;

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
            {/* Shine */}
            <div
              className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl"
              style={{ animation: "shine 7s ease infinite" }}
            />

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
                <div className="h-4" />
              </div>


              {/* FOOTER */}
              <div className="border-t border-[#e4e4e7] px-5  bg-[#F7F7F7] rounded-b-xl py-3">
                <button
                  className="group relative flex h-8 w-full items-center justify-center overflow-hidden rounded-md text-[13px] text-white cursor-pointer transition-all duration-150 hover:bg-[#3a3b42]"
                  style={{
                    boxShadow:
                      "0 0 0 1px #2e2e35, inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 0 0 1px rgba(255,255,255,0.05)",
                    backgroundColor: "rgb(47,48,55)",
                  }}
                >
                  Solicitar Ahora
                  <div className="group relative isolate inline-flex items-center justify-center overflow-hidden text-[12px] transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white"><svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg><svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg></div>
                </button>
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
    "flex flex-col items-start gap-2 bg-white p-8 text-left lg:px-9 lg:py-10";

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

          <div
            className="my-6 flex overflow-hidden rounded-lg bg-[#F7F7F8] text-[13px] text-gray-500 select-none"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.06), 0 0.82px 1.64px 0 rgba(0,0,0,0.06), 0 0 1.64px rgba(0,0,0,0.08), 0 16px 36px -6px rgba(0,0,0,0.12), 0 8px 16px -3px rgba(0,0,0,0.01)",
            }}
          >
            {/* Left Sidebar */}
            <div className="flex w-[11.25rem] flex-col justify-between border-r border-gray-200">
              <div className="flex flex-col">
                <div className="flex h-[4.625rem] flex-col justify-center gap-0 px-5">
                  <h2 className="text-base font-bold leading-6 -tracking-[0.01em] text-[#131316]/90">Configuración</h2>
                  <p className="text-[12px] leading-[14px] text-gray-500">Gestiona tu cuenta</p>
                </div>
                <div className="flex flex-col gap-1 px-2.5">
                  <div className="flex h-[1.625rem] items-center gap-2 rounded-md px-2.5 text-[#6a7282] hover:bg-gray-200/50 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)] cursor-pointer">
                    <img src="/icons/user.svg" alt="" className="h-4 w-4" />
                    <p className="text-[10px] leading-[14px]">Mi perfil</p>
                  </div>
                  <div className="flex h-[1.625rem] cursor-pointer items-center gap-2 rounded-md px-2.5 text-gray-500 hover:bg-gray-200/50 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                    <img src="/icons/shield.svg" alt="" className="h-4 w-4" />
                    <p className="text-[10px] leading-[14px]">Seguridad</p>
                  </div>
                  <div className="flex h-[1.625rem] cursor-pointer items-center gap-2 rounded-md px-2.5 text-gray-500 bg-[#EEEFF0] shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                    <img src="/icons/card.svg" alt="" className="h-4 w-4" />
                    <p className="text-[10px] leading-[14px]">Facturación</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-5 py-4 text-[10px] leading-[13px] text-gray-500">Opthana Tech</div>
            </div>

            {/* Right Content */}
            <div className="flex flex-1 flex-col bg-white px-6 py-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-bold leading-5 -tracking-[0.01em] text-[#131316]/90">Facturación</h2>
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <div className="flex cursor-pointer items-center gap-1.5 border-b border-[#131316]/90 pb-1 text-[10px] text-[#131316]/90">Suscripción</div>
                    <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Movimientos</div>
                    <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Pagos</div>
                  </div>
                  <hr className="m-0 border-black/10" />
                </div>
              </div>
              <div className="flex items-center gap-5 py-3">
                <p className="flex-1 text-[12px] text-[#131316]/90">Suscripción</p>
                <div className="w-80">
                  <div className="flex h-[2.625rem] items-center justify-between rounded-md bg-white px-3 shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[11px] leading-[14px] text-[#131316]">Profesional</p>
                      <p className="text-[10px] leading-[13px] text-gray-500">Renueva el 7 de mayo de 2026</p>
                    </div>
                    <div className="text-[12px] leading-[14px] text-[#131316]/90">$89.99<span className="text-gray-500">/ mes</span></div>
                  </div>
                  <div className="flex h-7 px-3 py-1">
                    <div className="flex flex-1 cursor-pointer items-center gap-1.5 text-[10px] leading-[13px] hover:text-gray-900">
                      <img src="/icons/arrows.svg" alt="" className="h-3 w-3" />Cambiar plan
                    </div>
                    <div className="flex flex-1 cursor-pointer items-center justify-end gap-1.5 text-[10px] leading-[13px] hover:text-gray-900">
                      <img src="/icons/gear.svg" alt="" className="h-3 w-3" />
                      Gestionar
                    </div>
                  </div>
                </div>
              </div>
              <hr className="m-0 border-black/10" />
              <div className="flex items-center gap-5 py-3">
                <p className="flex-1 text-[12px] text-[#131316]/90">Métodos de pago</p>
                <div className="w-80">
                  <div className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-2 hover:bg-gray-100/80 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                    <img src="/icons/card.svg" alt="" className="h-4 w-4" />
                    <p className="flex-1 text-[12px] text-[#131316]/90">Visa ···4242</p><div className="relative flex h-[calc(14/16*1rem)] items-center justify-center rounded-sm bg-gray-50 px-[calc(5/15*1rem)] text-[calc(9/16*1rem)] leading-[calc(13/16*1rem)] text-gray-500 shadow-[0_0_0_1px_#00000018,0_2px_0_-1px_rgba(0,0,0,0.04)] [contain:paint] before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-b before:from-white before:to-transparent before:content-['']">
                      Preferido
                    </div>
                    <div className="relative flex h-[14px] items-center justify-center rounded-sm bg-gray-100/0 px-1 text-[9px] leading-[13px] text-gray-500/0 ">Predeterminado</div>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100/80 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                    <div className="flex  w-4 shrink-0 items-center justify-center rounded-full">
                      <img src="/icons/plus.svg" alt="" className="h-3 w-3" />
                    </div>
                    <p className="text-[12px] text-[#131316]/90">Agregar método de pago</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

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

          <div className="my-6 bg-gray-100 border border-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 text-[13px]">
            [Futura imagen: Web funcionando como embudo de ventas]
          </div>

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

          <div className="my-6 bg-gray-100 border border-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 text-[13px]">
            [Futura imagen: Sistema interno en funcionamiento]
          </div>

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

          <div className="my-6 bg-gray-100 border border-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 text-[13px]">
            [Futura imagen: App funcionando con suscripciones]
          </div>

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
      className="relative bg-white"
      style={{ boxShadow: "0 -6px 12px -8px rgb(0 0 0 / 0.10)" }}
    >
      <div className="border-b border-[#131316]/5">
        <div className="sm:flex mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-0 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div
            className="grid grid-cols-1 gap-px text-[13px] sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-xl"
            style={gridWrapperStyle}
          >
            {FEATURES.map((feature, index) => (
              <div key={index} className={cardClass}>
                <h3 className="mt-2 leading-9 text-[17.5px] suisse-600 tracking-[0.01em] text-[#030712]/80">
                  {feature.title}
                </h3>

                <div className="max-w-xs text-pretty text-neutral-500 sm:max-w-none">
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