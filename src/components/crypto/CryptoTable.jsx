function CryptoTable({ coins }) {
  return (
    <div className="w-full overflow-x-auto">

      <table className="w-full text-left">

        {/* TABLE HEADER */}
        <thead className="border-b border-gray-200 text-gray-500 text-sm">
          <tr>
            <th className="py-4">Asset</th>
            <th>Market price</th>
            <th>Chart</th>
            <th>Change</th>
            <th>Mkt cap</th>
            <th>Volume</th>
            <th></th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {coins.map((coin, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50"
            >

              {/* Asset */}
              <td className="py-5 flex items-center gap-3">
                <img src={coin.icon} className="w-8 h-8"/>
                <div>
                  <p className="font-semibold">{coin.name}</p>
                  <p className="text-gray-500 text-sm">{coin.symbol}</p>
                </div>
              </td>

              {/* Price */}
              <td>{coin.price}</td>

              {/* Chart */}
              <td>
                <img src={coin.chart} className="h-8"/>
              </td>

              {/* Change */}
              <td className="text-green-600 font-semibold">
                {coin.change}
              </td>

              {/* Market cap */}
              <td>{coin.marketCap}</td>

              {/* Volume */}
              <td>{coin.volume}</td>

              {/* Action */}
              <td>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                  Trade
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default CryptoTable;