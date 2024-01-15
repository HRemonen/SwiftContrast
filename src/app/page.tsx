import ColorContrast from "@/components/contrast/ColorContrast";
import ContrastExplanation from "@/components/guides/ContrastCheckerExplanation";
import ContrastCheckerGuide from "@/components/guides/ContrastCheckerGuide";

export default function Home() {
  return (
    <section id="home">
      <h1 className="block whitespace-nowrap text-xl lg:text-3xl font-semibold text-center">
        Swift Contrast
      </h1>

      <ColorContrast />

      <ContrastCheckerGuide />
    </section>
  );
}
