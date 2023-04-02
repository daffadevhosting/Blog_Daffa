import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import routes from '~react-pages'
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css'

const HomePage = React.lazy(() => import('./pages/HomePage'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Market = React.lazy(() => import('./pages/marketPlace'));

export default function App() {

  return (
    <Router>
      <Suspense fallback={<h1 className="loading"> Loading... </h1>}>
        <NavBar />
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
      </Suspense>
    </Router>
  );
}
