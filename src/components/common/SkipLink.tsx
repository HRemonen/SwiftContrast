interface SkipLinkProps {
  href: string
}

const SkipLink = ({ href }: SkipLinkProps) => (
  <a href={href} className='sr-only'>
    Skip to content
  </a>
)

export default SkipLink
