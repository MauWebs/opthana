import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import OfferBar from "./OfferBar";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Offers from "./Offers";
import FeaturesGrid from "./FeaturesGrid";
import PreviewServices from "./PreviewServices";
import { ContactModalProvider, useContactModal } from "./ContactModalContext";
import ContactModal from "./ContactModal";

function FeaturesAnimated() {
  const { openModal } = useContactModal();
  return (
    <section>
      <div className="mt-20 sm:-mt-15 sm:-mb-15 text-center px-6 sm:px-3 lg:px-0">

        {/* Línea degradada */}
        <h2 className="relative z-10 mt-4 text-[#9785ff] text-[13px] suisse mt-9 tracking-[0.02em]">Servicios Seguros</h2>

        {/* Contenedor de animación */}
        <div
          aria-hidden="true"
          className="relative mt-7 h-[20rem] select-none mx-auto max-w-[63rem] group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden z-500 bg-overlay"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask:radial-gradient(50%_70%_at_center,white_36%,transparent_92%)]">
              {/* Círculos de fondo fijos */}
              <svg viewBox="0 0 64 64" className="size-16 overflow-visible" aria-hidden="true">
                <g stroke="#fff" strokeOpacity="0.05" fill="none">
                  {[320, 288, 256, 224, 192, 160, 128, 96, 64].map((r) => (
                    <circle key={r} cx="32" cy="32" r={r}></circle>
                  ))}
                </g>
              </svg>

              {/* Círculos animados */}
              {[64, 96, 128, 160].map((r, i) => (
                <svg
                  key={i}
                  viewBox="0 0 64 64"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  className={`absolute left-1/2 top-1/2 -ml-8 -mt-8 size-16 overflow-visible `}
                  style={{ animation: `${i % 2 === 0 ? "rotate360" : "rotateReverse360"} ${10 + i * 2}s linear infinite` }}
                >
                  <defs>
                    <linearGradient id={`grad${i + 1}`} x1="11" y1="0" x2="53" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopOpacity="0" stopColor="#6C47FF" />
                      <stop offset="50%" stopColor="#3AD4FD" stopOpacity="1" />
                      <stop offset="100%" stopOpacity="0" stopColor="#6C47FF" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r={r} strokeDasharray="42 9999" strokeDashoffset={-280 - i * 150} stroke={`url(#grad${i + 1})`}></circle>
                  <circle cx="32" cy="32" r={r} strokeDasharray="42 9999" strokeDashoffset={-80 - i * 100} stroke={`url(#grad${i + 1})`}></circle>
                </svg>
              ))}
            </div>

            {/* Círculo central */}
            <div className="pointer-events-none relative isolate w-[4.25rem] h-[4.25rem] ">
              <div
                className="absolute inset-0 -z-10 rounded-full blur-sm"
                style={{
                  background:
                    "radial-gradient(farthest-corner at top left, rgba(108,71,255,0.7) 9.6%, #3AD4FD 53.8%, rgba(56,218,253,0.5) 84%, rgba(98,72,246,0.6) 110%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(farthest-corner at top left, rgba(108,71,255,0.7) 9.6%, #3AD4FD 53.8%, rgba(56,218,253,0.5) 84%, rgba(98,72,246,0.6) 110%)",
                  opacity: 0.2,
                }}
              ></div>
              <div className="absolute inset-0.5 rounded-full bg-[#212126] shadow-[0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.4)] bg-overlay-opacity-50" >
                <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="size-16">
                  <path
                    fill="#e0e0eb"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-8Zm4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  ></path>
                  <path
                    stroke="#e0e0eb"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M29 27v-2a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <style>{`
          @keyframes rotate360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rotateReverse360 { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        `}</style>
        </div>

        <p className="group relative mt-10 max-w-200 text-2xl font-semibold text-[#fff] mx-auto">
          Desarrollamos tu software con <strong>alta seguridad</strong> y <strong>hosting profesional</strong> para que tus clientes perciban tu <strong>credibilidad</strong> y <strong>profesionalismo</strong>.
        </p>

        <p className="group relative mb-4 mt-3 max-w-145 text-[14px] text-[#9394a1] mx-auto">
          Personalizamos cada proyecto según tus necesidades, asegurando control total de tus funcionalidades y ofreciendo un entorno confiable y seguro para tu negocio y tus clientes.
        </p>

        <button
           onClick={openModal}
          className="group relative flex h-8 w-full items-center justify-center overflow-hidden rounded-md text-[13px] text-white transition-all duration-150 hover:bg-[#3a3b42] max-w-55 mx-auto mt-7 cursor-pointer "
          style={{
            boxShadow:
              "rgb(46, 46, 53) 0px 0px 0px 1px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.04) 45%, rgba(255,255,255,0) 55%), #42434d",
            transform: "translateY(0px)",
          }}
        >
          Solicitar servicios
          <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none
                    group-hover:translate-x-6 group-hover:opacity-0 
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
          <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none
                    -translate-x-2 opacity-0 
                    group-hover:translate-x-0 group-hover:opacity-100
                    transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
        </button>

      </div>

    </section>
  );
}

