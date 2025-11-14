
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'

import { type FunctionComponent } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { useAuth } from './hooks/userAuth'
import { Button } from './components/ui/button'
import PrivateRoute from './lib/PrivateRoute'
import Movies from './pages/Moives'
import { ThemeProvider, useTheme } from './components/ui/theme-provider'


const Header: FunctionComponent = () => {
  const { token, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
    // Toggle between light and dark only
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <>
      {
        token && (

          <div className="flex py-3 px-7 bg-neutral-400 dark:bg-neutral-950 dark:border-2 border-neutral-400 justify-end box-border w-full rounded">
            <NavigationMenu className="w-auto">
              <NavigationMenuList className="flex justify-around gap-9">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/home">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {
                  token && (
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/movies">Movies</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }
                {
                  token ? (
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Button variant="secondary" className='bg-red-600 text-white' onClick={logout}>Logout</Button>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/">Login</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={handleChangeTheme}
                    style={{ cursor: 'pointer' }}
                  >
                    {theme === 'light' ? '🌙' : '☀️'}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )
      }
    </>
  )
}

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/movies' element={
                <PrivateRoute>
                  <Movies />
                </PrivateRoute>
              }> </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
