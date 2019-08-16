import React, { FunctionComponent } from 'react';

import './buton.scss';

interface ButtonProps {
  type: 'button' | 'submit';
  style: string;
  width?: 'full';
}

export const Button: FunctionComponent<ButtonProps> = ({ type, style, width, children }) => {
  let buttonStyles = `c-button c-button--${style}`;

  if (width) {
    buttonStyles += ` c-button--${width}`;
  }

  return (
    <button type={type} className={buttonStyles}>
      {children}
    </button>
  );
};
