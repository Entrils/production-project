import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/routers'
import { Navbar } from 'widgets/Navbar'



const App = () => {

  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
         <Navbar />
        <AppRouter />
        <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App;