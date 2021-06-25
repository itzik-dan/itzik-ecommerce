import Head from "next/head";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import Products from "../components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/client";

export default function Home({productList}) {
  
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Itzik Ecommerce</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <ProductCarousel />

        {/* Product List */}
        <Products  productList={productList} />
      </main>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

// Fetching products from API and server side render them
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const productList = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return {
    props: {
      productList,
      session,
    },
  };
}
