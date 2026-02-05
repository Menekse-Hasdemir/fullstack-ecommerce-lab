import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";
import ShopPage from './pages/ShopPage';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>

      <main>
        <Routes>
          
          <Route exact path="/" element={<ShopPage />} /> 
          
          
          <Route path="/shop" element={<ShopPage/>}/>
          
          
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;