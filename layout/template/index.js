const Template = ({ className = '', children }) => {
  return <div className={`template ${className}`}>{children}</div>
}

export default Template
