import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Main from '@/features/main/Main'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 레이아웃 컴포넌트를 모든 페이지에 적용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
