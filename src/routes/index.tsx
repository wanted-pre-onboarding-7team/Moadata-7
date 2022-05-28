import { Route, Routes } from 'react-router-dom'
import Layout from './_shared/Layout'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import ManagePage from './ManagePage'
import ManageDetailPage from './ManageDetailPage'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='member/manage' element={<ManagePage />} />
        <Route path='member/manage/detail' element={<ManageDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
