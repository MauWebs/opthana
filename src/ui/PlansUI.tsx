import { useState } from "react";

const PLANS = [
  {
    name: "Estándar",
    monthlyPrice: 49.89,
    yearlyPrice: 499.0,
    features: [
      "Funciones esenciales",
      "Hasta 10 funciones",
      "Soporte por email",
      "Ver más info",
    ],
  },
  {
    name: "Profesional",
    monthlyPrice: 98.0,
    yearlyPrice: 980.0,
    isPro: true,
    features: [
      "Funciones ilimitadas",
      "Soporte prioritario",
      "Acceso completo",
      "Ver más info",
    ],
  },
];

export default function PlansUI() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="relative overflow-hidden flex flex-1 flex-row rounded-lg h-[20rem] mb-[16px]" style={{
      boxShadow:
        "0 0 0 1px rgba(0,0,0,0.06), 0 0.82px 1.64px 0 rgba(0,0,0,0.06), 0 0 1.64px rgba(0,0,0,0.08), 0 16px 36px -6px rgba(0,0,0,0.12), 0 8px 16px -3px rgba(0,0,0,0.01)",
    }}>

      {/* Shine */}
      <div
        className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl"
        style={{ animation: "shine 9s ease infinite" }}
      />

      {/* Left Sidebar */}
      <div className="flex w-[11.25rem] flex-col justify-between border-r border-gray-200 bg-[#F7F7F8] rounded-l-lg">
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
              <p className="text-[10px] leading-[14px]">Suscripciones</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-5 py-4 text-[10px] leading-[13px] text-gray-500">Opthana Tech</div>
      </div>

      {/* Content */}
      <div className="rounded-lg bg-white">

        <div className="flex flex-1 items-center gap-2 bg-white px-6 pl-3 pt-5  rounded-r-[20px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            <path
              d="M8.74365 12.7975C8.98329 13.0372 9.37182 13.0372 9.61146 12.7975C9.8511 12.5579 9.8511 12.1693 9.61146 11.9297L8.20446 10.5227L13.2685 10.5227C13.6074 10.5227 13.8821 10.248 13.8821 9.90906C13.8821 9.57016 13.6074 9.29543 13.2685 9.29543L8.20446 9.29543L9.61146 7.88842C9.8511 7.64878 9.8511 7.26025 9.61146 7.02061C9.37182 6.78097 8.98329 6.78097 8.74365 7.02061L6.2891 9.47516C6.04947 9.7148 6.04947 10.1033 6.2891 10.343L8.74365 12.7975Z"
              fill="#2F3037"
            />
          </svg>

          <h2 className="text-[14px] font-bold leading-5 -tracking-[0.01em] text-[#131316]/80">
            Suscripciones
          </h2>
        </div>


        <hr className="mx-3 my-[10px] border-gray-200" />


        <div className="flex bg-white overflow-hidden whitespace-nowrap">


          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`min-w-[12.1rem] rounded-md bg-gray-50 ml-3 border border-black/5`}
            >


              <div className="flex flex-col gap-1 p-[calc(9/16*1rem)]">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] suisse-600 leading-[calc(14/16*1rem)] tracking-[0.02em]">{plan.name}</p>
                  <span
                    className={`relative inline-flex shrink-0 items-center ml-11 overflow-hidden rounded-sm px-1 py-0.5
    text-[9px] leading-[calc(14/16*1rem)] tracking-[0.1em] text-white
    shadow-[inset_0_2px_0_rgba(43,117,225,0.35)]
    bg-[linear-gradient(120deg,_rgb(73,90,193)_0%,_rgb(64,63,115)_16%,_rgb(99,131,162)_50%,_rgb(81,36,82)_87%,_rgb(132,61,112)_100%)]
    ${plan.isPro ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{
                      boxShadow:
                        'inset 0 0 0 1px color-mix(in srgb, #000 42%, transparent), inset 0 2px 0 rgba(43,117,225,0.35)',
                    }}
                  >
                    <span className="px-0.5">Pro</span>
                  </span>

                </div>

                <div className="flex items-center gap-1 text-sm leading-5 -tracking-[0.01em]">
                  <span className="font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[9.5px] suisse leading-[calc(13/16*1rem)] text-gray-500 tracking-[0.03em] suisse mt-1">
                    {isYearly ? '/ anual' : '/ mensual'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsYearly(v => !v)}
                    className={`
      relative flex h-[calc(13/16*1rem)] w-5 items-center
      rounded-full p-[1.5px]
      border border-[rgba(0,0,0,0.06)]
      transition-colors duration-300
      ${isYearly
                        ? 'bg-[linear-gradient(120deg,_rgb(73,90,193)_0%,_rgb(64,63,115)_16%,_rgb(99,131,162)_50%,_rgb(81,36,82)_87%,_rgb(132,61,112)_100%)]'
                        : 'justify-start bg-gray-300/60'}
    `}
                    style={
                      isYearly
                        ? {
                          boxShadow:
                            'inset 0 0 0 1px color-mix(in srgb, #000 42%, transparent), inset 0 2px 0 rgba(43,117,225,0.35)',
                        }
                        : undefined
                    }
                  >
                    {/* CÍRCULO BLANCO */}
                    <span
                      className="
        block size-[7px] rounded-full bg-white
        shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]
        transition-all duration-200
      "
                      style={{
                        transform: isYearly ? 'translateX(8px)' : 'translateX(1px)',
                      }}
                    />
                  </button>

                  <span className="text-[calc(9/16*1rem)] leading-[calc(1rem)] text-gray-500 tracking-[0.05em]">
                    Anualmente
                  </span>
                </div>


              </div>

              <div className="flex flex-col gap-1.5 border-b border-t border-[rgba(0,0,0,0.06)] bg-white p-[calc(9/16*1rem)]">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[calc(10/16*1rem)] leading-[calc(14/16*1rem)]">
                    {i === plan.features.length - 1 ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                          <path d="M7.14985 3.52276C7.14985 3.18385 6.87511 2.90912 6.53621 2.90912C6.19731 2.90912 5.92258 3.18385 5.92258 3.52276V6.38636H3.05895C2.72005 6.38636 2.44531 6.6611 2.44531 7C2.44531 7.3389 2.72005 7.61364 3.05895 7.61364H5.92258L5.92259 10.4773C5.92259 10.8162 6.19732 11.0909 6.53622 11.0909C6.87512 11.0909 7.14986 10.8162 7.14986 10.4773L7.14985 7.61364H10.0135C10.3524 7.61364 10.6271 7.3389 10.6271 7C10.6271 6.6611 10.3524 6.38636 10.0135 6.38636H7.14985V3.52276Z" fill="#2F3037" />
                        </g>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.92509 3.04195C10.2157 3.21631 10.3099 3.59324 10.1356 3.88385L6.45375 10.0202C6.35653 10.1822 6.19008 10.2905 6.00253 10.3135C5.81499 10.3366 5.62727 10.272 5.49365 10.1384L3.0391 7.68386C2.79947 7.44422 2.79947 7.05569 3.0391 6.81605C3.27874 6.57641 3.66728 6.57641 3.90692 6.81605L5.80573 8.71486L9.08319 3.25242C9.25755 2.96182 9.63448 2.86758 9.92509 3.04195Z" fill="#747686" />
                      </svg>
                    )}
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <div className="p-[calc(9/16*1rem)]">
                <div className="cursor-pointer suisse tracking-[0.03em] relative flex h-5 items-center justify-center rounded bg-white p-0.5 text-[calc(10/16*1rem)] leading-[calc(14/16*1rem)] shadow-[0_0_0.82px_rgba(0,0,0,0.1),0_0_0_0.82px_rgba(0,0,0,0.08)]">
                  <span className="px-1">Suscribirse </span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}