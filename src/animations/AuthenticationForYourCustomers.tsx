import { useState, useEffect, useRef } from "react";

export function AuthenticationForYourCustomers() {
  
  type CursorStep = "first" | "second" | "third" | "fourth";

  const typingIntervalRef = useRef<number | null>(null);
  const sequenceIntervalRef = useRef<number | null>(null);
  const initialTimeoutRef = useRef<number | null>(null);

  const [step, setStep] = useState<CursorStep>("first");
  const [clicking, setClicking] = useState(false);
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const EMAIL = "opthanatech@gmail.com";
  const PASSWORD_LENGTH = 20;
  const PASSWORD_CHAR = "●";

  const startTyping = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    setTypedEmail("");
    let index = 0;

    typingIntervalRef.current = window.setInterval(() => {
      index++;
      setTypedEmail(EMAIL.slice(0, index));

      if (index === EMAIL.length) {
        clearInterval(typingIntervalRef.current!);
        typingIntervalRef.current = null;
      }
    }, 90);
  };

  const startPasswordTyping = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    setTypedPassword("");
    let index = 0;

    typingIntervalRef.current = window.setInterval(() => {
      index++;
      setTypedPassword(PASSWORD_CHAR.repeat(index));

      if (index === PASSWORD_LENGTH) {
        clearInterval(typingIntervalRef.current!);
        typingIntervalRef.current = null;
      }
    }, 90);
  };

  useEffect(() => {
    const runSequence = () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }

      setInputFocused(false);
      setInputClicked(false);

      setStep("first");
      setClicking(true);

      setTimeout(() => setClicking(false), 350);
      setTimeout(() => setStep("second"), 900);

      setTimeout(() => {
        setInputFocused(true);
        setInputClicked(true);
      }, 2900);

      setTimeout(() => setInputClicked(false), 3200);
      setTimeout(startTyping, 3400);

      setTimeout(() => {
        setInputFocused(false);
        setStep("third");
      }, 5400);

      setTimeout(() => {
        setInputFocused(true);
        setInputClicked(true);
      }, 5800);

      setTimeout(() => setInputClicked(false), 6100);
      setTimeout(startPasswordTyping, 6200);

      setTimeout(() => {
        setInputFocused(false);
        setStep("fourth");
      }, 8200);

      setTimeout(() => {
        setClicking(true);
      }, 8700);

      setTimeout(() => setClicking(false), 8900);

      setTimeout(() => {
        setStep("first");
        setTypedEmail("");
        setTypedPassword("");
      }, 10000);
    };

    initialTimeoutRef.current = window.setTimeout(() => {
      runSequence();
      sequenceIntervalRef.current = window.setInterval(runSequence, 11000);
    }, 3000);

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (sequenceIntervalRef.current) clearInterval(sequenceIntervalRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const cursorPosition = {
    first: "translate3d(50px, -130px, 0px)",
    second: "translate3d(-10px, 17px, 0px)",
    third: "translate3d(30px, 102px, 0px)",
    fourth: "translate3d(40px, 155px, 0px)",
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
    >
      <div
        className="relative origin-top-left"
        style={{
          transform: "scale(1)",
          width: 360,
        }}
      >
        <div className="relative isolate bg-white rounded-lg">
          {/* Glow */}
          <div
            className="absolute inset-0 -z-10 blur-xl saturate-200 transform-gpu"
            style={{
              background:
                "radial-gradient(189.26% 126.1% at 49.27% 0%, rgba(108,71,255,0) 10%, rgba(255,249,99,.15) 34%, rgba(98,72,246,.24) 67.53%, rgba(98,72,246,0) 95.38%)",
            }}
          />

          {/* Card */}
          <div
            className="flex flex-col rounded-lg bg-[#F7F7F8] relative overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgb(0 0 0 / 0.06), 0 5px 15px rgb(0 0 0 / 0.08), 0 15px 35px -5px rgb(47 48 55 / 0.2)",
            }}
          >

            {/* Shine */}
            <div
              className="absolute -top-1/4 left-0 h-[150%] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.8)] to-transparent blur-xl z-100"
              style={{
                animation: "shine 8s infinite",
                pointerEvents: "none",
              }}
            />

            <div className="flex flex-col gap-6 bg-white p-8 rounded-lg" style={{
              boxShadow: "0 0 0px 0.5px #D9D9DE, 0 1px 2px 0 rgba(0,0,0,0.06), 0 0 2px 0 rgba(0,0,0,0.08)"
            }}>
              {/* Header */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-[rgb(47,48,55)] text-white text-[24px]"
                  style={{
                    boxShadow:
                      "0 0 0 1px #151518, inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  ✦
                </div>

                <div className="flex flex-col gap-[.25rem]">
                  <h1 className="text-[17px] font-bold leading-6">
                    Registrar una cuenta
                  </h1>
                  <p className="text-xs text-gray-500">
                    ¡Bienvenido! Por favor completa los detalles.
                  </p>
                </div>
              </div>

              {/* OAuth */}
              <div className="flex flex-col gap-2">
                <OAuthButton label="Continuar con Google" provider="google" active={clicking && step === "first"} />
                <OAuthButton label="Continuar con GitHub" provider="github" />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <hr className="w-full border-[#eeeef0]" />
                <span className="text-xs text-[#747686]">o</span>
                <hr className="w-full border-[#eeeef0]" />
              </div>

              {/* Inputs */}
              <Input
                label="Correo electrónico"
                placeholder="Ingresa tu correo"
                value={typedEmail}
                active={typedEmail.length > 0}
                focused={inputFocused && step === "second"}
              />
              <Input
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                value={typedPassword}
                focused={inputFocused && step === "third"}
              />

              {/* Button */}
              <button
                className="group relative flex h-8 w-full items-center justify-center overflow-hidden rounded-md text-[13px] text-white cursor-default transition-all duration-150 hover:bg-[#3a3b42]"
                style={{
                  boxShadow:
                    "0 0 0 1px #2e2e35, inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  backgroundColor: "rgb(47,48,55)",
                  transform: clicking && step === "fourth" ? "translateY(2px)" : "translateY(0)",
                }}
              >
                Continuar


                <svg
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className="ml-2 h-2.5 w-2.5 flex-none opacity-60 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                  />
                </svg>

              </button>

            </div>


            <div className="inline-flex h-[calc(50/16*1rem)] w-full items-center justify-center gap-1 self-stretch border-b px-8 py-4 border-[#d9d9de]">
              <div className="justify-start text-center text-[calc(13/16*1rem)] font-normal leading-none text-gray-500">Ya estas registrado?</div>
              <div className="justify-start text-center text-xs leading-none text-gray-600 suisse-600">Iniciar sesión</div>
            </div>

            <div className="flex h-12 items-center justify-center gap-1 text-[12px] text-gray-500">
              <span>Desarrollado por</span>
              <span className="text-gray-600 suisse-600">Opthana Tech</span>
            </div>
          </div>

        </div>

        {/* Cursor */}
        <div
          className="absolute left-1/2 top-1/2 w-full h-full pointer-events-none will-change-transform transition-transform duration-500 ease-in-out"
          style={{
            transform: cursorPosition[step],
          }}
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${clicking || inputClicked ? 0.85 : 1})`,
            }}
          >
            <g filter="url(#filter0_d_10381_11456)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3574 15.4386C9.9043 16.1975 8.76162 16.0386 8.53286 15.1848L5.62591 4.33594C5.39518 3.47483 6.32137 2.76502 7.09288 3.2117L17.1175 9.01555C17.888 9.46165 17.7353 10.6165 16.8753 10.8469L12.5909 11.9949C12.4689 12.0276 12.362 12.1016 12.2884 12.2043L10.3574 15.4386Z"
                fill="#232327"
              />
              <path
                d="M5.14285 4.46499C4.7971 3.17348 6.18595 2.10954 7.34311 2.77949L17.3683 8.58271C18.5239 9.25192 18.2944 10.9844 17.0045 11.3301L12.7201 12.4781C12.7104 12.4807 12.7023 12.4866 12.6962 12.4946L10.7865 15.6946C10.1069 16.8328 8.39344 16.5949 8.05002 15.3147L5.14285 4.46499Z"
                stroke="#dbdbdb"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_10381_11456"
                x="0.585938"
                y="0.0708065"
                width="22.0312"
                height="22.8558"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_10381_11456"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_10381_11456"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

      </div>

      {/* Local reset */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        @keyframes shine {
          0% {
            transform: skewX(-45deg) translateX(-200%);
          }
          50% {
            transform: skewX(-45deg) translateX(500%);
          }
          100% {
            transform: skewX(-45deg) translateX(500%);
          }
        }
      `}</style>
    </div>
  );

}