function SecureServices({ sectionRef }: { sectionRef?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="relative" ref={sectionRef}>

      {/* BORDE SUPERIOR */}
      <div className="absolute inset-x-0 -top-11 mt-[calc(-3/16*1rem)] flex items-end z-10">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#131316] bg-overlay" />

        <div className="mx-auto flex w-full justify-between px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div
            className="-ml-2.5 w-[3.75rem] h-12 flex-none bg-[#131316] bg-overlay"
            style={{
              maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='-4 0 60 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 2.686 4 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 4 Z' fill='black'/%3E%3C/svg%3E\")",
              WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='-4 0 60 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 2.686 4 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 4 Z' fill='black'/%3E%3C/svg%3E\")",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />

          <div
            className="-mr-2.5 w-[3.75rem] h-12 flex-none bg-[#131316] bg-overlay"
            style={{
              maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 60 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 53.314 4 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 4 Z' fill='black'/%3E%3C/svg%3E\")",
              WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 60 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 53.314 4 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 4 Z' fill='black'/%3E%3C/svg%3E\")",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />
        </div>

        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#131316] bg-overlay" />
      </div>

      <div className="relative overflow-hidden bg-[#131316] pb-[calc(theme(padding.32)+theme(height.11))] pt-32 select-none">

        {/* CIRCUITOS INICIO */}
        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%] ">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="ml-[calc(0/16*1rem)] mt-[calc(-92/16*1rem)] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(26.5625rem_24.375rem_at_30%_calc(92/16*1rem),rgba(255,255,255,1),transparent)] sm:ml-[calc(-340/16*1rem)] md:ml-[calc(-400/16*1rem)] lg:ml-[calc(-500/16*1rem)] xl:ml-[calc(-564/16*1rem)]" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%] ">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="mt-[calc(302/16*1rem)] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(26.5625rem_24.375rem_at_30%_calc(92/16*1rem),rgba(255,255,255,1),transparent)] sm:ml-[calc(-340/16*1rem)]" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 left-200 overflow-hidden sm:pl-[50%] ">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="mt-[calc(302/16*1rem)] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(27rem_27rem_at_30%_calc(92/16*1rem),rgba(255,255,255,1),transparent)] sm:ml-[calc(-340/16*1rem)]" src="/circuit-dark.webp"></img>
        </div>


        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <img
            alt=""
            loading="lazy"
            width="1748"
            height="1982"
            decoding="async"
            data-nimg="1"
            className="
      mt-[calc(-100/16*1rem)]
      ml-[16rem]
      w-[calc(874/16*1rem)]
      max-w-none
      rotate-180
      [mask:linear-gradient(to_bottom,transparent_0%,transparent_35%,white_55%,white_100%)]
    "
            src="/circuit-dark.webp"
          />
        </div>


        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="mt-[calc(-162/16*1rem)] ml-[-27.5rem] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(26.5625rem_24.375rem_at_20%_calc(92/16*1rem),rgba(255,255,255,1),transparent)] rotate-90" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 overflow-hidden">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="[mask:radial-gradient(26.5625rem_24.375rem_at_50%_calc(92/16*1rem),rgba(255,255,255,0.9),transparent)] sm:ml-[calc(-200/16*1rem)]  mt-[calc(-10/14*1rem)] ml-[-23.5rem] w-[calc(874/16*1rem)] max-w-none" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="mt-[calc(-162/16*1rem)] ml-[-27.5rem] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(3rem_10rem_at_90%_calc(92/16*1rem),rgba(255,255,255,1),transparent)] rotate-90" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <img alt="" loading="lazy" width="1748" height="1982" decoding="async" data-nimg="1" className="mt-[calc(-221/16*1rem)] mr-[80.5rem] w-[calc(874/16*1rem)] max-w-none [mask:radial-gradient(26.5625rem_24.375rem_at_90%_calc(92/16*1rem),rgba(255,255,255,1),transparent)]" src="/circuit-dark.webp"></img>
        </div>

        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <img
            alt=""
            loading="lazy"
            width="1748"
            height="1982"
            decoding="async"
            className="
      mt-[calc(270/16*1rem)]
      ml-[-73rem]
      w-[calc(874/16*1rem)]
      max-w-none
      rotate-90
      [mask:radial-gradient(20rem_100rem_at_20%_50%,rgba(255,255,255,1),transparent)]
    "
            src="/circuit-dark.webp"
          />
        </div>

        {/* CIRCUITOS FIN */}

        <div className="absolute inset-0 bg-overlay pointer-events-none"></div>

        <FeaturesAnimated />

      </div>

      {/* BORDE INFERIOR */}
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem] z-1000000"><div className="relative -mx-2.5 flex -bottom-1 -mt-12 "><svg viewBox="0 0 64 48" className="w-16 flex-none fill-gray-50" aria-hidden="true" ><path d="M51.657 2.343 12.343 41.657A8 8 0 0 1 6.686 44H0v4h64V0h-6.686a8 8 0 0 0-5.657 2.343Z"></path></svg><div className="-mx-px flex-auto bg-gray-50"></div><svg viewBox="0 0 64 48" className="w-16 flex-none fill-gray-50" aria-hidden="true" ><path d="m12.343 2.343 39.314 39.314A8 8 0 0 0 57.314 44H64v4H0V0h6.686a8 8 0 0 1 5.657 2.343Z"></path></svg></div>
      </div>

    </div>
  )
}

