import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
