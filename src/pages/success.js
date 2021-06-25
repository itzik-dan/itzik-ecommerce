import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto flex flex-col p-10">
        <div className="flex flex-col items-center space-x-2 mb-5">
          <CheckCircleIcon className="text-green-600 h-48" />
          <h1 className="text-3xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <button
          onClick={() => router.push("/orders")}
          className="p-2 text-xs md:text-sm bg-black text-white rounded-sm cursor-pointer mt-8 transition duration-300 transform hover:scale-105"
        >
          Go to Orders
        </button>
      </main>
    </div>
  );
};

export default success;
