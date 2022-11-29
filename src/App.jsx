import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme, { ThemeProvider } from "./ThemeContext";
import CreateNote from "./CreateNote";
import NotePreview from "./NotePreview";
import EditNote from "./EditNote";

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
            <Route path="/edit/:id" element={<EditNote />}></Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
