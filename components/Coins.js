// import Coin from "../components/Coin";
import Currency from "react-currency-formatter";

function Coins({ coinsData }) {
  return (
    <div className="flex justify-center ">
      <table className="table-auto w-11/12 font-medium">
        <thead className="text-left ">
          <tr className="space-x-4">
            <th className=" px-10 py-4">Name</th>
            <th className="">Price</th>
            <th className="">24h%</th>
            <th className="">7d%</th>
            <th className="">Market Cap</th>
            <th className="">
              Volume <sup>(24)</sup>{" "}
            </th>
            <th className="">Circulating Supply</th>
          </tr>
        </thead>
        <tbody className="">
          {coinsData.map((coin) => {
            const price = coin.quote.USD.price;
            const volume_24h = coin.quote.USD.volume_24h;
            const percentage_24h = coin.quote.USD.percent_change_24h;
            const percentage_7days = coin.quote.USD.percent_change_7d;
            const market_cap = coin.quote.USD.market_cap;
            const Circulating_Supply = coin.circulating_supply.toFixed();

            return (
              <tr key={coin.id} className=" border-t border-b ">
                <td className=" py-6 px-10">
                  {coin.name}
                  <span className="text-gray-600"> {coin.symbol}</span>
                </td>
                <td>
                  <Currency quantity={price} currency="USD" />
                </td>
                <td
                  className={
                    percentage_24h > 1 ? "text-green-400" : "text-black"
                  }
                >
                  {percentage_24h.toFixed(2)}%
                </td>
                <td
                  className={
                    percentage_24h > 1 ? "text-green-400" : "text-black"
                  }
                >
                  {percentage_7days.toFixed(2)}%
                </td>
                <td>
                  <Currency quantity={market_cap} currency="USD" />
                </td>
                <td>
                  <Currency quantity={volume_24h} currency="USD" />
                </td>
                <td>
                  {Circulating_Supply}
                  <span className="text-gray-600"> {coin.symbol}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Coins;

{
  /* <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.quote.USD.price}
            volume={coin.quote.USD.volume_24h}
            change_in_24h={coin.quote.USD.percent_change_24h}
          /> */
}
