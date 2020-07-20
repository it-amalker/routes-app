import React, { ReactNode } from 'react';

import { Main, Title } from './Layout.styles';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Main>
    <Title>Routes App</Title>
    {children}
  </Main>
);

export default Layout;
