import CartItam from "../Components/CartItem/CartIte";
import Container from "../Components/container/container";
import Button from "../Components/Button/Button";

import { useShopCaretContext } from "../Components/context/ShopCaretContext";

function Cart() {
  const { cartItems } = useShopCaretContext();
  return (
    <Container>
      <div className="mb-32">
        <div>
          <CartItam />
          <CartItam />
          <CartItam />
        </div>
        <div className="mt-7 bg-slate-300 text-right p-4 rounded-md">
          <p>قیمت کل:$1000</p>
          <p> تخفیف:$100</p>
          <p> مبلغ پرداخت:$900</p>
        </div>
        <div>
          <Button Variant="sucsses" className="mt-5">
            ثبت سفارش{" "}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
