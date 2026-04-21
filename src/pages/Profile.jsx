import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { api } from "../api"
import Navbar from "../components/layout/Navbar"

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await api.getProfile();

      if (result.message === 'Profile fetched successfully') {
        setUser(result.user);
      } else {
        // No valid token → send to login
        navigate('/signin');
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 px-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-8">My Profile</h1>

          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col gap-6">

            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-white text-2xl font-bold">{user?.name}</p>
                <p className="text-gray-400">{user?.email}</p>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* Details */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-400 text-sm">Full name</p>
                <p className="text-white font-bold">{user?.name}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email address</p>
                <p className="text-white font-bold">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">User ID</p>
                <p className="text-white font-bold">{user?.id}</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;