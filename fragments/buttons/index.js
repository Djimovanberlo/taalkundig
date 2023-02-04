const { default: Link } = require('next/link')

export const LinkButton = ({ className = '', children, href }) => (
  <Link className={`${className} button`} href={href}>
    {children}
  </Link>
)
