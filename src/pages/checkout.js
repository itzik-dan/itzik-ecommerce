import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import Header from "../components/Header";
import { selectItems, selectTotalAmount } from "../slices/cartSlice";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { ToastContainer } from "react-toastify";

const Checkout = () => {
  const items = useSelector(selectItems);
  const [session] = useSession();
  // calculate total sum of the cart
  const totalAmount = useSelector(selectTotalAmount);

  const createCheckoutSession = async (event) => {
    console.log("object");
  };

  return (
    <div className="bg-gray-400">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 flex items-center">
              <ShoppingBagIcon className="h-12" />
              {items.length === 0 ? (
                <p>
                  Your Cart is empty!{" "}
                  <Link href="/">
                    <a className="underline">Go Back</a>
                  </Link>
                </p>
              ) : (
                "Your Cart"
              )}
            </h1>

            {items.map((item, i) => (
              <CheckoutItem
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Right */}

        {items.length > 0 && (
          <div className="flex flex-col p-10 ">
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">
                <Currency quantity={totalAmount} currency="GBP" />
              </span>
            </h2>
            <button
              role="link"
              onClick={createCheckoutSession}
              className={`p-2 text-xs md:text-sm bg-black text-white rounded-sm cursor-pointer mt-2 ${
                !session && "bg-gray-100 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!session}
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </div>
        )}
      </main>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Checkout;
