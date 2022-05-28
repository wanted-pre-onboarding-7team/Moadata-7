import styles from './managePage.module.scss'

import SEO from 'components/SEO'
import Button from 'components/Button'

const USER_LIST = [
  { member_seq: 130, crt_ymdt: '2022-02-26', id: 'moauser01' },
  { member_seq: 131, crt_ymdt: '2022-02-27', id: 'moauser02' },
  { member_seq: 132, crt_ymdt: '2022-02-28', id: 'moauser03' },
]

const ManagePage = () => {
  return (
    <>
      <SEO title='회원관리' />
      <nav className={styles.subNav}>홈 &gt; 회원관리</nav>
      <h1 className={styles.title}>회원관리</h1>
      <h2 className={styles.subTitle}>회원검색</h2>
      <div className={styles.search}>
        <div className={styles.member}>
          <label>
            로그인 ID
            <input type='text' value='전체' />
          </label>
          <label>
            회원번호
            <input type='text' value='전체' />
          </label>
        </div>
        <div className={styles.period}>
          <label>
            조회기간
            <input type='text' value='전체' />
            <span> ~ </span>
            <input type='text' value='전체' />
          </label>
          <Button size='small' primary>
            오늘
          </Button>
          <Button size='small' primary>
            1주일
          </Button>
          <Button size='small' primary>
            전체
          </Button>
        </div>
        <div className={styles.searchButtons}>
          <Button size='nomal' primary>
            필터 초기화
          </Button>
          <Button size='nomal' primary>
            검색
          </Button>
        </div>
      </div>
      <h2 className={styles.subTitle}>전체 총 5명의 회원이 검색되었습니다.</h2>
      <table className={styles.table}>
        <colgroup>
          <col width='15%' />
          <col width='15%' />
          <col width='15%' />
          <col width='55%' />
        </colgroup>
        <thead>
          <tr>
            <th>회원번호</th>
            <th>가입일</th>
            <th>로그인ID</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {USER_LIST.map((el) => (
            <tr key={el.member_seq}>
              <td>{el.member_seq}</td>
              <td>{el.crt_ymdt}</td>
              <td>{el.id}</td>
              <td>
                <Button size='small' primary>
                  관리
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default ManagePage
