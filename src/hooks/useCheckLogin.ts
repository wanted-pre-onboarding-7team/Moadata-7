import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import store from 'store'
import dayjs from 'dayjs'

const useCheckLogin = () => {
  const navigate = useNavigate()
  const loginInfo = store.get('login')

  const loginCheck = useCallback(() => {
    if (loginInfo === undefined) {
      navigate('/login')
    } else if (dayjs().isAfter(loginInfo.expire)) {
      store.remove('login')
      navigate('/login')
    }
  }, [loginInfo, navigate])

  const logOut = useCallback(() => {
    store.remove('login')
    navigate('/login')
  }, [navigate])

  const userId = useMemo(() => {
    if (loginInfo === undefined) return null
    return loginInfo.id
  }, [loginInfo])

  return { loginCheck, logOut, userId }
}

export { useCheckLogin }
