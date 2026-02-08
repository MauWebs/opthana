export default function SalesWebsitesUI() {
  return (
    <div
      className="relative my-6 overflow-hidden rounded-lg bg-[#F7F7F8] text-[13px] text-gray-600"
      style={{
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.06), 0 0.82px 1.64px 0 rgba(0,0,0,0.06), 0 0 1.64px rgba(0,0,0,0.08), 0 16px 36px -6px rgba(0,0,0,0.12), 0 8px 16px -3px rgba(0,0,0,0.01)",
      }}
    >
      {/* Shine */}
      <div
        className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.75)] to-transparent blur-xl"
        style={{ animation: "shine 10s ease infinite" }}
      />

      <div className="relative flex items-center border-b border-black/8 px-3 py-3.5">
        {/* Dots tipo Safari (izquierda) */}
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-full bg-gray-600/20 border border-black/7" />
          <div className="size-2 rounded-full bg-gray-600/20 border border-black/7" />
          <div className="size-2 rounded-full bg-gray-600/20 border border-black/7" />
        </div>

        {/* Título centrado real */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
          <a
            className="pointer-events-auto inline-flex items-center gap-[6px]"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.11)",
              color: "#3f3f46e7",
              fontSize: "11px",
              padding: "3px 10px",
              paddingRight: "30px",
              borderRadius: "6px",
              textDecoration: "none",
              userSelect: "none",
            }}
          >
            <svg
              className="-ml-[3px]"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.55 }}
            >
              <circle cx="10" cy="10" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>

            https://tu-domino.com/
          </a>
        </div>
      </div>




      <div className="bg-white p-5 px-3">
        <div className="flex gap-8">
          
          <div className="flex-1 py-2">
            <div className="h-2.5 w-20 bg-gray-200 rounded-full mb-3" />
            <div className="h-6 w-full max-w-[200px] bg-gray-900/10 rounded-md mb-2" />
            <div className="h-6 w-3/4 bg-gray-900/10 rounded-md mb-4" />

            <div className="space-y-1.5 mb-5">
              <div className="h-2 w-full bg-gray-100 rounded-full" />
              <div className="h-2 w-5/6 bg-gray-100 rounded-full" />
              <div className="h-2 w-4/6 bg-gray-100 rounded-full" />
            </div>

            <div className="flex gap-2">
              <div className="h-7 w-20 bg-[#2F3037]/89 rounded-md border border-black/20" />
              <div className="h-7 w-20 bg-gray-100 border border-gray-200 rounded-md" />
            </div>
          </div>

          <div className="w-32 h-32 bg-gray-100 rounded-lg shrink-0 hidden sm:block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-transparent" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="space-y-2">
              <div className="size-6 bg-gray-100 rounded-md" />
              <div className="h-2 w-16 bg-gray-200 rounded-full" />
              <div className="h-1.5 w-full bg-gray-100 rounded-full" />
              <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}