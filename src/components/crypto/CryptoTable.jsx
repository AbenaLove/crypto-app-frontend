function CryptoTable({ coins }) {
  return (
    <div className="w-full overflow-x-auto">

      <table className="w-full text-left">

        {/* TABLE HEADER */}
        <thead className="border-b border-gray-200 text-gray-500 text-xl">
          <tr>
            <th className="py-4">Asset</th>
            <th>Market price</th>
            <th>Change</th>
            <th></th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin._id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >

              {/* Asset */}
              <td className="py-5 flex items-center gap-3">
                <img src={coin.image} className="w-8 h-8 rounded-full object-contain" onError={(e) => e.target.style.display = 'none'}/>
                <div>
                  <p className="font-semibold text-xl">{coin.name}</p>
                  <p className="text-gray-500 text-sm font-medium">{coin.symbol}</p>
                </div>
              </td>

              {/* Price */}
              <td className="font-semibold text-xl">{coin.price.toLocaleString()}</td>

              {/* Change */}
              <td className={`font-semibold text-xl ${coin.change24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
              </td>
              
              {/* Action */}
              <td>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
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