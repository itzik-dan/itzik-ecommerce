import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductDetail = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  // Generating random ranking star number
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  // Once click on product this function will add item to card through redux store
  const addCartItem = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
    };

    // Sending the product as an action to the REDUX store
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  return (
    <div className="relative rounded-lg flex flex-col z-10 p-10 m-5 bg-white">
      <p className="absolute top-2 left-2 text-sm italic text-gray-600">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      <button
        onClick={addCartItem}
        className="mt-auto p-2 text-xs md:text-sm bg-black text-white rounded-sm cursor-pointer transition duration-300 transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
