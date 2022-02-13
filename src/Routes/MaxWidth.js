import React from "react";

const MaxWidth = ({ children }) => {
  return (
    <div
    style={{ maxWidth: 'var(--max)', margin: 'auto',height: '100%'}}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
