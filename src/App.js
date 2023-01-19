import Header from "./components/elements/Header/Header"
import About from "./components/elements/About/About";
import Footer from "./components/elements/Footer/Footer";
import Portfolio from "./components/elements/Portfolio/Portfolio";
import Blog from "./components/elements/Blog/Blog";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename="/My-resume">
        <Header/>
            <Routes>
              <Route exact path="/" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/blog" element={<Blog/>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
