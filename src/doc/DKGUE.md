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