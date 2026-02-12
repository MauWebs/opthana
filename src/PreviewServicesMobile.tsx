import { useRef, useState } from "react";
import PlansUI from "./ui/PlansUI";
import BillingUI from "./ui/BillingUI";

export default function PreviewServicesMobile() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeout = useRef<number | null>(null);

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slides = container.querySelectorAll<HTMLElement>(".snap-center");
    if (index < 0 || index >= slides.length) return;

    const slide = slides[index];
    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = window.setTimeout(() => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const slides = container.querySelectorAll<HTMLElement>(".snap-center");
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    }, 100);
  };

  const info_slides = [
    {
      title: "Aplicaciones y Sistemas",
      description: "Desarrollamos aplicaciones web y móviles optimizadas para ofrecer la mejor experiencia de usuario y conversión.",
      renderUi: (isActive: boolean) => <BillingUI shadowBorder={false} border={true} removeMarginBottom={true} showShine={isActive} />,
    },
    {
      title: "Plataformas y Suscripciones",
      description: "Creamos plataformas y automatizamos digitales a medida, incluyendo facturación, pagos automatizados y pasarelas de pago.",
      renderUi: (isActive: boolean) => <PlansUI shadowBorder={false} border={true} removeMarginBottom={true} showShine={isActive} />,
    }
  ];

  return (
    <section className="relative mt-20 lg:hidden overflow-hidden">
      
        <img
        alt=""
        loading="lazy"
        width={2768}
        height={1342}
        decoding="async"
        data-nimg="1"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        style={{ color: "transparent" }}
        src="https://clerk.com/_next/static/media/components-blur@q80.4a052fd6.webp"
      />
      

      {/* Header */}
      <div className="px-6 text-center">

            <div
            className="
    h-px
    bg-gradient-to-r
    from-[#fff]
    via-gray-300/70
    to-[#ff]
  "
          />


        <h2 className="mt-8 font-medium text-[#6c47ff] relative z-10 text-[13px] suisse tracking-[0.02em] suisse-600 ">
          Nuestro Servicios
        </h2>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-gray-950 text-center">
          Desarrollamos sistemas y plataformas comerciales
        </h3>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Construimos plataformas eficientes, claras y fáciles de mantener, enfocadas en resolver necesidades reales y acompañar el crecimiento de tu negocio.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          mt-14
          flex snap-x snap-mandatory gap-8
          overflow-x-auto
          px-[max(24px,min(20%,calc(50%_-_150px)))]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {info_slides.map((slide, index) => {
          const isActive = currentIndex === index;
          return (
            <div
              key={index}
              className="flex-none snap-center min-w-[350px] max-w-[60%] transition-all duration-500 "
              style={{
                opacity: isActive ? 1 : 0.9,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
            >

              <div className="relative z-10 rounded-[11px] bg-white/40 p-[4px] backdrop-blur-[6px] border border-black/6.5">
                {slide.renderUi(isActive)}
              </div>

              <div className="mt-8 text-center"
                  style={{
                opacity: isActive ? 1 : 0,
              }}
              >
                <h3 className="font-mono text-[0.875rem]/5 font-semibold text-[#582EFF]/95"><a className="underline decoration-[#582EFF]/70 underline-offset-[0.3em] transition-colors cursor-default">{slide.title}</a></h3>
                <p className="mt-3 text-sm text-gray-600">
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="mt-10 flex justify-center gap-4 pb-20">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-950 hover:ring-gray-400 cursor-pointer"}`}
        >
          <span className="absolute -inset-1"></span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M6.964 4.75 3.75 8m0 0 3.214 3.25M3.75 8h8.5"></path></svg>
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollToSlide(currentIndex + 1)}
          disabled={currentIndex === info_slides.length - 1}
          className={`relative flex size-6 items-center justify-center rounded-full text-gray-600 ring-1 ring-inset ring-gray-200 transition ${currentIndex === info_slides.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-950 hover:ring-gray-400 cursor-pointer"}`}
        >
          <span className="absolute -inset-1"></span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.036 11.25 12.25 8m0 0L9.036 4.75M12.25 8h-8.5"></path></svg>
        </button>
      </div>
    </section>

  );

}
