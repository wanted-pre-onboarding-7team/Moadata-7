import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import dayjs from 'dayjs'

import { filteredListState } from './state'

import styles from './managePage.module.scss'

const getDate = (date: string) => dayjs(date).format('YYYY-MM-DD')

const Table = () => {
  const filteredList = useRecoilValue(filteredListState)

  const navigate = useNavigate()

  const handleManageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { memberSeq } = e.currentTarget.dataset

    navigate(`/member/manage/${memberSeq}`)
  }

  return (
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
        {filteredList.map((el) => (
          <tr key={el.member_seq}>
            <td>{el.member_seq}</td>
            <td>{getDate(el.crt_ymdt)}</td>
            <td>{el.id}</td>
            <td>
              <button
                type='button'
                className={styles.detailManage}
                data-member-seq={el.member_seq}
                onClick={handleManageClick}
              >
                관리
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
