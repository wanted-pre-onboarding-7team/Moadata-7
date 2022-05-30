## 1. 정돈 및 정렬된 UI 작업

- [x] header, gnb을 Layout에 적용 시켜 공통된 레이아웃 제공 및 라우터 설정
```tsx
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
```

- [x]  Layout, Font 크기 첨부된 디자인을 참고 작업

## 2. 리스트 화면처리
- [x] 메뉴들을  model에 따로 정리하여 map 사용해 리스트 처리

```tsx
{GNB_LIST.map((item) => {
            return (
              <li key={item.key}>
                <NavLink to={item.path} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                  {item.title}
                  <div className={styles.sideLine} />
                </NavLink>
              </li>
            )
          })}
```

## 3. 회원 상세 페이지, 회원관리 및 페이지 이동 
- [x] 특정 회원 정보 useParams으로 받은 후 recoil로 상태 관리 적용
```tsx
 const params = useParams()
  const user = MEMBER_LIST.filter((obj) => {
    return obj.member_seq === params.memberSeq
  })[0]
```

- [x] 회원관리 클릭시 이전 페이지로 이동

```tsx
const navigate = useNavigate()
  useMount(() => {
    navigate(`/member/manage/${params.memberSeq}`, { replace: true })
    setUserInfo(user)
  })
```

- [x] 로그인 상태에 따라서 redirect 주기 
localStorage 로그인 상태를 관리  로그인 상태가 아니면 로그인 페이지로 리다이렉트
만료 시간 지정 후 시간이 지나면 로그아웃(로컬스토리지 삭제) 처리 
```tsx
const useCheckLogin = () => {
  const navigate = useNavigate()
  const loginInfo = store.get('login')
  const loginCheck = useCallback(() => {
    if (loginInfo === undefined) {
      navigate('/login')
    }
    if (dayjs().isAfter(loginInfo.expire)) {
      store.remove('login')
      navigate('/login')
    }
  }, [loginInfo, navigate])

  const logOut = useCallback(() => {
    store.remove('login')
    navigate('/login')
  }, [navigate])

  return { loginCheck, logOut }
}

```

## 공통 컴포넌트 관리
- [x] 버튼, input 같이 공용으로 사용 되는 컴포넌트 분리 및 적용