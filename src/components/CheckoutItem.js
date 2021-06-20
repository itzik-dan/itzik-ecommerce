import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Image from "next/image";

const CheckoutItem = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
    };

    // Sending the product as an action to the REDUX store... the bakset slice
    dispatch(addToCart(product));
  };

  const removeItem = () => {
    // Remove item from redux
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="grid grid-cols-4">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        <div className="flex space-x-2 my-2">
          <button
            className="mt-auto p-2 text-xs md:text-sm bg-black text-white rounded-sm cursor-pointer"
            onClick={addItemToCart}
          >
            Add to Cart
          </button>
          <button
            className="mt-auto p-2 text-xs md:text-sm bg-black text-white rounded-sm cursor-pointer"
            onClick={removeItem}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
