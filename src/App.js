import Header from "./components/elements/Header/Header"
import './App.scss';
import About from "./components/elements/About/About";
import Footer from "./components/elements/Footer/Footer";
import Portfolio from "./components/elements/Portfolio/Portfolio";
import Blog from "./components/elements/Blog/Blog";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
            <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/blog" element={<Blog/>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
