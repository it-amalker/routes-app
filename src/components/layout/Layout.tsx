import React, { ReactNode } from 'react';

import Main from './Layout.styles';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => <Main>{children}</Main>;

export default Layout;
