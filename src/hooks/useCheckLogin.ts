import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import store from 'store'

const useCheckLogin = () => {
  const navigate = useNavigate()
  const loginInfo = store.get('login')
  const loginCheck = useCallback(() => {
    if (loginInfo === undefined) {
      navigate('/login')
    }
  }, [loginInfo, navigate])

  const logOut = useCallback(() => {
    store.remove('login')
    navigate('/login')
  }, [navigate])

  return { loginCheck, logOut }
}

export { useCheckLogin }
