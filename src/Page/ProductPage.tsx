import Container from "../Components/container/container";
import Button from "../Components/Button/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPtoduct } from "../servers/server";
import type { Root2 } from "./../Types/TypeProduct.ts";
import { useShopCaretContext } from "../Components/context/ShopCaretContext.tsx";

function ProductPage() {
  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
  } = useShopCaretContext();

  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Root2>();
  useEffect(() => {
    getPtoduct(params.id as string).then((res) => {
      setProduct(res);
    });
  }, [params.id]);
  console.log(cartItems);

  return (
    <>
      <Container>
        <div className="grid grid-cols-12 mb-52">
          <div className="col-span-3  mt-12 ">
            <img
              className="rounded-lg hover:shadow-blue-700 shadow-2xl"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <div className="col-span-9 mt-12 text-right">
            <h3>{product?.title}</h3>
            <p className="mt-5">{product?.description}</p>
            <p className="mt-5">{product?.Price}</p>
            <div className="text-center mt-8">
              <Button
                Variant="sucsses"
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
              >
                اضافه کردن
              </Button>
              {getProductQty(parseInt(params.id as string))}
              <Button
                Variant="denger"
                onClick={() =>
                  handleDecreaseProductQty(parseInt(params.id as string))
                }
              >
                کم کردن
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
