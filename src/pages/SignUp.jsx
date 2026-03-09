import { useState } from "react"
import { useNavigate } from "react-router"
import coinbaselogo2 from "../assets/coinbaselogo2.png"
import personal from "../assets/personal.svg"
import business from "../assets/business.svg"
import developer from "../assets/developer.svg"
import Divider from "../components/common/Divider";
import IconButton from "../components/common/IconButton"
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function SignUp(){
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-black px-5 py-5" onClick={() => navigate("/")}>
        <img src={coinbaselogo2}/>
      </div>

      <div className="flex flex-1 items-center justify-center bg-black py-10">
        <div className="bg-black p-10 rounded-xl w-full max-w-lg space-y-6">
          {step === 1 && (
            <>
              <div className="flex flex-col gap-5">
                <h2 className="sub-subheading text-white">What Kind of account are you creating?</h2>
                <div className="flex gap-10 border border-gray-600 px-10 py-6 rounded-xl" onClick={()=> setStep(2)}>
                  <img src={personal} 
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <p className="text-main text-white font-bold">Personal</p>
                    <p className="text-gray-400">Trade crypto as an individual</p>
                  </div>
                </div>

                <div className="flex gap-10 border border-gray-600 px-10 py-6 rounded-xl">
                  <img src={business} className="w-20 h-20 object-contain"/>
                  <div>
                    <p className="text-main text-white font-bold">Business</p>
                    <p className="text-gray-400">Manage teams and portfolios, accept crypto payments, access APIs, and more</p>
                  </div>
                </div>

                <div className="flex gap-10 border border-gray-600 px-10 py-6 rounded-xl">
                  <img src={developer} className="w-20 h-20 object-contain"/>
                  <div>
                    <p className="text-main text-white font-bold">Developer</p>
                    <p className="text-gray-400">Build onchain using developer tooling</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col gap-3">
                <h2 className="sub-subheading text-white font-bold">Create your account</h2>
                <p className="text-main text-gray-400">Access all that Coinbase has to offer with a single account.</p>
                <div>
                  <label className="text-white">Email</label>
                  <input
                    placeholder="Your email address"
                  />
                </div>
                <button className="btn-primary">Continue</button>
                <Divider/>
                <div className="flex flex-col gap-3">
                  <IconButton
                    icon={FaGoogle} 
                    className="bg-gray-800 text-white">
                      Sign up with Google
                  </IconButton>
                  <IconButton
                    icon={FaApple}
                    className="bg-gray-800 text-white">
                      Sign up with Apple
                  </IconButton>
                </div>
                <p className="text-main text-white font-bold">Already have an account ? <span className="text-blue-400">Sign in</span></p>
                <p className="text-gray-400">By creating an account you certify that you are over the age of 18 and agree to our Privacy Policy and Cookie Policy.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
export default SignUp;