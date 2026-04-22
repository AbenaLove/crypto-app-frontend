import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {api} from "../../api";

function CryptoTabs(){
  const [activeTab, setActiveTab] = useState('tradable');
  const [tradable, setTradable] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const [allData, gainersData, newData] = await Promise.all([api.getAllCrypto(), api.getGainers(), api.getNewListings()]);

      setTradable(allData);
      setGainers(gainersData);
      setNewListings(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const displayList = 
  activeTab === 'tradable' ? tradable :
  activeTab === 'gainers' ? gainers :
  newListings;

  const tabs = [
    { key: 'tradable', label: 'Tradable'},
    { key: 'gainers', label: 'Top gainers' },
    { key: 'new', label: 'New on Coinbase' },
  ];

  return (
     <div className="bg-black rounded-3xl p-6 ">

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition ${
              activeTab === tab.key
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* List */}
      {loading ? (
        <p className="text-gray-400 text-sm">Loading...</p>
      ) : displayList.length === 0 ? (
        <p className="text-gray-400 text-sm">No data available.</p>
      ) : (
        <div className="flex flex-col">
          {displayList.map((coin) => (
            <div
              key={coin._id}
              onClick={() => navigate(`/asset/${coin._id}`)}
              className="flex items-center justify-between py-5 border-b cursor-pointer hover:bg-gray-800 px-2 rounded-lg transition"
            >
              {/* Left: icon + name */}
              <div className="flex items-center gap-3">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8 rounded-full object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <p className="text-white text-5xl">{coin.name}</p>
              </div>

              {/* Right: price + change */}
              <div className="text-right">
                <p className="text-white font-bold text-2xl">
                  ${coin.price.toLocaleString()}
                </p>
                <p className={`text-sm font-semibold ${
                  coin.change24h >= 0 ? 'text-green-400 ' : 'text-red-400'
                }`}>
                  {coin.change24h >= 0 ? '↗' : '↘'} {Math.abs(coin.change24h)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Footer link */}
      <button
        onClick={() => navigate('/explore')}
        className="mt-6 text-blue-400 text-sm font-bold hover:underline"
      >
        See more assets →
      </button>
    </div>
  )
}
export default CryptoTabs;