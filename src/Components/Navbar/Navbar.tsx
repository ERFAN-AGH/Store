import { Link } from "react-router-dom";
import Container from "../container/container";
function Navbar() {
  return (
    <>
      <div className=" flex justify-between border-b-0 items-center border-blue-300 bg-sky-300 shadow-blue-200 shadow-md h-14 ">
        <Container>
          <div className="flex justify-between flex-row-reverse">
            <ul className="flex flex-row-reverse gap-5">
              <li className=" hover:text-white hover:underline">
                <Link to="/">خانه</Link>
              </li>
              <li className=" hover:text-white hover:underline ">
                <Link to="/Store">فروشگاه</Link>
              </li>
            </ul>
            <div>سبد خرید</div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Navbar;
