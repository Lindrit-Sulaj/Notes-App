import React, { useContext, createContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

const useTheme = () => {
  return useContext( ThemeContext );
}

export const ThemeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{windowWidth}}>
      { children }
    </ThemeContext.Provider>
  )
}

export default useTheme;