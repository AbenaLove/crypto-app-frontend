import coinbaselogo2 from "../assets/coinbaselogo2.png"
import IconButton from "../components/common/IconButton";
import { GoPasskeyFill } from "react-icons/go";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Divider from "../components/common/Divider";
import { useNavigate } from "react-router";
import { useState } from "react";
import {api} from "../api";

function SignIn(){
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

   const handleSubmit = async () => {
    setError('');
    setLoading(true);

    const result = await api.login({ email, password });

    setLoading(false);

    if (result.message === 'Login successful') {
      navigate('/');
    } else {
      setError(result.message);
    }
  };


  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-black px-5 py-5" onClick={() => navigate("/")}>
        <img src={coinbaselogo2} />
      </div>

      <div className="flex flex-1 items-center justify-center bg-black py-10">
        <div className="bg-black p-10 rounded-xl w-full max-w-lg space-y-6 flex flex-col">
          <h2 className="sub-subheading text-white font-bold">Sign in to Coinbase</h2>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Step 1 - Email */}
          {step === 1 && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="text-white font-bold">Email</label>
                <input
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full"
                />
              </div>

              <button
                className="btn-primary"
                onClick={() => {
                  if (!email) {
                    setError('Please enter your email');
                    return;
                  }
                  setError('');
                  setStep(2);
                }}
              >
                Continue
              </button>

              <Divider />

              <div className="flex flex-col gap-3">
                <IconButton icon={GoPasskeyFill} className="bg-gray-800 text-white">
                  Sign in with Passkey
                </IconButton>
                <IconButton icon={FaGoogle} className="bg-gray-800 text-white">
                  Sign in with Google
                </IconButton>
                <IconButton icon={FaApple} className="bg-gray-800 text-white">
                  Sign in with Apple
                </IconButton>
              </div>

              <div className="flex justify-center">
                <p className="text-white font-bold">
                  Don't have an account?{' '}
                  <span
                    className="text-blue-400 cursor-pointer"
                    onClick={() => navigate('/signup')}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Step 2 - Password */}
          {step === 2 && (
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-sm">{email}</p>

              <div className="flex flex-col gap-2">
                <label className="text-white font-bold">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full"
                />
              </div>

              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              <p
                className="text-gray-400 text-sm cursor-pointer hover:text-white transition text-center"
                onClick={() => setStep(1)}
              >
                ← Back
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )}
export default SignIn;