import { Outlet } from 'react-router'

function Layout() {
  //헤더 푸터 레이아웃에 넣기
  return (
    <>
      <div>헤더</div>
      <Outlet />
      <div>푸터</div>
    </>
  )
}

export default Layout
