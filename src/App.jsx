import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme, { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<p className="hi">Hi</p>} />
          </Routes>
        </div>
      </Router>
      <div className="space"></div>
    </ThemeProvider>
  )
}

export default App
