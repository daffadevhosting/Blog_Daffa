import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import routes from '~react-pages'
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Market from "./pages/marketPlace";
import Error from "./pages/Error";
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
          <Route exact path="*" element={<p>Page not found</p>}/>
        </Routes>
        </div>
        <Footer />
    </Router>
  );
}
