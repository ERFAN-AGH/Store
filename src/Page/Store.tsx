import ProductItem from "../Components/productitem/ProdouctItem";
import Container from "../Components/container/container";
import { Link } from "react-router-dom";
function Store() {
  return (
    <>
      <Container>
        <h1 className="text-right mt-5 text-2xl font-black text-cyan-400">
          جدید ترین محصولات
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-14">
          <Link to={`/ProductPage/${1}`}>
            <ProductItem />
          </Link>
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
          </Link>
        </div>
      </Container>
    </>
  );
}
export default Store;
