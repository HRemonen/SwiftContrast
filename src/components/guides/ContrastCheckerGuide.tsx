import Accordion from '../common/Accordion'
import ContrastCheckerExplanation from './ContrastCheckerExplanation'
import ContrastCheckerUsage from './ContrastCheckerUsage'

const ContrastCheckerGuide = () => (
  <section
    id='accordion'
    className='mx-auto my-12 max-w-[600px] md:max-w-[1024px] lg:mt-24'
  >
    <Accordion id='accordion-group-1' title='How to use this tool' expanded>
      <ContrastCheckerUsage />
    </Accordion>

    <Accordion id='accordion-group-2' title='Explanation'>
      <ContrastCheckerExplanation />
    </Accordion>
  </section>
)

export default ContrastCheckerGuide
