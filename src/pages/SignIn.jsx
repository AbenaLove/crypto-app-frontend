import coinbaselogo2 from "../assets/coinbaselogo2.png"
import IconButton from "../components/common/IconButton";
import { GoPasskeyFill } from "react-icons/go";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Divider from "../components/common/Divider";
import { useNavigate } from "react-router";

function SignIn(){
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col">
    <div className="bg-black px-5 py-5" onClick={() => navigate("/")}>
      <img src={coinbaselogo2}/>
    </div>
    <div className="flex flex-1 items-center justify-center bg-black py-10">
      <div className="bg-black p-10 rounded-xl w-full max-w-lg space-y-6 flex flex-col">
        <h2 className="sub-subheading text-white font-bold">Sign in to Coinbase</h2>

        <div className="flex flex-col gap-3">
          <label className="text main text-white font-bold">Email</label>
          <input/>
          <button className="btn-primary">Continue</button>
        </div>
        <Divider/>
        <div className="flex flex-col gap-3">
          <IconButton
            icon={GoPasskeyFill}
            className="bg-gray-800 text-white"
          >
            Sign In with Passkey
          </IconButton>
          <IconButton
            icon={FaGoogle}
            className="bg-gray-800 text-white"
          >
            Sign In with Google
          </IconButton>
          <IconButton
            icon={FaApple}
            className="bg-gray-800 text-white"
          >
            Sign In with Apple
          </IconButton>
        </div>
        <div className="flex justify-center">
          <p className="text-main text-white font-bold">Don't have an account <span className="text-blue-400">Sign up</span></p>
        </div>
        
    </div>
    </div>
    
  </main>
  )
  
  
}
export default SignIn;