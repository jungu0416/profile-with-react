import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Main from '@/features/main/Main'
import User from '@/features/user/User'
import Homeserver from '../../features/homeserver/Homeserver'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 레이아웃 컴포넌트를 모든 페이지에 적용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/whoAmI" element={<User />} />
          <Route path="/whyHomeserver" element={<Homeserver />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
