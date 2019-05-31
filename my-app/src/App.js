import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookShelf from './Components/BookShelf';
import BookInfo from './Components/BookInfo';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={BookShelf} />
          <Route path="/bookInfo/:id" component={BookInfo} />
        </div>
      </Router>

    </div>
  );
}

export default App;
