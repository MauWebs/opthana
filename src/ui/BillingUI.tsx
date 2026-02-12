export default function BillingUI({ shadowBorder = true, border = false, removeMarginBottom = false, showShine = true }: { shadowBorder?: boolean; border?: boolean; removeMarginBottom?: boolean; showShine?: boolean }) {
  return (
     <div className={`relative overflow-hidden flex flex-1 flex-row rounded-lg h-[20rem] bg-[#F7F7F8] ${!removeMarginBottom ? "mb-[16px]" : ""} ${border ? "border border-gray-200" : ""}`} style={{
      boxShadow: shadowBorder ?
        "0 0 0 1px rgba(0,0,0,0.06), 0 0.82px 1.64px 0 rgba(0,0,0,0.06), 0 0 1.64px rgba(0,0,0,0.08), 0 16px 36px -6px rgba(0,0,0,0.12), 0 8px 16px -3px rgba(0,0,0,0.01)" : undefined,
    }}>
      {/* Shine */}
      {showShine && (
        <div
          className="pointer-events-none absolute -top-1/4 left-0 z-10 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl"
          style={{ animation: "shine 9s ease infinite" }}
        />
      )}

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
        <div className="flex items-start gap-5 py-3">
          <p className="flex-1 text-[12px] text-[#131316]/90 mt-2.5">Suscripción</p>
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
        <div className="flex items-start gap-5 py-3">
          <p className="flex-1 text-[12px] text-[#131316]/90 mt-2">Métodos de pago</p>
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
  )
}