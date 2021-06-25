import moment from "moment";
import Currency from "react-currency-formatter";

const OrderDetail = ({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
}) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div className="border-r-2 border-black p-2">
          <p className="font-bold text-xs">Order Date:</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>

        <div className="border-r-2 border-black p-2">
          <p className="text-xs font-bold">{`Amount: (${items.length} Items)`}</p>
          <p>
            <Currency quantity={amount} currency="GBP" /> - Delivery Fee{" "}
            <Currency quantity={amountShipping} currency="GBP" />
          </p>
        </div>

        <p className="absolute top-1 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER ID: {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
