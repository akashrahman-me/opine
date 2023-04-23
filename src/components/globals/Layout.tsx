import React, {ReactNode} from "react";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({children}: LayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
