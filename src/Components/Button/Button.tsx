import type { ComponentProps } from "react";

type TVariant = "warning" | "praimrey" | "denger" | "sucsses";
type TButton = ComponentProps<"button"> & {
  Variant?: TVariant;
};

function Button({ children, Variant, ...rest }: TButton) {
  return (
    <button {...rest} style={{ ...changeVariant(Variant) }}>
      {children}
    </button>
  );
}

export default Button;

function changeVariant(Variant?: TVariant) {
  if (Variant === "warning") {
    return {
      backgroundColor: "yellow",
      color: "blue",
      padding: "5px 10px",
      border: "1px solid black",
    };
  }
  if (Variant === "praimrey") {
    return {
      backgroundColor: "blue",
      color: "white",
      padding: "5px 10px",
      border: "2px solid blue",
      borderRadius: "10px",
    };
  }
  if (Variant === "denger") {
    return {
      backgroundColor: "red",
      color: "white",
      padding: "5px 10px",
      border: "1px solid black",
      borderRadius: "5px",
    };
  }
  if (Variant === "sucsses") {
    return {
      backgroundColor: "#43cf43",
      color: "white",
      padding: "5px 10px",
      border: "2px solid green",
      borderRadius: "5px",
    };
  }
}
