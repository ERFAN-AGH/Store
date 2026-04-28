import type { PropsWithChildren } from "react";

type IContainer = PropsWithChildren;

function Container({ children }: IContainer) {
  return <div className="container mx-20">{children}</div>;
}
export default Container;
