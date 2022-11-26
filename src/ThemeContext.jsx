import React, { useContext, createContext, useState, useEffect, useMemo } from 'react'

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [colorTheme, setColorTheme] = useState(localStorage.getItem('color-theme') || 'light');

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleColorTheme = useMemo(() => {
    const root = document.documentElement;
    if (colorTheme === 'light') {
      root.style.setProperty('--text-main', 'rgb(25, 25, 25)');
      root.style.setProperty('--text-secondary', 'rgb(110, 108, 108)');
      root.style.setProperty('--gray', 'rgb(206, 215, 216)');
      root.style.setProperty('--background-secondary', 'rgb(250, 250, 250)');
      root.style.setProperty('--background', 'white');
      root.style.setProperty('neon-blue', '#4769ff');
    } else if (colorTheme === 'dark') {
      root.style.setProperty('--text-main', 'rgb(220, 220, 220)');
      root.style.setProperty('--text-secondary', 'rgb(200, 200, 200)');
      root.style.setProperty('--gray', ' rgb(70, 70, 70)');
      root.style.setProperty('--background-secondary', 'rgb(30, 30, 30)');
      root.style.setProperty('--background', 'rgb(35, 35, 35)');
      root.style.setProperty('--neon-blue', 'rgb(0, 170, 255)');
    }

    localStorage.setItem('color-theme', colorTheme);
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={
      { windowWidth, colorTheme, setColorTheme }
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export default useTheme;