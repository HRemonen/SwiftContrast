import Accordion from "../common/Accordion";
import ContrastCheckerExplanation from "./ContrastCheckerExplanation";
import ContrastCheckerUsage from "./ContrastCheckerUsage";

const ContrastCheckerGuide = () => (
  <section
    id="accordion"
    className="my-8 p-12 lg:p-0 lg:mt-24 max-w-[1024px] mx-auto"
  >
    <Accordion id="1" title="How to use this tool" expanded>
      <ContrastCheckerUsage />
    </Accordion>

    <Accordion id="2" title="Explanation">
      <ContrastCheckerExplanation />
    </Accordion>
  </section>
);

export default ContrastCheckerGuide;
