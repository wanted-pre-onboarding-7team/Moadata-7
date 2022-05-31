import { useRecoilValue, useResetRecoilState } from 'recoil'
import { useMount } from 'react-use'

import { filteredListState } from './state'

import styles from './managePage.module.scss'

import SEO from 'components/SEO'
import Search from './Search'
import Table from './Table'

const ManagePage = () => {
  const filteredList = useRecoilValue(filteredListState)
  const resetFilteredList = useResetRecoilState(filteredListState)

  useMount(() => resetFilteredList())

  return (
    <>
      <SEO title='회원관리' />
      <nav className={styles.subNav}>홈 &nbsp; &gt; &nbsp; 회원관리</nav>
      <h1 className={styles.title}>회원관리</h1>
      <h2 className={styles.subTitle}>회원검색</h2>
      <Search />
      <h2 className={styles.subTitle}>전체 총 {filteredList.length}명의 회원이 검색되었습니다.</h2>
      <Table />
    </>
  )
}

export default ManagePage
