import Container from "../Components/container/container";
import Button from "../Components/Button/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPtoduct } from "../servers/server";
import { Root2 } from "./../Types/TypeProduct";

function ProductPage() {
  const promis = useParams<{ id: string }>();
  const [product, setProduct] = useState<Root2>();
  useEffect(() => {
    getPtoduct(promis.id as string).then((res) => {
      setProduct(res);
    });
  }, [promis.id]);
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
                onClick={() => alert("به سبد خرید اضافه شد")}
                Variant="sucsses"
              >
                اضافه کردن
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
