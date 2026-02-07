export default function OfferBar() {
  return (
    <>
      <a
        href="/"
        className="sticky top-0 isolate group absolute top-0 z-1000 mt-0 flex w-full gap-x-4 whitespace-nowrap bg-[#131316] py-2 text-[12px] mb-1 text-white outline-none cursor-pointer [&_div]:cursor-[inherit] [&_svg]:cursor-[inherit]  tracking-[.4px] bg-overlay"
      >
        {/* LEFT SKEW */}
        <div
          aria-hidden="true"
          className="relative -my-2 flex-grow overflow-hidden skew-left bg-overlay"
        ></div>

        {/* TEXT */}
        <div className="truncate">Desarrollamos tu web para vos por $45 dólares</div>

        {/* SEPARATOR */}
        <div className="my-[calc(3/16*1rem)] w-px flex-none bg-white/20"></div>

        {/* CTA */}
        <div aria-hidden="true" className="group-focus-visible:outline-focus flex">
          <div className="group relative isolate inline-flex items-center justify-center overflow-hidden text-[12px] transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white">
            Más información
            <svg
              viewBox="0 0 10 10"
              aria-hidden="true"
              className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
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
              className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
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
        </div>

        {/* RIGHT SKEW */}
        <div
          aria-hidden="true"
          className="relative -my-2 flex-grow overflow-hidden skew-right"
        ></div>
      </a>

      <style>{`
        :root {
          --tw-content: '';
        }

        .skew-left::before {
          content: var(--tw-content);
          position: absolute;
          inset: 0;
          margin-right: 2rem;
          transform: translateY(calc(-100% + 0.625rem)) skewX(-45deg);
          border-radius: 0.25rem;
          border-bottom: 1.5px solid rgba(255,255,255,0.14);
          border-right: 1.5px solid rgba(255,255,255,0.14);
          background-color: rgba(0,0,0,0.6);
        }

        .skew-right::before {
          content: var(--tw-content);
          position: absolute;
          inset: 0;
          margin-left: 2rem;
          transform: translateY(calc(-100% + 0.625rem)) skewX(45deg);
          border-radius: 0.25rem;
          border-bottom: 1.5px solid rgba(255,255,255,0.14);
          border-left: 1.5px solid rgba(255,255,255,0.14);
          background-color: rgba(0,0,0,0.6);
        }

        a, *::before, *::after {
          box-sizing: border-box;
          border: 0 solid #d9d9de;
        }
      `}</style>
    </>
  );
}