import { useShopCaretContext } from "../Components/context/ShopCaretContext";

function PrivateRout() {
  const {login}=useShopCaretContext()
  return <>

    {login ?<output/> : </>}
  
  </>;
}
export default PrivateRout;
