import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { getPtoduct } from "../../servers/server";
import type { Root2 } from "../../Types/TypeProduct";
import { useShopCaretContext } from "../context/ShopCaretContext";

type cartItemsType = {
  id: number;
  qty: number;
};
function CartItam({ id, qty }: cartItemsType) {
  const [product, setProduct] = useState<Root2>();
  useEffect(() => {
    getPtoduct(id).then((data) => setProduct(data));
  }, [id]);

  const {
    handleDecreaseProductQty,
    handleRemvoeProductItem,
    handleIncreaseProductQty,
  } = useShopCaretContext();
  return (
    <>
      <div className="flex flex-row-reverse text-right mt-5">
        <div className="">
          {" "}
          <img className="rounded-md" src={product?.image} alt="" />
        </div>
        <div className="mr-5">
          <h3 className="font-black">{product?.title} </h3>
          <p className="opacity-70">{product?.description}</p>
          <div className="flex mt-5 ">
            <Button
              Variant="denger"
              className="mr-5"
              onClick={() => handleRemvoeProductItem(id)}
            >
              Remove
            </Button>
            <Button
              Variant="praimrey"
              onClick={() => handleIncreaseProductQty(id)}
            >
              +
            </Button>
            <p>{qty}</p>
            <Button
              Variant="praimrey"
              onClick={() => handleDecreaseProductQty(id)}
            >
              -
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItam;
