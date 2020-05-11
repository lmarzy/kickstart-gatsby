import React, { FunctionComponent } from 'react';

interface HeaderProps {
  siteName: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ siteName }) => (
  <header>
    <h1>{siteName}</h1>
  </header>
);
