import Link from 'next/link'

export const LinkButton = ({ className = '', href = '', external = false, children }) => (
  <Link className={`${className} button`} href={href} external={external}>
    {children}
  </Link>
)
