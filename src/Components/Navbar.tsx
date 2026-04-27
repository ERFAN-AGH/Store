import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between border-b-0 items-center border-blue-300 shadow-blue-200 shadow-md h-14 ">
        <ul className="flex">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/Store">فروشگاه</Link>
          </li>
        </ul>
        <div>سبد خرید</div>
      </div>
    </>
  );
}
export default Navbar;
