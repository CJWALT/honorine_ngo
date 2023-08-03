import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./page/Home";
import OurVision from "./page/OurVision";


function App() {
  return (
    <div>
        

      
      <BrowserRouter>
      <Header />
          <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/ourvision" element={<OurVision/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
