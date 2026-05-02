import type { Root2 } from "./../../Types/TypeProduct";
type Props = Root2;

function ProductItem({ title, Price, image, description }: Props) {
  return (
    <>
      <div className=" shadow-blue-200 shadow border-2 rounded-md  hover:shadow-blue-500">
        <div>
          <img className="rounded-md" src={image} alt="" />
        </div>
        <div className="flex justify-between mt-3 p-2">
          <h4>{title}</h4>
          <p>{Price}</p>
        </div>
        <div className="mt-4 line-clamp-2 px-2 mb-2">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
