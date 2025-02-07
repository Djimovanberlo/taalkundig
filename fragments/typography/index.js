export const H1 = ({ className = "", children }) => {
  return <h1 className={`h1 ${className}`}>{children}</h1>;
};

export const H2 = ({ className = "", children }) => {
  return <h2 className={`h2 ${className}`}>{children}</h2>;
};

export const H3 = ({ className = "", children }) => {
  return <h3 className={`h3 ${className}`}>{children}</h3>;
};

export const H4 = ({ className = "", children }) => {
  return <h4 className={`h4 ${className}`}>{children}</h4>;
};

export const H5 = ({ className = "", children }) => {
  return <h5 className={`h5 ${className}`}>{children}</h5>;
};

export const H6 = ({ className = "", children }) => {
  return <h6 className={`h6 ${className}`}>{children}</h6>;
};

export const P = ({ className = "", children, withMarginBottom = false }) => {
  return (
    <p className={`p ${className}`} data-margin-bottom={withMarginBottom}>
      {children}
    </p>
  );
};

export const B = ({ className = "", children }) => {
  return <b className={`b ${className}`}>{children}</b>;
};

export const I = ({ className = "", children }) => {
  return <i className={`i ${className}`}>{children}</i>;
};

export const Li = ({ className = "", children }) => {
  return <li className={`li ${className}`}>{children}</li>;
};
