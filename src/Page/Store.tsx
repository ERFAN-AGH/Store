import ProductItem from "../Components/productitem/ProdouctItem";
import Container from "../Components/container/container";
import { Link } from "react-router-dom";
import { getProduct } from "../servers/server";
import { useEffect, useState } from "react";
import type { Root2 } from "../Types/TypeProduct";
function Store() {
  const [product, setProduct] = useState<Root2[]>([]);

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-right mt-5 text-2xl font-black text-cyan-400">
          جدید ترین محصولات
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-14">
          {product.map((item) => (
            <Link to={`/ProductPage/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
          {/* 
          <Link to={`/ProductPage/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${3}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${4}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${5}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${6}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${7}`}>
            <ProductItem />
          </Link>
          <Link to={`/ProductPage/${8}`}>
            <ProductItem />
          </Link> */}
        </div>
      </Container>
    </>
  );
}
export default Store;
