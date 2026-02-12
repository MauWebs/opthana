import PreviewServicesMobile from "./PreviewServicesMobile";
import PreviewServicesDesktop from "./PreviewServicesDesktop";

export default function PreviewServices() {
  return (
    <section>
      <div className="block lg:hidden w-full">
        <PreviewServicesMobile />
      </div>

      <div className="hidden lg:block w-full">
        <PreviewServicesDesktop />
      </div>
    </section>
  );
}
