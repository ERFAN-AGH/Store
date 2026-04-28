import type { PropsWithChildren } from "react";

type TContainer = PropsWithChildren;

function Container({ children }: TContainer) {
  return <div className="container mx-auto">{children}</div>;
}
export default Container;
