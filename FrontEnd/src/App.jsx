import { Footer } from "./components/Footer"
import { NavBar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFoundPage"
import { useRouter } from "./Hooks/useRouter"
import { Request } from "./pages/Request"
import { ServicesPage } from "./pages/Services"
import { ProjectsPage } from "./pages/Projects"

function App() {
  const { currentPath } = useRouter()

  let page = <NotFoundPage />
  if (currentPath === '/') {
    page = <Home />
  } else if (currentPath === '/request') {
    page = <Request />
  } else if (currentPath === '/services') {
    page = <ServicesPage />
  } else if (currentPath === '/projects') {
    page = <ProjectsPage />
  }

  return (
    <>
      <NavBar />
      {page}
      <Footer />
    </>
  )
}

export default App
