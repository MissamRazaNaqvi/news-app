import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import News from './pages/News';
import About from './pages/About.js';

export default function App() {
 // const pageSize =12;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News path="/" key="general" pageSize={12} country="in" category="general" />} />
          <Route exact path="/business" element={<News path="/" key="business" pageSize={12} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News path="/" key="entertainment" pageSize={12} country="in" category="entertainment" />} />
          <Route exact element={<News path="/" key="general" pageSize={12} country="in" category="general" />} />
          <Route exact path="/health" element={<News path="/" key="health" pageSize={12} country="in" category="health" />} />
          <Route exact path="/science" element={<News path="/" key="science" pageSize={12} country="in" category="science" />} />
          <Route exact path="/sports" element={<News path="/" key="sports" pageSize={12} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News path="/" key="technology" pageSize={12} country="in" category="technology" />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();





