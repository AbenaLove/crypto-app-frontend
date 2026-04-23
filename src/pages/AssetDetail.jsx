import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { api } from "../api";
import Navbar from "../components/layout/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { FaStar, FaShareAlt, FaGlobe, FaFileAlt, FaArrowRight } from "react-icons/fa";

function AssetDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('About');
  const navigate = useNavigate();

  // Generate a fake but realistic-looking price chart from the coin's price
  const generateChartData = (basePrice) => {
    const points = 20;
    const data = [];
    let price = basePrice * 0.95;
    for (let i = 0; i < points; i++) {
      const change = (Math.random() - 0.45) * basePrice * 0.01;
      price = price + change;
      data.push({
        time: `${i + 1}`,
        price: parseFloat(price.toFixed(2)),
      });
    }
    // Make sure last point is close to actual price
    data[data.length - 1].price = basePrice;
    return data;
  };

  useEffect(() => {
    const fetchCoin = async () => {
      const allCoins = await api.getAllCrypto();
      const found = allCoins.find((c) => c._id === id);
      if (found) setCoin(found);
      setLoading(false);
    };
    fetchCoin();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Asset not found.</p>
      </div>
    );
  }

  const chartData = generateChartData(coin.price);
  const isPositive = coin.change24h >= 0;
  const tabs = ['About', 'Info', 'Insights', 'FAQ', 'News', 'Social'];

  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen bg-white">

        {/* ── TOP HEADER BAR ── */}
        <div className="bg-white border-b border-gray-200 z-40 px-6 pt-35 pb-6 flex items-center justify-between flex-wrap gap-3">

          {/* Left: logo + name + icon buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-9 h-9 rounded-full object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
            <h1 className="text-lg font-bold text-black">
              {coin.name} Price ({coin.symbol})
            </h1>

            {/* Icon buttons */}
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500 text-sm">
              <FaStar />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500 text-sm">
              <FaShareAlt />
            </button>
            <button className="px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium">
              GHS ▾
            </button>
          </div>

          {/* Right: tab pills */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        {/* pt accounts for navbar (64px) + header bar (~64px) */}
        <div className=" flex flex-col lg:flex-row min-h-screen">

          {/* ── LEFT PANEL ── */}
          <div className="w-full lg:w-80 border-r border-gray-200 py-10 px-6 flex flex-col gap-6 order-2 lg:order-1">

            {/* About */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-black">About {coin.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {coin.name} is a cryptocurrency traded on the blockchain. 
                It is stored and exchanged securely on the internet through a 
                digital ledger known as a blockchain. Units are divisible into 
                smaller fractions for microtransactions.
              </p>

              {/* Whitepaper + Official website */}
              <div className="flex gap-3 flex-wrap">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                  <FaFileAlt className="text-gray-500" />
                  Whitepaper
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                  <FaGlobe className="text-gray-500" />
                  Official website
                </button>
              </div>

              {/* Buy button */}
              <button className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-full transition w-full">
                Buy {coin.name}
                <FaArrowRight />
              </button>
            </div>

            {/* Happening now */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-black mb-3">Happening now</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                <p className="text-gray-500 text-xs">AI generated</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {coin.symbol} is currently trading at ${coin.price.toLocaleString()}, 
                with a {isPositive ? 'gain' : 'loss'} of {Math.abs(coin.change24h)}% 
                in the last 24 hours. 
                {isPositive
                  ? ' Bullish momentum is building.'
                  : ' Bearish pressure continues.'}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <p className="text-gray-500 text-sm">Symbol</p>
                <p className="font-bold text-sm">{coin.symbol}</p>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <p className="text-gray-500 text-sm">Date added</p>
                <p className="font-bold text-sm">
                  {new Date(coin.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <p className="text-gray-500 text-sm">24h change</p>
                <p className={`font-bold text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? '+' : ''}{coin.change24h}%
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="flex-1 px-6 py-8 order-1 lg:order-2">

            {/* Price + change */}
            <div className="flex items-center gap-4 flex-wrap mb-2">
              <h2 className="text-5xl font-bold text-black">
                ${coin.price.toLocaleString()}
              </h2>
              <span className={`text-xl font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? '↗' : '↘'} {Math.abs(coin.change24h)}%
              </span>
            </div>

            {/* Time range buttons */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((range) => (
                <button
                  key={range}
                  className={`px-3 py-1 rounded-full text-sm font-bold transition ${
                    range === '1D'
                      ? 'text-green-500 border-b-2 border-green-500'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={isPositive ? '#22c55e' : '#ef4444'}
                        stopOpacity={0.2}
                      />
                      <stop
                        offset="95%"
                        stopColor={isPositive ? '#22c55e' : '#ef4444'}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide />
                  <YAxis
                    domain={['auto', 'auto']}
                    tickFormatter={(v) => `$${v.toLocaleString()}`}
                    width={90}
                    tick={{ fontSize: 12, fill: '#9ca3af' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(value) => [`$${value.toLocaleString()}`, coin.name]}
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '13px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke={isPositive ? '#22c55e' : '#ef4444'}
                    strokeWidth={2}
                    fill="url(#colorPrice)"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AssetDetail;