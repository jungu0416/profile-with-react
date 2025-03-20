import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
  //헤더 푸터 레이아웃에 넣기
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
