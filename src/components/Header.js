import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/solid";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-black p-1 flex-grow py-2">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0 text-white cursor-pointer hover:underline"
          onClick={() => router.push("/")}
        >
          <ShoppingBagIcon className="h-12" />
          <h1 className="font-extrabold md:text-lg pr-2"> Itzik's Shop</h1>
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
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer hover:underline md:text-lg font-extrabold"
          >
            {session ? (
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image
                  onClick={signOut}
                  className="rounded-full"
                  src={session.user.image}
                  width={40}
                  height={40}
                  layout="fixed"
                />
                <p className="font-extrabold md:text-sm">
                  {session.user.name.split(" ")[0]}{" "}
                  <span>(Logout)</span>
                </p>
              </div>
            ) : (
              <div className="cursor-pointer hover:underline flex items-center" >
                <LoginIcon className="h-10" />
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                  Login
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => router.push("/orders")}
            className="cursor-pointer flex items-center hover:underline"
          >
            <CreditCardIcon className="h-10" />
            <p className="font-extrabold md:text-sm">Order History</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative cursor-pointer hover:underline flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-50 text-center rounded-full text-black font-bold">
              {items.length}
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
