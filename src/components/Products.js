import ProductDetail from "./ProductDetail";

const Products = ({ productList }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {productList.map(({ id, title, price, description, category, image }) => (
        <ProductDetail
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
};

export default Products;
