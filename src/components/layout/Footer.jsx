import coinbase_logo from "../../assets/coinbase_logo.svg";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1 */}
          <div className="flex items-start">
            <img src={coinbase_logo} alt="Coinbase logo" className="h-25">
            </img>
          </div>

          {/* Column 2 */}
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="font-bold mb-4 text-subheading">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-black text-subheading">About</a></li>
              <li><a className="hover:text-black text-subheading">Careers</a></li>
              <li><a className="hover:text-black text-subheading">Affiliates</a></li>
              <li><a className="hover:text-black text-subheading">Blog</a></li>
              <li><a className="hover:text-black text-subheading">Press</a></li>
              <li><a className="hover:text-black text-subheading">Security</a></li>
              <li><a className="hover:text-black text-subheading">Investors</a></li>
              <li><a className="hover:text-black text-subheading">Vendors</a></li>
              <li><a className="hover:text-black text-subheading">Legal & privacy</a></li>
              <li><a className="hover:text-black text-subheading">Cookie policy</a></li>
              <li><a className="hover:text-black text-subheading">Cookie preferences</a></li>
              <li><a className="hover:text-black text-subheading">Do Not Share My Personal Information</a></li>
              <li><a className="hover:text-black text-subheading">Digital Asset Disclosures</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-subheading">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-black text-subheading" href="/explore">Explore</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Market statistics</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Coinbase Bytes newsletter</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Crypto basics</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Tips and tutorials</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Crypto glossary</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Market updates</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">What is Bitcoin</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">What is Crypto</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">What is a blockchain</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">How to set up a crypto wallet</a></li> 
              <li><a className="hover:text-black text-subheading" href="/learn">How to send crypto?</a></li>
              <li><a className="hover:text-black text-subheading" href="/learn">Taxes</a></li>
            </ul>
          </div>
        </div>


          {/* Column 3 */}
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="font-bold mb-4 text-subheading">Individuals</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-black text-subheading">Buy and sell</a></li>
              <li><a className="hover:text-black text-subheading">Earn free crypto</a></li>
              <li><a className="hover:text-black text-subheading">Base App</a></li>
              <li><a className="hover:text-black text-subheading">Coinbase One</a></li>
              <li><a className="hover:text-black text-subheading">Debit Card</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-subheading">Businesses</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-black text-subheading">Asset Listings</a></li>
              <li><a className="hover:text-black text-subheading">Coinbase Business</a></li>
              <li><a className="hover:text-black text-subheading">Payments</a></li>
              <li><a className="hover:text-black text-subheading">Commerce</a></li>

            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-subheading">Institutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-black text-subheading">Prime</a></li>
              <li><a className="hover:text-black text-subheading">Staking</a></li>
              <li><a className="hover:text-black text-subheading">Exchange</a></li>
              <li><a className="hover:text-black text-subheading">International Exchange</a></li>
              <li><a className="hover:text-black text-subheading">Derivatives Exchange</a></li>
              <li><a className="hover:text-black text-subheading">Verified Pools</a></li>
            </ul>
          </div>
        </div>

        {/*column 4*/}
          <div className="flex flex-col space-y-8">
            <h3 className="font-bold mb-4 text-subheading">Developers</h3>
            <ul className="space-y-2 text-sm text-subheading">
              <li><a className="hover:text-black text-subheading">Developer Platform</a></li>
              <li><a className="hover:text-black text-subheading">Base</a></li>
              <li><a className="hover:text-black text-subheading">Server Wallets</a></li>
              <li><a className="hover:text-black">Embedded Wallets</a></li>
              <li><a className="hover:text-black">Base Accounts (Smart Wallets)</a></li>
              <li><a className="hover:text-black">Onramp & Offramp</a></li>
              <li><a className="hover:text-black">x402</a></li>
              <li><a className="hover:text-black">Trade API</a></li>
              <li><a className="hover:text-black">Paymaster</a></li>
              <li><a className="hover:text-black">OnchainKit</a></li>
              <li><a className="hover:text-black">Data API</a></li>
              <li><a className="hover:text-black">Verifications</a></li>
              <li><a className="hover:text-black">Node</a></li>
              <li><a className="hover:text-black">AgentKit</a></li>
              <li><a className="hover:text-black">Staking</a></li>
              <li><a className="hover:text-black">Faucet</a></li>
              <li><a className="hover:text-black">Exchange API</a></li>
              <li><a className="hover:text-black">International Exchange API</a></li>
              <li><a className="hover:text-black">Prime API</a></li>
              <li><a className="hover:text-black">Derivatives API</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col space-y-8">
            <div>
            <h3 className="font-bold mb-4 text-subheading">Support</h3>
            <ul className="space-y-2 text-sm text-subheading">
              <li><a className="hover:text-black">Help center</a></li>
              <li><a className="hover:text-black">Contact us</a></li>
              <li><a className="hover:text-black">Create account</a></li>
              <li><a className="hover:text-black">ID verification</a></li>
              <li><a className="hover:text-black">Account information</a></li>
              <li><a className="hover:text-black">Payment methods</a></li>
              <li><a className="hover:text-black">Account access</a></li>
              <li><a className="hover:text-black">Supported crypto</a></li>
              <li><a className="hover:text-black">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-subheading">Asset prices</h3>
            <ul className="space-y-2 text-sm text-subheading">
              <li><a className="hover:text-black">Bitcoin price</a></li>
              <li><a className="hover:text-black">Ethereum price</a></li>
              <li><a className="hover:text-black">Solana price</a></li>
              <li><a className="hover:text-black">XRP price</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-subheading">Stock prices</h3>
            <ul className="space-y-2 text-sm text-subheading">
              <li><a className="hover:text-black">NVIDIA price</a></li>
              <li><a className="hover:text-black">Apple price</a></li>
              <li><a className="hover:text-black">Microsoft price</a></li>
              <li><a className="hover:text-black">Amazon price </a></li>
            </ul>
          </div>
          </div>

        </div>

        <div className="flex gap-4 text-2xl text-black-500 pb-15">
        <span>
          <RiTwitterXFill />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaTiktok />
        </span>
      </div>

      <div className="flex justify-between text-subheading">
        <div className="flex gap-4">
          <p>© 2026 Coinbase</p>
          <span>•</span>
          <span>Privacy</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="flex gap-4">
          <span><GoGlobe /></span>
          <p>Global</p>
          <span>•</span>
          <p>English</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-4">
  This is a demo project built for educational purposes. Do not enter real personal information. Not affiliated with Coinbase, Inc.
</p>
      </div>


      
    </footer>
  );
}

export default Footer;