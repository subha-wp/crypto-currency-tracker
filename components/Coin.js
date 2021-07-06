import Currency from "react-currency-formatter";

function Coin({ name, symbol, price, volume, change_in_24h }) {
  return (
    <div className="flex space-x-6 text-xl bg-gray-600 p-4 rounded-lg text-white">
      <h3 className="w-44 font-medium">{name}</h3>
      <i className="w-36 font-medium">{symbol}</i>
      <div className="w-36 font-medium">
        <Currency quantity={price} currency="USD" />
      </div>
      <div className="w-48 font-medium">
        <Currency quantity={volume} currency="USD" />
      </div>
      <p className="w-36 font-medium">
        {change_in_24h.toFixed(2)} <span>%</span>{" "}
      </p>
    </div>
  );
}

export default Coin;
