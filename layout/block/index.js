const Block = ({ className = '', children }) => {
  return <div className={`block ${className}`}>{children}</div>
}

export default Block
