import type { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

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
