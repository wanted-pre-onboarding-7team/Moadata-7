import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loggedInAtom } from 'state/login'

const useCheckLogin = () => {
  const IsLoggedIn = useRecoilValue(loggedInAtom)
  const navigate = useNavigate()

  const loginCheck = useCallback(() => {
    if (!IsLoggedIn) {
      navigate('/login')
    }
  }, [navigate, IsLoggedIn])

  return { loginCheck }
}

export { useCheckLogin }
