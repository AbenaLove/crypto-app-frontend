import {Routes, Route} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import Learn from "./pages/Learn"
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail"
import WarningBanner from "./components/common/WarningBanner";

function App() {
  

  return (
    <>
      
      {/* <div className="pt-8"> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Home/>
              <Footer/>
            </>
          } 
        />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route 
          path="/learn" 
          element={
            <>
              <Navbar/>
              <Learn/>
              <Footer/>
            </>
          }/>
        <Route
          path="/explore"
          element={
            <>
              <Navbar/>
              <Explore/>
              <Footer/>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar/>
              <Profile/>
              <Footer/>
            </>
          }
        />
        <Route
          path="/asset/:id"
          element={
            <>
              <Navbar/>
              <AssetDetail/>
              <Footer/>
            </>
          }
        />
      </Routes>
      {/* </div> */}
    </>
    
  );
}

export default App;
