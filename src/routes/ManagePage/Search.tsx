import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import { filteredListState, memberListState } from './state'

import styles from './managePage.module.scss'

import Button from 'components/Button'
import Input from 'components/Input'

const Search = () => {
  const [memberId, setMemberId] = useState('')
  const [memberSeq, setMemberSeq] = useState('')

  const memberList = useRecoilValue(memberListState)
  const [, setFilteredList] = useRecoilState(filteredListState)
  const resetFilteredList = useResetRecoilState(filteredListState)

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.currentTarget.value)
  }

  const handleSeqChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberSeq(e.currentTarget.value)
  }

  const handleSearchClick = () => {
    if (!memberId && !memberSeq) {
      resetFilteredList()

      return
    }

    let filteredList = memberList

    if (memberId) {
      filteredList = filteredList.filter((member) => member.id.toLowerCase().includes(memberId.toLowerCase()))
    }

    if (memberSeq) {
      filteredList = filteredList.filter((member) => member.member_seq === memberSeq)
    }

    setFilteredList(filteredList)
  }

  const handleResetClick = () => {
    setMemberId('')
    setMemberSeq('')
    resetFilteredList()
  }

  return (
    <div className={styles.search}>
      <div className={styles.member}>
        <label>
          로그인 ID
          <input type='text' value={memberId} placeholder='전체' onChange={handleIdChange} />
        </label>
        <label>
          회원번호
          <input type='text' value={memberSeq} placeholder='전체' onChange={handleSeqChange} />
        </label>
      </div>
      <div className={styles.period}>
        <label>
          조회기간
          <input type='text' className={styles.periodInput} placeholder='전체' disabled />
          <span> ~ </span>
          <input type='text' className={styles.periodInput} placeholder='전체' disabled />
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
        <Button size='normal' primary onClick={handleResetClick}>
          필터 초기화
        </Button>
        <Button size='normal' primary onClick={handleSearchClick}>
          검색
        </Button>
      </div>
    </div>
  )
}
export default Search
