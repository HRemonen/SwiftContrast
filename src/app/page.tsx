import ColorContrast from '@/components/contrast/ColorContrast'
import ContrastCheckerGuide from '@/components/guides/ContrastCheckerGuide'

const Home = () => (
  <section id='home'>
    <title>Swift Contrast - WCAG Contrast Checker</title>
    <h1 className='block whitespace-nowrap text-center text-xl font-semibold lg:text-3xl'>
      Contrast Tool
    </h1>

    <ColorContrast />

    <ContrastCheckerGuide />
  </section>
)

export default Home
