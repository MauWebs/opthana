export default function PreviewServices() {
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
    via-[#6C47FF]/70
    to-[#ff]
  "
          />

          <h2 className="mt-8 text-[#6c47ff] relative z-10 text-[13px] suisse tracking-[0.02em] suisse-600">
            Nuestro Servicios
          </h2>

          <p className="mt-8 mx-auto max-w-[700px] text-3xl suisse-600 tracking-[-0.015em] text-gray-950">
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
          className="isolate flex snap-x snap-mandatory gap-x-8 overflow-x-auto px-[max(calc(50%-10.875rem),theme(padding.6))] py-14 -outline-offset-8 [overscroll-behavior-x:contain] [scrollbar-width:none] sm:gap-x-10 lg:gap-x-16 lg:pl-[calc(50%-(var(--width)/2))] [&::-webkit-scrollbar]:hidden [--width:21.75rem] lg:[--width:45rem]"
          tabIndex={0}
        >

          {/* Slide 1 */}
          <div className="flex flex-none snap-center flex-col items-center pointer-events-none">
            <button
              tabIndex={-1}
              className="outline-none"
              style={{ opacity: 1, filter: "blur(0px)" }}
            >
              <span className="flex aspect-[348/452] w-full items-center lg:aspect-[720/452] z-1000">
                <div className="flex flex-none snap-center flex-col items-center w-[21.75rem] max-w-[calc(100cqw-3rem)] lg:w-[45rem] lg:max-w-none pointer-events-none">
                  <button
                    aria-label="Scroll to OrganizationProfile"
                    tabIndex={-1}
                    className="outline-none"
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
                          <div
                            className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl"
                            style={{ animation: "shine 9s ease infinite" }}
                          />

                          {/* Left Sidebar */}
                          <div className="flex w-[11.25rem] flex-col justify-between border-r border-gray-200">
                            <div className="flex flex-col">
                              <div className="flex h-[4.625rem] flex-col justify-center text-start gap-0 px-5">
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
                              <h2 className="text-sm font-bold leading-5 -tracking-[0.01em] text-[#131316]/90 text-start">Facturación</h2>
                              <div className="flex flex-col">
                                <div className="flex gap-4">
                                  <div className="flex cursor-pointer gap-1.5 border-b border-[#131316]/90 pb-1 text-[10px] text-[#131316]/90 text-start">Suscripción</div>
                                  <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Movimientos</div>
                                  <div className="flex cursor-pointer items-center gap-1.5 pb-1 text-[10px] text-gray-500 hover:text-[#131316]/90">Pagos</div>
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
                                  <p className="flex-1 text-[12px] text-[#131316]/90 text-left mr-2">Visa ···4242</p><div className="relative flex h-[calc(14/16*1rem)] items-center justify-center -mr-22 rounded-sm bg-gray-50 px-[calc(5/15*1rem)] text-[calc(9/16*1rem)] leading-[calc(13/16*1rem)] text-gray-500 shadow-[0_0_0_1px_#00000018,0_2px_0_-1px_rgba(0,0,0,0.04)] [contain:paint] before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-b before:from-white before:to-transparent before:content-['']">
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
                      </div>
                    </span>
                  </button>
                </div>
              </span>

              <div className="pointer-events-auto mt-10 mb-12 max-w-[calc(100%-3rem)] transform-gpu sm:w-[30rem] mx-auto text-center cursor-default" style={{ opacity: 1, visibility: "visible" }}>
                <h3 className="font-mono text-[0.875rem]/5 font-semibold text-[#582EFF]/95">
                  <a className="underline decoration-gray-300/90 underline-offset-[0.3em] transition-colors cursor-default">
                    Plataformas y Suscripciones
                  </a>
                </h3>
                <p className="mt-3 text-pretty text-sm/5 text-gray-700">
                  Creamos plataformas y automatizamos digitales a medida, incluyendo facturación, pagos automatizados y pasarelas de pago.
                </p>
              </div>


            </button>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-none snap-center flex-col items-center w-[21.75rem] max-w-[calc(100cqw-3rem)] lg:max-w-none">
            <button
              aria-label="Scroll to CreateOrganization"
              tabIndex={-1}
              className="outline-none"
              style={{ opacity: 0.8, filter: "blur(3.5px)" }}
            >
              <span className="flex aspect-[348/452] w-full items-center" />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div className="relative -mt-10 flex gap-x-2 sm:justify-center sm:gap-x-4">
            <button
              type="button"
              disabled
              aria-label="Previous"
              className="relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition opacity-50"
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
              className="relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition hover:text-gray-600 hover:ring-gray-300"
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