function Input({
  label,
  placeholder,
  value,
  focused,
}: {
  label: string;
  placeholder: string;
  value?: string;
  active?: boolean;
  focused?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-regular">{label}</label>

      <div
        className={`flex h-8 items-center rounded-md px-3 text-[13px] transition-colors duration-200
  ${focused ? "bg-gray-100" : "bg-white"}`}
        style={{
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.08),0 1px 0 0 rgba(0,0,0,0.02),0 2px 3px -1px rgba(0,0,0,0.08)",
        }}
      >
        {value && value.length > 0 ? (
          <span className="text-gray-900">{value}</span>
        ) : (
          <span className="text-[#5E5F6E]">{placeholder}</span>
        )}
      </div>


    </div>
  );
}

function OAuthButton({
  label,
  provider,
  active,
}: {
  label: string;
  provider: "google" | "github";
  active?: boolean;
}) {
  return (
    <div
      className="relative flex h-8 items-center justify-center gap-2 rounded-md bg-white text-[13px] text-[#000]/60 [text-shadow:0_0_0.01px_currentColor] transition-all duration-150"
      style={{
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.08),0 1px 0 0 rgba(0,0,0,0.02),0 2px 3px -1px rgba(0,0,0,0.08)",
        backgroundColor: active ? "rgb(247, 247, 248)" : "white",
        transform: active ? "scale(0.98)" : "scale(1)",
      }}
    >
      {provider === "google" && (
        <div
          className="
    absolute -right-1.5 -top-2
    flex h-[1.125rem] items-center justify-center
    rounded-md bg-gray-50 px-1.5
    text-[11px] leading-4 text-[#747686]
    shadow-[0_0_0_1px_#00000017,0_2px_0_-1px_rgba(0,0,0,0.04)]
    [contain:paint]

    before:absolute before:inset-0 before:-z-10
    before:bg-gradient-to-b before:from-white
  "
        >
          Uso reciente
        </div>
      )}

      {provider === "google" && (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5279 6.62905H14.9641V6.6H8.66406V9.4H12.6201C12.043 11.03 10.4921 12.2 8.66406 12.2C6.34461 12.2 4.46406 10.3194 4.46406 8C4.46406 5.68055 6.34461 3.8 8.66406 3.8C9.73471 3.8 10.7088 4.2039 11.4504 4.86365L13.4304 2.8837C12.1802 1.71855 10.5079 1 8.66406 1C4.79831 1 1.66406 4.13425 1.66406 8C1.66406 11.8658 4.79831 15 8.66406 15C12.5298 15 15.6641 11.8658 15.6641 8C15.6641 7.53065 15.6158 7.0725 15.5279 6.62905Z" fill="#FFC107"></path><path d="M2.46875 4.74185L4.7686 6.4285C5.3909 4.8878 6.898 3.8 8.66165 3.8C9.7323 3.8 10.7064 4.2039 11.448 4.86365L13.428 2.8837C12.1778 1.71855 10.5055 1 8.66165 1C5.97295 1 3.64125 2.51795 2.46875 4.74185Z" fill="#FF3D00"></path><path d="M8.66144 15C10.4695 15 12.1124 14.3081 13.3546 13.1828L11.1881 11.3495C10.4853 11.8819 9.61169 12.2 8.66144 12.2C6.84074 12.2 5.29479 11.0391 4.71239 9.41895L2.42969 11.1777C3.58819 13.4446 5.94089 15 8.66144 15Z" fill="#4CAF50"></path><path d="M15.5279 6.62915H14.9641V6.6001H8.66406V9.4001H12.6201C12.3429 10.183 11.8393 10.8582 11.1897 11.3499L11.1907 11.3492L13.3572 13.1825C13.2039 13.3218 15.6641 11.5001 15.6641 8.0001C15.6641 7.53075 15.6158 7.0726 15.5279 6.62915Z" fill="#1976D2"></path></svg>
      )}

      {provider === "github" && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00579 1.11743C4.13177 1.11743 1 4.27229 1 8.17528C1 11.2951 3.00663 13.936 5.79036 14.8707C6.1384 14.941 6.26589 14.7189 6.26589 14.532C6.26589 14.3684 6.25442 13.8076 6.25442 13.2232C4.30557 13.6439 3.89974 12.3819 3.89974 12.3819C3.58655 11.5639 3.1225 11.3537 3.1225 11.3537C2.48465 10.9213 3.16896 10.9213 3.16896 10.9213C3.87651 10.968 4.24778 11.6458 4.24778 11.6458C4.87402 12.7207 5.88315 12.417 6.28912 12.23C6.34705 11.7743 6.53276 11.4588 6.72994 11.2835C5.1756 11.1199 3.54023 10.5123 3.54023 7.80129C3.54023 7.03007 3.81844 6.39909 4.25926 5.90837C4.1897 5.73313 3.94606 5.00852 4.32895 4.03869C4.32895 4.03869 4.92048 3.85169 6.25427 4.76316C6.82531 4.60866 7.41422 4.53007 8.00579 4.52941C8.59733 4.52941 9.20034 4.61129 9.75717 4.76316C11.0911 3.85169 11.6826 4.03869 11.6826 4.03869C12.0655 5.00852 11.8217 5.73313 11.7522 5.90837C12.2046 6.39909 12.4714 7.03007 12.4714 7.80129C12.4714 10.5123 10.836 11.1081 9.27003 11.2835C9.52529 11.5055 9.74555 11.9261 9.74555 12.5922C9.74555 13.5387 9.73408 14.2983 9.73408 14.5319C9.73408 14.7189 9.86171 14.941 10.2096 14.8709C12.9933 13.9359 15 11.2951 15 8.17528C15.0114 4.27229 11.8682 1.11743 8.00579 1.11743Z" fill="black"></path></svg>
      )}

      <span>{label}</span>

    </div>
  );
}