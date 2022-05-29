## 1. 정돈 및 정렬된 UI 작업

- [x] Data Cardheader, gnb을 Layout에 적용 시켜 공통된 레이아웃 제공 및 라우터 설정
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

## 3. 회원관리 및 페이지 이동
- [x] 특정 회원 정보 useParams으로 받은 후 recoil로 상태 관리 적용
```tsx
 const params = useParams()
  const user = MEMBER_LIST.filter((obj) => {
    return obj.member_seq === params.memberSeq
  })[0]
```

- [x] 회원관리 클릭시 이전 페이지로 이동
- [] 로그인 상태에 따라서 redirect 주기 (합친 후 적용)
```tsx
const navigate = useNavigate()
  useMount(() => {
    navigate(`/member/manage/${params.memberSeq}`, { replace: true })
    setUserInfo(user)
  })
```
