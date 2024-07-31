import React, { Suspense, useEffect, useState} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/routers'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {

  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
       <Navbar />
         <div className='content-page'>
            <Sidebar />
            <AppRouter />
         </div>
      </Suspense>
    </div>
  )
}

export default App;