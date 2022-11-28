import React, { useContext, createContext, useState, useEffect, useMemo, useReducer } from 'react'

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
}

const tagsReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload.name];
    };
    case 'delete': {
      return state.filter((tag, index) => index !== action.payload.id)
    };
    case 'edit': {
      const [id, newValue] = [action.payload.id, action.payload.value]
      return state.map((tag, index) => (index === id) ? newValue : tag)
    }
  }
}

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload.noteData]
    }
  }
}

export const ThemeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [colorTheme, setColorTheme] = useState(localStorage.getItem('color-theme') || 'light');
  const [tags, tagsDispatch] = useReducer(tagsReducer, JSON.parse(localStorage.getItem('tags')) || []);
  const [notes, notesDispatch] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')) || []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [tags, notes])

  useMemo(() => {
    const root = document.documentElement;
    if (colorTheme === 'light') {
      root.style.setProperty('--text-main', 'rgb(25, 25, 25)');
      root.style.setProperty('--text-secondary', 'rgb(110, 108, 108)');
      root.style.setProperty('--gray', 'rgb(206, 215, 216)');
      root.style.setProperty('--background-secondary', 'rgb(250, 250, 250)');
      root.style.setProperty('--background-tertiary', 'rgb(245, 245, 245)')
      root.style.setProperty('--background', 'white');
      root.style.setProperty('neon-blue', '#4769ff');
    } else if (colorTheme === 'dark') {
      root.style.setProperty('--text-main', 'rgb(220, 220, 220)');
      root.style.setProperty('--text-secondary', 'rgb(200, 200, 200)');
      root.style.setProperty('--gray', ' rgb(70, 70, 70)');
      root.style.setProperty('--background-secondary', 'rgb(30, 30, 30)');
      root.style.setProperty('--background', 'rgb(35, 35, 35)');
      root.style.setProperty('--background-tertiary', 'rgb(50, 50, 50)')
      root.style.setProperty('--neon-blue', 'rgb(0, 170, 255)');
    }

    localStorage.setItem('color-theme', colorTheme);
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={
      { windowWidth, colorTheme, setColorTheme, tags, tagsDispatch, notes, notesDispatch }
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export default useTheme;