import { useRef, useState } from "react";

export default function PreviewServicesDesktop() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeout = useRef<number | null>(null);
  const [isYearly, setIsYearly] = useState(true);

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

  const slides = [
    {
      title: "Plataformas y Suscripciones",
      description: "Creamos plataformas y automatizamos digitales a medida, incluyendo facturación, pagos automatizados y pasarelas de pago."
    },
    {
      title: "Aplicaciones y Sistemas",
      description: "Desarrollamos aplicaciones web y móviles optimizadas para ofrecer la mejor experiencia de usuario y conversión."
    }
  ];

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slides = container.querySelectorAll<HTMLElement>(".snap-center");
    const slide = slides[index];

    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const goToSlide = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentIndex(safeIndex);
    scrollToSlide(safeIndex);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = window.setTimeout(() => {
      const container = sliderRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const slideElements = container.querySelectorAll<HTMLElement>('.snap-center');

      let closestSlideIndex = 0;
      let minDistance = Infinity;

      slideElements.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const containerCenter = scrollLeft + containerWidth / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSlideIndex = index;
        }
      });

      if (currentIndex !== closestSlideIndex) {
        setCurrentIndex(closestSlideIndex);
      }
    }, 150); // Debounce timeout
  };

  return (
    <section className="relative isolate h-[1200px]">
      <img
        alt=""
        loading="lazy"
        width={2768}
        height={1342}
        decoding="async"
        data-nimg="1"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ color: "transparent" }}
        src="https://clerk.com/_next/static/media/components-blur@q80.4a052fd6.webp"
      />

      {/* Header / Textos */}
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem] pt-30">
        <div className="mx-auto max-w-[63rem] text-center">

          <div
            className="
    h-px
    bg-gradient-to-r
    from-[#fff]
    via-gray-300/70
    to-[#ff]
  "
          />


          <h2 className="mt-8 text-[#6c47ff] relative z-10 text-[13px] suisse tracking-[0.02em] suisse-600">
            Nuestro Servicios
          </h2>

          <p className="mt-8 mx-auto max-w-[22ch] text-balance font-bold tracking-tight text-[#131316] text-[1.5rem] leading-[1.9rem] sm:max-w-4xl sm:text-[2.5rem] sm:leading-[2.5rem] lg:text-[38px] lg:leading-[2.6rem] lg:tracking-[-0.035em]">
            Nos enfocamos en el desarrollo de sistemas y plataformas para empresas y emprendimientos
          </p>

          <p className="mt-3 mx-auto max-w-xl text-[0.875rem]/6 text-gray-700">
            Construimos plataformas eficientes, claras y fáciles de mantener,
            enfocadas en resolver necesidades reales y acompañar el crecimiento de tu negocio.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative [container-type:inline-size]">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="relative isolate flex snap-x snap-mandatory gap-x-8 overflow-x-auto px-[max(calc(50%-10.875rem),theme(padding.6))] py-14 -outline-offset-8 [overscroll-behavior-x:contain] [scrollbar-width:none] sm:gap-x-10 lg:gap-x-16 lg:pl-[calc(50%-(var(--width)/2))] [&::-webkit-scrollbar]:hidden [--width:21.75rem] lg:[--width:45rem]"
          tabIndex={0}
        >

          {slides.map((slide, index) => {
            const isActive = currentIndex === index;
            return (
              <div
                key={index}
                onClick={() => !isActive && goToSlide(index)}
                className={`flex flex-none snap-center flex-col items-center transition-all duration-500 ease-out ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                style={{
                  opacity: isActive ? 1 : 0.9,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
              >
                <span className="flex aspect-[348/452] w-full items-center lg:aspect-[720/452] z-1000">
                  <div className={`flex flex-none flex-col items-center w-[21.75rem] max-w-[calc(100cqw-3rem)] lg:w-[45rem] lg:max-w-none ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <button
                      aria-label="Scroll to OrganizationProfile"
                      tabIndex={-1}
                      className="outline-none cursor-default"
                      style={{ opacity: 1, filter: "blur(0px)" }}
                    >
                      <span className="flex w-full items-center lg:aspect-[720/452]">

                        <div className="relative z-10 rounded-[11px] bg-white/40 p-[5px] backdrop-blur-[6px] my-6 w-full border border-black/6.5">
                          <div
                            className="relative flex overflow-hidden rounded-lg bg-[#F7F7F8] text-[13px] text-gray-500 select-none h-[25rem]"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(0,0,0,0.06), 0 0.82px 1.64px 0 rgba(0,0,0,0.06), 0 0 1.64px rgba(0,0,0,0.08), 0 16px 36px -6px rgba(0,0,0,0.12), 0 8px 16px -3px rgba(0,0,0,0.01)",
                            }}
                          >
                            {/* Shine */}
                              {isActive && (
                                <div
                                  className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl"
                                  style={{ animation: "shine 9s ease infinite" }}
                                />
                              )}

                            {/* Left Sidebar */}
                              <div className="flex w-[11.25rem] flex-col justify-between border-r border-gray-200">
                                <div className="flex flex-col">
                                  <div className="flex h-[4.625rem] flex-col justify-center text-start gap-0 px-5  text-left">
                                    <h2 className="text-base font-bold leading-6 -tracking-[0.01em] text-[#131316]/90  text-left">Configuración</h2>
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
                            {index === 0 ? (
                              <div className="flex flex-1 flex-col bg-white px-6 py-5">
                                <div className="flex flex-col gap-3">
                                  <h2 className="text-sm font-bold leading-5 -tracking-[0.01em] text-[#131316]/90 text-start">Pagos</h2>
                                  <div className="flex flex-col">
                                    <div className="flex gap-4">
                                      <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Suscripción</div>
                                      <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Movimientos</div>
                                      <div className="flex cursor-pointer gap-1.5 border-b border-[#131316]/90 pb-1 text-[10px] text-[#131316]/90 text-start">Pagos</div>
                                    </div>
                                    <hr className="m-0 border-black/10" />
                                  </div>
                                </div>
                                <div className="flex items-start gap-5 py-3">
                                  <p className="flex-1 text-[12px] text-[#131316]/90 mt-2.5 text-left">Suscripción</p>
                                  <div className="w-80">
                                    <div className="flex h-[2.625rem] items-center justify-between rounded-md bg-white px-3 shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                                      <div className="flex flex-col gap-0.5 text-right">
                                        <p className="text-[11px] leading-[14px] text-[#131316] text-left">Profesional</p>
                                        <p className="text-[10px] leading-[13px] text-gray-500">Renueva el 7 de mayo de 2026</p>
                                      </div>
                                      <div className="text-[12px] leading-[14px] text-[#131316]/90">$89.99<span className="text-gray-500">/ mes</span></div>
                                    </div>
                                    <div className="flex h-7 px-3 py-1">
                                      <div className="flex flex-1 cursor-pointer items-center gap-1.5 text-[10px] leading-[13px] hover:text-gray-900">
                                        <img src="/icons/arrows.svg" alt="" className="h-3 w-3" />Cambiar plan
                                      </div>
                                      <div className="flex flex-1 cursor-pointer items-center justify-end gap-1.5 text-[10px] leading-[13px] hover:text-gray-900">
                                        <img src="/icons/gear.svg" alt="" className="h-3 w-3 -mr-[3px] mt-[0.7px]" />
                                        Gestionar
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr className="m-0 border-black/10" />
                                <div className="flex items-start gap-5 py-3">
                                  <p className="flex-1 text-[12px] text-[#131316]/90 mt-2 text-right">Métodos de pago</p>
                                  <div className="w-80">
                                    <div className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-2 hover:bg-gray-100/80 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]">
                                      <img src="/icons/card.svg" alt="" className="h-4 w-4" />
                                      <p className="flex-1 text-[12px] text-[#131316]/90 text-left mr-2">Visa ···4242</p><div className="relative flex h-[calc(14/16*1rem)] items-center justify-center -mr-20 rounded-sm bg-gray-50 px-[calc(5/15*1rem)] text-[calc(9/16*1rem)] leading-[calc(13/16*1rem)] text-gray-500 shadow-[0_0_0_1px_#00000018,0_2px_0_-1px_rgba(0,0,0,0.04)] [contain:paint] before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-b before:from-white before:to-transparent before:content-['']">
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
                            ) : (
                              <div className="flex flex-1 flex-col bg-white">

                                <div className="flex flex-col gap-3 px-6 py-5">
                                  <h2 className="text-sm font-bold leading-5 -tracking-[0.01em] text-[#131316]/90 text-start">Suscripción</h2>
                                  <div className="flex flex-col">
                                    <div className="flex gap-4">
                                      <div className="flex cursor-pointer gap-1.5 border-b border-[#131316]/90 pb-1 text-[10px] text-[#131316]/90 text-start">Suscripción</div>
                                      <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Movimientos</div>
                                      <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Pagos</div>
                                    </div>
                                    <hr className="m-0 border-black/10" />
                                  </div>
                                </div>

                                <div className="flex items-center bg-white overflow-x-auto whitespace-nowrap gap-3 px-6">
                                  {PLANS.map((plan, i) => (
                                    <div
                                      key={i}
                                      className="min-w-[12.1rem] rounded-md bg-gray-50 border border-black/5"
                                    >
                                      <div className="flex flex-col gap-1 p-[calc(9/16*1rem)]">
                                        <div className="flex items-center gap-2">
                                          <p className="text-[11px] suisse-600 leading-[calc(14/16*1rem)] tracking-[0.02em] text-[#000]/75">{plan.name}</p>
                                          <span
                                            className={`relative inline-flex shrink-0 items-center ml-18.5 overflow-hidden rounded-sm px-1 py-0.5
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
                                          <span className="font-bold text-[#42434D]">
                                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                          </span>
                                          <span className="text-[9.5px] suisse leading-[calc(13/16*1rem)] text-[#6a7282] tracking-[0.03em] suisse mt-1">
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
                                            <span
                                              className="
                                              block size-[7px] rounded-full bg-white
                                              shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]
                                              transition-all duration-200
                                            "
                                              style={{
                                                transform: isYearly ? 'translateX(8px)' : 'translateX(0px)',
                                              }}
                                            />
                                          </button>
                                          <span className="text-[9.5px] suisse leading-[calc(13/16*1rem)] text-[#6a7282] tracking-[0.03em] suisse">
                                            Anualmente
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 border-b border-t border-[rgba(0,0,0,0.06)] bg-white p-[calc(9/16*1rem)]">
                                        {plan.features.map((feature, j) => (
                                          <div key={j} className="flex items-start gap-1.5 text-[calc(10/16*1rem)] leading-[calc(14/16*1rem)] text-[#42434D]">
                                            {j === plan.features.length - 1 ? (
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
                            )}

                          </div>
                        </div>
                      </span>
                    </button>
                  </div>
                </span>

                <div
                  className={`
                  pointer-events-auto mt-10 mb-12 max-w-[calc(100%-3rem)]
                  transform-gpu sm:w-[30rem] mx-auto text-center cursor-default
                  transition-all duration-500
                  ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                >
                  <h3 className="font-mono text-[0.875rem]/5 font-semibold text-[#582EFF]/95">
                    <a className="underline decoration-gray-300/90 underline-offset-[0.3em] transition-colors cursor-default">
                      {slide.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-pretty text-sm/5 text-gray-700">
                    {slide.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div className="relative -mt-10 flex gap-x-2 sm:justify-center sm:gap-x-4">
            <button
              type="button"
              aria-label="Previous"
              className="relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition hover:text-gray-600 hover:ring-gray-300 hover:bg-white"
              onClick={() => goToSlide(currentIndex - 1)}
            >
              <svg viewBox="0 0 16 16" className="size-4">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M6.964 4.75 3.75 8m0 0 3.214 3.25M3.75 8h8.5"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next"
              className="relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition hover:text-gray-600 hover:ring-gray-300 hover:bg-white"
              onClick={() => goToSlide(currentIndex + 1)}
            >
              <svg viewBox="0 0 16 16" className="size-4">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M9.036 11.25 12.25 8m0 0L9.036 4.75M12.25 8h-8.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
