import ProductItem from "../Components/productitem/ProdouctItem";
import Container from "../Components/container/container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../servers/server";
import type { Root2 } from "../Types/TypeProduct";

function Store() {
  const [product, setProduct] = useState<Root2[]>([]);
  useEffect(() => {
    getProducts().then((res) => setProduct(res));
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-right mt-5 text-2xl font-black text-cyan-400">
          جدید ترین محصولات
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-14">
          {product.map((item: Root2) => {
            return (
              <Link to={`/ProductPage/${item.id}`} key={item.id}>
                <ProductItem {...item} />
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}
export default Store;
