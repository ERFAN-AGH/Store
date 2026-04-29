import Button from "../Button/Button";
function CartItam() {
  return (
    <>
      <div className="flex flex-row-reverse text-right mt-5">
        <div className="">
          <img
            className="rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj0YyiD-7wGfcHVHDv7omRUggpXDlnyWo1g&s"
            alt=""
          />
        </div>
        <div className="mr-5">
          <h3 className="font-black">عنوان محصول</h3>
          <p className="opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam, unde.
          </p>
          <div className="flex mt-5 ">
            <Button Variant="denger" className="mr-5">
              Remove
            </Button>
            <Button Variant="praimrey">+</Button>
            <p>0</p>
            <Button Variant="praimrey">-</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItam;
