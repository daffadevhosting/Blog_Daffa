import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DropNft from "./pages/nftDrop";
import Error from "./pages/Error";
import { gsap } from "gsap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

export default function App() {

  return (
    <>
        <NavBar />
        <ScrollToTop />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:slug" element={<BlogPost />}/>
          <Route path="/nftDrop" element={<DropNft />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        </div>
        <Footer />
    </>
  );
}
