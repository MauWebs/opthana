import { useState } from "react";
import { useContactModal } from "./ContactModalContext";

export default function FAQs() {
  const { openModal } = useContactModal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQ_DATA = [
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: `
      <p>
        Aceptamos pagos tanto en pesos argentinos como en dólares, quedando el método a elección del cliente según su comodidad.
        Para pagos en dólares utilizamos ( **PayPal** ), mientras que para pagos dentro de Argentina trabajamos con ( **Mercado Pago** ) y ( **Ualá** ) ya que son las plataformas más confiables.
      </p>
    `
    },
    {
      question: "¿El servicio tiene garantía o devolución?",
      answer: `
      <p>
        Sí, ofrecemos una garantía inicial del proyecto, si ( **dentro de los primeros 15 días** ) decidís no continuar, se devuelve el 50% del pago inicial.
        Pasado ese plazo, el proyecto entra en una fase avanzada de desarrollo
        y no se realizan devoluciones.
      </p>
    `
    },
    {
      question: "¿Puedo escalar mi proyecto en el futuro?",
      answer: `
      <p>
        Sí, todos los proyectos se desarrollan pensando para crecer a largo plazo.
        Podés comenzar con un sitio web y luego evolucionar a una plataforma,
        sistema de suscripción o aplicación móvil sin rehacer todo desde cero,
        ya que el desarrollo está pensado para ( **escalar fácilmente** ).
      </p>
    `
    },
    {
      question: "¿Ofrecen soporte y mantenimiento continuo?",
      answer: `
      <p>
        Sí, brindamos soporte técnico, mantenimiento, actualizaciones y mejoras posteriores al lanzamiento
        para asegurar el correcto funcionamiento del sistema mediante un ( **soporte continuo** ) del desarrollo.
      </p>
    `
    },
    {
      question: "¿Cuánto tiempo tarda el desarrollo del proyecto?",
      answer: `
      <p>
        El tiempo estimado de desarrollo es de hasta 1 mes, dependiendo de la complejidad y el tipo de proyecto.
        Sitios web simples pueden estar listos en menos tiempo, mientras que plataformas o aplicaciones
        requieren más etapas de trabajo y validación, con un plazo máximo de ( **hasta 1 mes** ) aproximadamente.
      </p>
    `
    }
  ];

  return (
    <div id="faqs">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <section className="relative mx-auto max-w-[63rem] sm:pb-20 sm:pt-10">

          <div
            className="absolute inset-y-0 right-full hidden w-px md:block"
            style={{
              background: "linear-gradient(to bottom, rgb(235, 235, 236) 0%, #EBEBEC 35%, #ebebec73 calc(100% - 6rem), #ebebec13 100%)",
            }}
          ></div>

          <div
            className="absolute inset-y-0 left-full hidden w-px md:block"
            style={{
              background: "linear-gradient(to bottom, rgb(235, 235, 236) 0%, #EBEBEC 35%, #ebebec73 calc(100% - 6rem), #ebebec13 100%)",
            }}
          ></div>

          <h2 className="mx-auto max-w-xl text-balance text-center suisse-600 text-[30px] tracking-[-0.015em] text-gray-950 underline underline-offset-[8px] mb-6">
            Preguntas frecuentes
          </h2>

          <p className="mx-auto mt-3 max-w-[480px] text-center text-base/5 text-[15px] text-[#5e5f6e]">
            Respuestas rápidas a preguntas comunes sobre nuestros servicios de desarrollo web y móvil.
            Si tienes otra duda,{' '}
            <a
              onClick={openModal}
              className="underline decoration-[#D9D9DE] text-[#5e5f6e] decoration-2 underline-offset-[0.25em] transition-colors hover:text-[#131316] hover:decoration-[#131316]"
            >
              contáctanos
            </a>
          </p>

          <div className="mx-auto mt-10 max-w-[41.75rem] space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-[#42434d]/20 border-dashed pb-3">
                  <button
                    type="button"
                    className={`w-full flex justify-between text-left py-3 text-[13px] tracking-[.2px] transition-colors duration-300 suisse-600 ${isOpen ? "text-[#0966FE]/85" : "text-[#131316]/85 hover:text-[#0966FE]/85"
                      }`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`w-4 h-4 stroke-gray-400 transition-transform duration-300 transform ${isOpen ? "rotate-180 stroke-[#0966FE]/85" : "group-hover:stroke-[#0966FE]/85"
                        }`}
                    >
                      <path
                        d="M4.75 6.75L8 10.25L11.25 6.75"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 text-[#42434d]/75 text-[12.5px] tracking-[.4px]`}
                    style={{ maxHeight: isOpen ? "500px" : "0" }}
                    dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<span class="suisse-600 underline">$1</span>') }}
                  />
                </div>
              );
            })}
          </div>

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_DATA.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer.replace(/<[^>]+>/g, '')
                }
              }))
            })}
          </script>
        </section>
      </div>
    </div>
  );

}
