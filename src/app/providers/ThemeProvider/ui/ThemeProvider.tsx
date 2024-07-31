import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

  interface ThemeProviderProps {
    initialTheme?: Theme;
    children?: ReactNode;
  }

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    
    const {
      initialTheme,
      children
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    
    useEffect(() => {
      document.body.classList.add(theme);
      
      return () => {
      document.body.classList.remove(theme);
      };
      }, []);

    const defaultProps = useMemo(() =>({
        theme: theme,
        setTheme: setTheme
    }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}
