import {Routes, Route} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import Learn from "./pages/Learn"
import Explore from "./pages/Explore";

function App() {
  

  return (
    <>
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
      </Routes>
    </>
    
  );
}

export default App;
