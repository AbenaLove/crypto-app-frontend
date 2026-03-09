import AssetCard from "../components/crypto/AssetCard";
import CardCarousel from "../components/layout/CardCarousel";
import { MarketStats } from "../data/Explore";
import getstarted from "../assets/getstarted.svg"
import { TopMovers, Coins, coins} from "../data/Explore";
import ExploreCard from "../components/crypto/ExploreCard";
import CryptoTable from "../components/crypto/CryptoTable"


function Explore(){
  return (
    <main>
      <div className="flex flex-col md:flex-row lg:flex-row ">
        <div className="w-full md:w-2/3 lg:w-2/3 border-r border-gray-200">
          <div className="px-10 pt-40 pb-15 flex gap-20">
            <div className=" flex flex-col gap-5">
              <h3 className="sub-subheading font-bold">Explore crypto</h3>
              <p className="text-main">Coinbase 50 Index is up 2.92% (24hrs)</p>
            </div>
            <div>
              <input className="search-input" placeholder="Search for an asset"/>
            </div>
          </div>

          <div className="px-10 py-10 border border-gray-200">
            <CardCarousel
              title={"Market stats"}
              description={"The overall crypto market is shrinking this week"} 
            >
              {
                MarketStats.map((stat, index) => (
                  <AssetCard
                    key={index}
                    title={stat.title}
                    description={stat.description}
                    graph={stat.graph}
                  />
                ))
              }
            </CardCarousel>
          </div>

          <div className="px-10 py-10">
            <CardCarousel
              title={"Crypto market prices"}
              description={"The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is 24.59 trillion, representing a 0.53% decrease from last week."} 
            >
            </CardCarousel>
            <div>
              <CryptoTable coins={coins}/>
            </div>
          </div>
        </div>

        <div className=" py-28 border-b border-gray-200 w-full md:w-1/3 lg:w-1/3">
          <div className="px-5 py-5 border-b border-gray-200">
              <div className="bg-blue-600 flex rounded-3xl py-5 px-5">
                <div className="flex-1 flex flex-col space-y-5">
                  <div>
                    <p className="text-main font-bold text-white">Get started</p>
                    <p className="font-bold text-white">Create your account today</p>
                  </div>
                  <button className="w-25 py-2 px-3 rounded-full font-bold bg-white">Sign up</button>
                </div>
                <div className="flex-1">
                  <img src={getstarted} alt="Sign up image"/>
                </div>
              </div>
          </div>

          <div className="px-10 py-10">
            <CardCarousel
              title={"Top movers"}
              description={"24hr change"}
            >
              {
                TopMovers.map((card, index) => (
                  <ExploreCard
                    key={index}
                    image={card.image}
                    description={card.description}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                ))
              }
            </CardCarousel>
          </div>

          <div className="px-10 py-10">
              <CardCarousel
              title={"New on Coinbase"}
            >
              {
                Coins.map((coin, index) => (
                  <ExploreCard
                    key={index}
                    image={coin.image}
                    description={coin.description}
                    title={coin.title}
                    subtitle={coin.subtitle}
                  />
                ))
              }
            </CardCarousel>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Explore;