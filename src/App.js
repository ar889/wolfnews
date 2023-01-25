import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [prog, setProgress] = useState(10);
  const progress = (value) => {
    setProgress(value);
    
  };
  return (
    <>
      <Router>
        <div id="wrapper">
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={prog}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey={process.env.REACT_APP_API_KEY}
                  key="general"
                  category="general"
                  loadingBar={progress}
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  apiKey={process.env.REACT_APP_API_KEY}
                  key="science"
                  category="science"
                  loadingBar={progress}
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  apiKey={process.env.REACT_APP_API_KEY}
                  key="sports"
                  category="sports"
                  loadingBar={progress}
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  apiKey={process.env.REACT_APP_API_KEY}
                  key="technology"
                  category="technology"
                  loadingBar={progress}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
