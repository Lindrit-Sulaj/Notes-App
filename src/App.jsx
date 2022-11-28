import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme, { ThemeProvider } from "./ThemeContext";
import CreateNote from "./CreateNote";
import NotePreview from "./NotePreview";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<p className="hi">Hi</p>} />
            <Route path="/create" element={<CreateNote />}></Route>
            <Route path="/note/:id" element={<NotePreview />}></Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
