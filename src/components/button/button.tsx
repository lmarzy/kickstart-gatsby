import React, { FunctionComponent } from 'react';

import './buton.scss';

interface ButtonProps {
  type: string;
  width?: 'full';
}

export const Button: FunctionComponent<ButtonProps> = ({ type, width, children }) => {
  let buttonStyles = `c-button c-button--${type}`;

  if (width) {
    buttonStyles += ` c-button--${width}`;
  }

  return (
    <button type="button" className={buttonStyles}>
      {children}
    </button>
  );
};
