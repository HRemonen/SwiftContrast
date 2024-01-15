import Accordion from "../common/Accordion";
import ContrastCheckerExplanation from "./ContrastCheckerExplanation";

const ContrastCheckerGuide = () => (
  <section
    id="accordion"
    className="my-8 p-12 lg:p-0 lg:mt-24 max-w-[1024px] mx-auto"
  >
    <Accordion id="1" title="How to use this tool" expanded>
      <h3>Hello</h3>
    </Accordion>

    <Accordion id="2" title="Explanation">
      <ContrastCheckerExplanation />
    </Accordion>
  </section>
);

export default ContrastCheckerGuide;
