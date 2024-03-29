import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5'

import { calculateRGBsContrast } from '@/_lib/colors'
import {
  calculateWCAGCompliance,
  generateComplianceColor,
} from '@/_lib/compliance'

import { Colors } from '@/types/Colors'

const ComplianceIcon = ({
  conformance,
  explanation,
}: {
  conformance: boolean
  explanation: string
}) =>
  conformance ? (
    <div className='my-2 flex items-center space-x-2 md:my-0'>
      <IoCheckmarkCircleOutline
        aria-hidden='true'
        focusable='false'
        size={24}
        className='text-green-500'
      />
      <p>Pass {explanation}</p>
    </div>
  ) : (
    <div className='flex items-center space-x-2'>
      <IoCloseCircleOutline
        aria-hidden='true'
        focusable='false'
        size={24}
        className='text-red-500'
      />
      <p>Fail {explanation}</p>
    </div>
  )

const ContrastChecker = ({ textColor, backgroundColor }: Colors) => {
  const contrast = calculateRGBsContrast(textColor, backgroundColor)
  const conformance = calculateWCAGCompliance(contrast)

  const minimumStyles = generateComplianceColor(
    conformance.AA.normal,
    conformance.AA.large
  )
  const enhancedStyles = generateComplianceColor(
    conformance.AAA.normal,
    conformance.AAA.large
  )
  const componentStyles = generateComplianceColor(
    conformance.AA.components,
    conformance.AA.components
  )

  return (
    <div className='mx-2 mt-8 md:mt-4 lg:mx-0 lg:pr-8'>
      <p className='text-md mb-2 whitespace-nowrap text-left font-semibold capitalize lg:mb-4 lg:text-lg'>
        Contrast Ratio: {contrast}:1
      </p>

      <div className='mb-4'>
        <div className='rounded-sm px-4 py-2' style={{ ...minimumStyles }}>
          <p className='text-left text-sm font-semibold capitalize md:text-base'>
            1.4.3 Contrast (Minimum) - Level AA
          </p>
        </div>
        <div className='my-2 justify-between px-4 text-sm md:flex'>
          <ComplianceIcon
            conformance={conformance.AA.normal}
            explanation='(Small Text 14pt/18.67px)'
          />
          <ComplianceIcon
            conformance={conformance.AA.large}
            explanation='(Large Text 18pt/24px)'
          />
        </div>
      </div>

      <div className='mb-4'>
        <div className='rounded-sm px-4 py-2' style={{ ...enhancedStyles }}>
          <p className='text-left text-sm font-semibold capitalize md:text-base'>
            1.4.6 Contrast (Enhanced) - Level AAA
          </p>
        </div>
        <div className='my-2 justify-between px-4 text-sm md:flex'>
          <ComplianceIcon
            conformance={conformance.AAA.normal}
            explanation='(Small Text 14pt/18.67px)'
          />
          <ComplianceIcon
            conformance={conformance.AAA.large}
            explanation='(Large Text 18pt/24px)'
          />
        </div>
      </div>

      <div>
        <div className='rounded-sm px-4 py-2' style={{ ...componentStyles }}>
          <p className='text-left text-sm font-semibold capitalize md:text-base'>
            1.4.11 Non-text Contrast - Level AA
          </p>
        </div>
        <div className='my-2 px-4 text-sm'>
          <ComplianceIcon
            conformance={conformance.AA.components}
            explanation='(UI Components and Graphical Objects)'
          />
        </div>
      </div>
    </div>
  )
}

export default ContrastChecker
