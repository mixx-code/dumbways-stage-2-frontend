import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import { Button } from "./components/ui/button"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./components/ui/navigation-menu"
import PostDetail from "./pages/PostDetail"

function App() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <BrowserRouter>
        <div className="flex py-3 px-7 bg-gray-500 justify-end box-border">
          <NavigationMenu className="">
            <NavigationMenuList className="flex justify-around gap-9 w-72">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/posts">Posts</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<PostDetail />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App

