import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Market from "./pages/MarketPlace/marketPlace";
import Error from "./pages/Error/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

export default function App() {

  return (
    <Router>
        <NavBar />
        <ScrollToTop />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/blog/:slug" element={<BlogPost />}/>
          <Route exact path="/marketPlace" element={<Market />}/>
          <Route exact path="*" element={<Error />}/>
        </Routes>
        </div>
        <Footer />
    </Router>
  );
}
