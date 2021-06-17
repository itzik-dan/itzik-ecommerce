import Head from "next/head";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import Products from "../components/Products";

export default function Home({productList}) {
  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Itzik Ecommerce</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <ProductCarousel />

        {/* Product List */}
        <Products  productList={productList} />
      </main>
    </div>
  );
}

// Fetching products from API and server side render them
export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const productList = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return {
    props: {
      productList,
      // session,
    },
  };
}
