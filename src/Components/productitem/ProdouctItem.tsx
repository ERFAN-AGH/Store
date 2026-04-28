function ProductItem() {
  return (
    <>
      <div className=" shadow-blue-200 shadow border-2 rounded-md  hover:shadow-blue-500">
        <div>
          <img
            className="rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj0YyiD-7wGfcHVHDv7omRUggpXDlnyWo1g&s"
            alt=""
          />
        </div>
        <div className="flex flex-row-reverse justify-between mt-3 p-2">
          <h4>عنوان محصول</h4>
          <p>قیمت :$100</p>
        </div>
        <div className="mt-4 line-clamp-2 px-2 mb-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus temporibus, hic odit in sit error repellendus
            asperiores officiis quaerat quibusdam.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
