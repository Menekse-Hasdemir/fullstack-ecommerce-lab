import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;