function HeroHeader() {
  const { openModal } = useContactModal();
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 pb-60 pt-[calc(theme(spacing.16)+theme(spacing.20))] sm:-mt-[10px] sm:pb-101 sm:pt-[calc(theme(spacing.16)+theme(spacing.32))] select-none">

      <div className="absolute inset-0 -z-10">

        {/* Circuit Right */}
        <div className="absolute -top-8 right-1/2 sm:top-5 aspect-[969/887] w-[969px]">
          <picture>
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-lines@2xl.ee1ad3dd.webp"
              type="image/webp"
            />
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png"
              type="image/png"
            />
            <img
              alt=""
              width={1938}
              height={1774}
              decoding="async"
              className="absolute inset-0 h-full w-full"
              style={{ color: "transparent" }}
              src="https://clerk.com/_next/static/media/circuit-lines@2xl.ee1ad3dd.webp"
            />
          </picture>

          <div className="absolute inset-0">
            <canvas
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              width={403}
              height={363}
              style={{
                left: "calc(31.5rem)",
                top: "calc(1.5625rem)",
                width: "calc(25.1875rem)",
                height: "calc(22.6875rem)",
              }}
            />
            <svg width="0" height="0" aria-hidden="true">
              <path d="M296 224V187.314C296 185.192 296.843 183.157 298.343 181.657L352.657 127.343C354.157 125.843 356.192 125 358.314 125H383" />
            </svg>
            <svg width="0" height="0" aria-hidden="true">
              <path d="M294 226H209.314C207.192 226 205.157 226.843 203.657 228.343L86.8431 345.157C85.3428 346.657 83.308 347.5 81.1863 347.5H20" />
            </svg>
            <svg width="0" height="0" aria-hidden="true">
              <path d="M54 290V133.657C54 132.596 54.4214 131.579 55.1716 130.828L89.8284 96.1716C90.5786 95.4214 91 94.404 91 93.3431V16" />
            </svg>
            <svg width="0" height="0" aria-hidden="true">
              <path d="M287 89V70.5L314.157 43.3431C315.657 41.8429 316.5 39.808 316.5 37.6863V21" />
            </svg>
          </div>

          <picture>
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp"
              type="image/webp"
            />
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-components@2xr.175a3562.png"
              type="image/png"
            />
            <img
              alt=""
              width={1938}
              height={1774}
              decoding="async"
              className="absolute inset-0 h-full w-full"
              style={{ color: "transparent" }}
              src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp"
            />
          </picture>
        </div>

        {/* Circuit Left (mirrored) */}
        <div className="absolute -top-8 right-1/2 origin-right -scale-x-100 sm:top-5 aspect-[969/887] w-[969px]">
          <picture>
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-lines@2xl.ee1ad3dd.webp"
              type="image/webp"
            />
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png"
              type="image/png"
            />
            <img
              alt=""
              width={1938}
              height={1774}
              decoding="async"
              className="absolute inset-0 h-full w-full"
              style={{ color: "transparent" }}
              src="https://clerk.com/_next/static/media/circuit-lines@2xl.ee1ad3dd.webp"
            />
          </picture>

          <div className="absolute inset-0">
            <canvas
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              width={403}
              height={363}
              style={{
                left: "calc(31.5rem)",
                top: "calc(1.5625rem)",
                width: "calc(25.1875rem)",
                height: "calc(22.6875rem)",
              }}
            />
          </div>

          <picture>
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp"
              type="image/webp"
            />
            <source
              srcSet="https://clerk.com/_next/static/media/circuit-components@2xr.175a3562.png"
              type="image/png"
            />
            <img
              alt=""
              width={1938}
              height={1774}
              decoding="async"
              className="absolute inset-0 h-full w-full"
              style={{ color: "transparent" }}
              src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp"
            />
          </picture>
        </div>

      </div>

      <div className="absolute inset-x-0 opacity-80 bottom-[calc(-702/16*1rem)] top-0 -z-10 bg-[radial-gradient(154.86%_76.83%_at_50%_22.26%,theme(colors.gray.50/0.4)_8.98%,theme(colors.gray.50)_45.99%)]"
      />

      {/* Gradient SVG */}
      <svg
        viewBox="-1000 0 3504 918"
        aria-hidden="true"
        className="absolute -top-6 left-1/2 -z-10 ml-[calc(-3504/2/16*1rem)] w-[calc(3504/16*1rem)] mix-blend-color-burn"
      >
        <path fill="url(#hero-gradient)" d="M3504 918H-1000V0h3504v918Z" />
        <defs>
          <radialGradient
            id="hero-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(0 707.279 -1739.2 0 741 159.991)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C47FF" stopOpacity="0.6" />
            <stop offset=".412" stopColor="#FFF963" stopOpacity=".8" />
            <stop offset=".623" stopColor="#6248F6" stopOpacity=".6" />
            <stop offset=".919" stopColor="#6248F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="lg:absolute md:absolute sm:absolute inset-0 flex items-center justify-center z-30">

        <div className="text-center mx-auto w-full px-6 -mt-2 max-h-[100px]  lg:max-h-[180px] md:max-h-[180px] sd:max-h-[120px] sm:max-w-[60rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">

          <h1 className="mx-auto max-w-[22ch] text-balance font-bold tracking-tight text-[#131316] text-[1.5rem] leading-[1.9rem] sm:max-w-4xl sm:text-[2.5rem] sm:leading-[2.5rem] lg:text-[3.6rem] lg:leading-[3.5rem] lg:tracking-[-0.035em]">
            Desarrollo de Software y Aplicaciones para Empresas
          </h1>

          <p className="mt-4 mx-auto max-w-[32ch] text-[0.875rem] leading-6 text-gray-700 sm:hidden">
            Soluciones digitales a medida para empresas que necesitan vender más y tener control.
          </p>

          <p className="mt-5 mx-auto hidden sm:block max-w-xl text-[0.95rem] leading-6 text-gray-700 lg:text-[16px] lg:max-w-[800px]">
            Desarrollamos soluciones digitales a medida, desde sitios web de alto rendimiento hasta plataformas pensadas para empresas que necesitan más ventas y control.
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col">
            <button className="btn-purple text-[13px] sm:text-[13px] cursor-pointer tracking-[0.1px] group" type="button" onClick={openModal}>
              Ponerse en contacto
              <div className="group relative isolate inline-flex items-center justify-center overflow-hidden text-[12px] transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white">
                <svg
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className="ml-2 h-2.5 w-2.5 flex-none opacity-60 pointer-events-none group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className="-ml-2.5 h-2.5 w-2.5 flex-none pointer-events-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default function App() {
  const secureServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!secureServicesRef.current) return;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      const target = e.target;

      if (
        target instanceof HTMLImageElement ||
        target instanceof SVGElement
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <>
      {/* Envolvemos la aplicación con el proveedor del modal */}
      <ContactModalProvider>
        {/* El modal ahora vive aquí y es controlado por el contexto */}
        <ContactModal />

        <style>{`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .btn-purple {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 1.875rem;
  padding: 0 0.75rem;

  color: #ffffff;
  text-align: left;

  background-color: #6c47ff;
  border-radius: 0.375rem;
  overflow: hidden;

  /* Border apenas más oscuro */
  --ring-color: rgb(96 63 230 / 1);
  
  box-shadow:
    0 0 0 1px var(--ring-color),
    inset 0 1px rgb(255 255 255 / 0.07);

  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0.36, 0, 1);
}

.btn-purple::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;

  background: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0.2),
    transparent
  );

  border-radius: inherit;
  opacity: 0.5;
  transition: opacity 300ms cubic-bezier(0.4, 0.36, 0, 1);
}

.btn-purple::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;

  background: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0.1) 46%,
    transparent 54%
  );

  mix-blend-mode: overlay;
  border-radius: inherit;
}

.btn-purple:hover {
  box-shadow:
    0 0 0 1px var(--ring-color),
    inset 0 1px rgb(255 255 255 / 0.12);
}

.btn-purple:hover::before {
  opacity: 0.75;
}

.btn-purple:active {
  box-shadow:
    0 0 0 1px var(--ring-color),
    inset 0 2px rgb(255 255 255 / 0.05);
}

.btn-purple:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px rgb(96 63 230 / 0.6),
    inset 0 1px rgb(255 255 255 / 0.07);
}

.spinning-play-button {
  position: relative;
  display: grid;
  place-items: center;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 9999px;
}

/* Anillo giratorio ultra sutil */
.spinning-play-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;

  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #919191 140deg,
    #7e5efc00 220deg,
    transparent 360deg
  );

  animation: spin 2.4s linear infinite;
  opacity: 0.6;
  will-change: transform;
}

/* Centro limpio */
.spinning-play-button::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  background-color: white;
}


      `}</style>

        <OfferBar />

        <Navbar />

        <HeroHeader />

        <FeaturesGrid />

        <PreviewServices />

        <SecureServices sectionRef={secureServicesRef} />

        <Offers />

        <FAQs />

        <Footer />

      </ContactModalProvider>

    </>
  );
}