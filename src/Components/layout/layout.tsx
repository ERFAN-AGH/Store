import Navbar from "../Navbar/Navbar";
import type { PropsWithChildren } from "react";

type TLayout = PropsWithChildren;

function Layout({ children }: TLayout) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}

export default Layout;
