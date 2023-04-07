import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import routes from '~react-pages'
import HomePage from "./pages/index";
import Blogging from "./pages/BlogPost";
import BlogPost from "./pages/article/Posts";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
import Studio from "./studio/[[...index]]/pages";
import './App.css'

function App() {

  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/article" element={<Blogging />}/>
          <Route exact path="/article/:slug" element={<BlogPost />}/>
          <Route exact path="/studio/*" element={<Studio />}/>
          <Route exact path="*" element={<Error />}/>
        </Routes>
    </Router>
  )
}

export default App
