import { Route, BrowserRouter, Routes} from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./page/Home";
import OurVision from "./page/OurVision";
import Projects from "./page/Projects";


function App() {

      // const history = useHistory(); 
      const handleButtonClick = () =>{ 

        const donateLink = 'https://PayPal.me/honoursfoundation'
        window.location.href = donateLink;
      }

  return (
    <div>
        

      
      <BrowserRouter>
      <Header />
          <Routes>

          <Route path="/" element={<Home onclick={handleButtonClick} />}/>
          <Route path="/ourvision" element={<OurVision/>}/>
          <Route path="/projects" element={<Projects/>}/>
          </Routes>
        <Footer onclick={handleButtonClick}/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
