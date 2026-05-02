import herobanner_pic from "../assets/herobanner_pic.png"
import hero_stats from "../assets/hero_stats.png"
import hero_thirdpic from "../assets/hero_thirdpic.png"
import hero_tradepic from "../assets/hero_tradepic.png"
import hero_baseAppPic from "../assets/hero_baseAppPic.png"
import newsletter1 from "../assets/newsletter1.png"
import newsletter2 from "../assets/newsletter2.png"
import newsletter3 from "../assets/newsletter3.png"
import bitcoins from "../assets/bitcoins.png"
import CryptoTabs from "../components/crypto/CryptoTabs"
import { useNavigate } from "react-router"


function Home(){
  const navigate = useNavigate();
  return(
    <main >
      <div className="flex flex-col lg:flex-row items-center gap-20 py-30 px-10">
        <div className="flex-1">
          <img
            src={herobanner_pic}
            alt="hero banner"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="heading">
            The future of finance is here.
          </h1>
          <p className="text-main">
            Trade crypto and more on a platform you can trust
          </p>
          <div className="flex gap-10">
            <input
            type="email"
            placeholder="satoshi@nakamoto.com"
            />
            <button className="btn-primary" 
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-20 bg-gray-200 py-30 px-10">
        <div className="flex-1 flex flex-col space-y-6 text center lg:text-left ">
          <h2 className="subheading">Explore crypto like Bitcoin, Ethereum, and Dogecoin</h2>
          <p className="text-main text-gray-500">
            Simply and securely buy, sell and manage hundreds of cryptocurrencies</p>
          <button className="btn-dark" onClick={()=> navigate('explore')}
          >See more assets</button>
        </div>
        <div className="flex-1">
          <CryptoTabs/>
          {/* <img 
            src={hero_stats}
            alt="crypto stats"
            className="w-full h-auto object-contain"
          /> */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-20 py-30 px-10">
        <div className="flex-1">
          <img
            src={hero_thirdpic}
            alt="hero banner"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="subheading">Powerful tools, designed for the advanced trader</h2>
          <p className="text-main text-gray-600">
            Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
          </p>
          <button className="btn-dark"
          >Start trading</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-20 py-30 px-10">
        <div className="flex-1 flex flex-col space-y-6 text center lg:text-left ">
          <h2 className="subheading">Zero trading fees, more rewards</h2>
          <p className="text-main text-gray-500">
            Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more</p>
          <button className="btn-dark"
          >Claim free trial</button>
        </div>
        <div className="flex-1">
          <img 
            src={hero_tradepic}
            alt="trading picture"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-20 py-30 px-10">
        <div className="flex-1">
          <img
            src={hero_baseAppPic}
            alt="image of base app"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="subheading">
            Countless ways to earn crypto with the Base App.
          </h2>
          <p className="text-main text-gray-600">
            An everything app to trade, create, discover, and chat, all in one place.
          </p>
          <button className="btn-dark" onClick={() => navigate('/learn')}>
            Learn more
          </button>
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col gap-20 py-30 px-10" >
        <div className="flex justify-between">
          <div><h1 className="heading">New to crypto? Learn some crypto basics</h1></div>
          <div className="flex flex-col gap-5">
            <p className="text-main text-gray-600">Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between</p>
            <button className="btn-dark" onClick={()=> navigate('/learn')}>Read more</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-10" onClick={() => navigate('/learn')}>
            <div><img
              src={newsletter1}
            /></div>
            <h3 className="sub-subheading">USDC: The digital dollar for the global crypto economy</h3>
            <p className="text-main text-gray-600">coinbase believes crypto will be part of the solution for creating an open financial system that is both...</p>
          </div>
          <div className="flex flex-col gap-10" onClick={()=> navigate('/learn')}>
            <div><img src={newsletter2} /></div>
            <h3 className="sub-subheading">Can crypto really replace your bank account?</h3>
            <p className="text-main text-gray-600">If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term...</p>
          </div>
          <div className="flex flex-col gap-10" onClick={()=> navigate('/learn')}>
            <div><img src={newsletter3} /></div>
            <h3 className="sub-subheading">When is the best time to invest in crypto?</h3>
            <p className="text-main text-gray-600">Crypto currencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of...</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center py-30 px-10">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="heading">Take control of your money</h1>
          <p className="text-main">Start your portfolio today and discover crypto</p>
          <div className="flex gap-10">
            <input
            type="email"
            placeholder="satoshi@nakamoto.com"
            />
          <button className="btn-primary" onClick={()=> navigate('/signup')}>
            Sign Up
          </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={bitcoins}/>
        </div>
      </div>
      
      <div className="items-center px-50">
        <div className="flex flex-col gap-5 items-center">
          <p className="text-main text-gray-600">DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
          <p>Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.</p>
        </div>
      </div>
    </main>
  )
}
export default Home;