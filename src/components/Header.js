import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/solid";

// import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  //   const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-black p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 text-white cursor-pointer">
          <ShoppingBagIcon className="h-12" />
          <h1 onClick={() => router.push("/")} className="p-2">
            {" "}
            Itzik's Shop
          </h1>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-600 hover:bg-yellow-700 flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            placeholder="Search Products..."
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer hover:underline md:text-lg">
            <p>Hello Itzik</p>
          </div>
          <div
            onClick={() => router.push("/orders")}
            className="cursor-pointer flex items-center hover:underline md:text-lg"
          >
            <CreditCardIcon className="h-10" />
            <p>Order History</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative cursor-pointer hover:underline flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-50 text-center rounded-full text-black font-bold">
              5
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
