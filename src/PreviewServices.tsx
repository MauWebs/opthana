import PreviewServicesMobile from "./PreviewServicesMobile";
import PreviewServicesDesktop from "./PreviewServicesDesktop";

export default function PreviewServices() {
  return (
    <section id="services">
      <div className="block lg:hidden w-full">
        <PreviewServicesMobile />
      </div>

      <div className="hidden lg:block w-full">
        <PreviewServicesDesktop />
      </div>
    </section>
  );
}
