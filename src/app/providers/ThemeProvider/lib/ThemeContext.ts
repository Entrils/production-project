import { createContext } from "react";

export enum Theme{
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme'
}

export interface ThemeContenxtProps{
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContenxtProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';