export default function SystemsForCompaniesUI() {
  return (
    <div
      className="relative my-6 flex overflow-hidden rounded-lg bg-[#F7F7F8] text-[13px] text-gray-500 select-none"
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

      {/* Sidebar */}
      <div className="flex w-[11.25rem] flex-col justify-between border-r border-gray-200">
        <div>
          <div className="px-5 py-4">
            <h2 className="text-base font-bold text-[#131316]/90">
              Dasboard
            </h2>
            <p className="text-[12px] text-gray-500">
              Empresarial
            </p>
          </div>

          <div className="flex flex-col gap-1 px-2.5">
            {([
              ["Empresa", "/icons/building.svg", false],
              ["Miembros", "/icons/member.svg", true],
              ["Campañas", "/icons/campaign.svg", false],
            ] as const).map(([label, icon, active], i) => (
              <div
                key={i}
                className={`flex h-[1.625rem] items-center gap-2 rounded-md px-2.5 text-[10px] cursor-pointer ${active
                  ? "bg-[#EEEFF0] shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]"
                  : "hover:bg-gray-200/50 hover:shadow-[0_0_0_0.82px_rgba(0,0,0,0.06),0_0_1.64px_rgba(0,0,0,0.08),0_0.82px_1.64px_rgba(0,0,0,0.06)]"
                  }`}
              >
                <img src={icon} className="h-4 w-4" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-4 text-[10px] text-gray-500">
          Opthana Tech
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col bg-white px-6 py-5">
          {/* Header */}
          <h2 className="text-[16px] suisse-600 text-gray-950/80">
            Miembros
          </h2>

          {/* Tabs */}
          <div className="mt-3 flex gap-4 border-b border-[rgba(0,0,0,0.06)] suisse">
            {[
              ["Miembros", 3, true],
              ["Invitaciones", 0, false],
              ["Solicitudes", 1, false],
            ].map(([label, count, active], i) => (
              <div
                key={i}
                className={`cursor-pointer flex items-center gap-1.5 pb-1 text-[11.5px] ${active
                  ? "border-b border-gray-950 text-gray-950/90"
                  : "text-gray-500"
                  }`}
              >
                {label}
                <span className="rounded bg-gray-50  text-[9px] shadow-[0_0_0_1px_#EEE] px-[6.5px] py-[1px]">
                  {count}
                </span>
              </div>
            ))}
          </div>

          {/* Automatic invitations (inline, como la imagen) */}
          <div className="mt-5 flex gap-2 border-b border-gray-200 pb-5 cursor-pointer">
            <div className="flex h-6.5 w-6.5 -mt-[3.2px]">
              <img src="/icons/plus.svg" />
            </div>
            <div>
              <span className="suisse cursor-pointer text-[11.5px] text-black/85">
                Gestionar dominios verificados y links
              </span>
              <p className="mt-0.5 text-[12px] text-gray-500">
                Invita automáticamente a usuarios con un dominio verificado a unirse a tu espacio de trabajo.
              </p>
            </div>
          </div>

          {/* Actions */}

          <div className="mt-4 flex items-center justify-between">
            <a
              className="cursor-default inline-flex items-center gap-[6px]"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0, 0, 0, 0.11)",
                color: "#3f3f46e7",
                fontSize: "11px",
                padding: "5px 10px",
                paddingRight: "90px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.02em",
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

              Buscar usuario
            </a>

          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-md border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-[150px_106px_100px_48px] bg-[#F7F7F8] px-4">
              {["Usuario", "Fecha", "Rol", ""].map((h, i) => (
                <div
                  key={i}
                  className="flex h-8 items-center text-[11px] text-gray-500"
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="grid grid-cols-[1fr_120px_100px_48px] items-center px-4 py-2.5 border-t border-gray-200 hover:bg-gray-50 transition"
              >
                {/* Usuario */}
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-full bg-gray-200 border border-gray-300/80 shrink-0" />
                  <div className="leading-tight">
                    <p className="text-[11.5px] text-gray-950/85">
                      Usuario
                      <span className="ml-1.5 rounded bg-gray-100 px-1 text-[9px] text-gray-500 border border-gray-300/80">
                        Miembro
                      </span>
                    </p>
                    <p className="mt-[1px] text-[10px] text-gray-400">
                      usuario@gmail.com
                    </p>
                  </div>
                </div>

                {/* Fecha */}
                <div className="text-[11.5px] text-gray-500 text-left pl-3.5">
                  8 Ene, 2026
                </div>

                {/* Rol */}
        
      <div
      className="text-[11.5px] text-gray-700 cursor-pointer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "2px",
    height: "20px",
    width: "62px",
    padding: "2px",
    borderRadius: "6px",
    boxShadow:
      "0 0 0 1px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.02), 0 2px 3px -1px rgba(0,0,0,0.08)",
    lineHeight: "14px",
    background: "#fff",
  }}
>
  <span className="text-[10.5px] text-gray-700/85 suisse-600" style={{padding: "0 4px"}}>Admin</span>

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{opacity: 0.6}}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.93046 5.30044C3.68212 5.53105 3.66774 5.91932 3.89835 6.16766L6.55744 9.0313C6.67354 9.15634 6.83647 9.22739 7.0071 9.22739C7.17774 9.22739 7.34067 9.15634 7.45677 9.0313L10.1159 6.16766C10.3465 5.91932 10.3321 5.53105 10.0837 5.30044C9.8354 5.06984 9.44713 5.08422 9.21653 5.33256L7.0071 7.71194L4.79768 5.33256C4.56708 5.08422 4.17881 5.06984 3.93046 5.30044Z"
      fill="currentColor"
    />
  </svg>
</div>

                {/* Acciones */}
                <div className="flex justify-end text-gray-400 cursor-pointer">
                  ⋯
                </div>
              </div>
            ))}


          </div>


          {/* Pagination */}
          <div className="mt-auto flex items-center justify-between pt-4 text-[11.5px] text-gray-500">
            <div className="flex items-center gap-2">
              Resultados por página:
       <div
        className="cursor-pointer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "2px",
    height: "20px",
    padding: "2px",
    borderRadius: "6px",
    boxShadow:
      "0 0 0 1px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.02), 0 2px 3px -1px rgba(0,0,0,0.08)",
    fontSize: "9px",
    lineHeight: "14px",
    color: "#2F3037",
    background: "#fff",
  }}
>
  <span className="suisse" style={{padding: "0 4px"}}>10</span>

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{opacity: 0.6}}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.93046 5.30044C3.68212 5.53105 3.66774 5.91932 3.89835 6.16766L6.55744 9.0313C6.67354 9.15634 6.83647 9.22739 7.0071 9.22739C7.17774 9.22739 7.34067 9.15634 7.45677 9.0313L10.1159 6.16766C10.3465 5.91932 10.3321 5.53105 10.0837 5.30044C9.8354 5.06984 9.44713 5.08422 9.21653 5.33256L7.0071 7.71194L4.79768 5.33256C4.56708 5.08422 4.17881 5.06984 3.93046 5.30044Z"
      fill="currentColor"
    />
  </svg>
</div>

            </div>
            <div className="flex items-center gap-2">
              ‹ <span>1</span> ›
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}