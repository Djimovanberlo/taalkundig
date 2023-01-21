export const H1 = ({ className = '', children }) => {
  return <h1 className={`h1 ${className}`}>{children}</h1>
}

export const H2 = ({ className = '', children }) => {
  return <h2 className={`h2 ${className}`}>{children}</h2>
}

export const H3 = ({ className = '', children }) => {
  return <h3 className={`h3 ${className}`}>{children}</h3>
}

export const H4 = ({ className = '', children }) => {
  return <h4 className={`h4 ${className}`}>{children}</h4>
}

export const P = ({ className = '', children }) => {
  return <p className={`p ${className}`}>{children}</p>
}

export const B = ({ className = '', children }) => {
  return <b className={`b ${className}`}>{children}</b>
}

export const I = ({ className = '', children }) => {
  return <i className={`i ${className}`}>{children}</i>
}
