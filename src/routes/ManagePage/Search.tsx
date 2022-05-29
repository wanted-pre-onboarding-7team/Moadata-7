import { ChangeEvent, MouseEvent, useState } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import dayjs from 'dayjs'

import { MEMBER_LIST, filteredListState } from './state'

import styles from './managePage.module.scss'

import Button from 'components/Button'

const todayDate = dayjs().format('YYYY-MM-DD')
const oneWeekDate = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
const baseDate = dayjs().format('2022-02-26')

const Search = () => {
  const [memberId, setMemberId] = useState<string>('')
  const [memberSeq, setMemberSeq] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const setFilteredList = useSetRecoilState(filteredListState)
  const resetFilteredList = useResetRecoilState(filteredListState)

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.currentTarget.value)
  }

  const handleSeqChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberSeq(e.currentTarget.value)
  }

  const handleSelectDate = (event: MouseEvent<HTMLButtonElement>) => {
    const { innerText } = event.currentTarget

    if (innerText === '오늘') {
      setStartDate(todayDate)
      setEndDate(todayDate)
    }

    if (innerText === '1주일') {
      setStartDate(oneWeekDate)
      setEndDate(todayDate)
    }

    if (innerText === '전체') {
      setStartDate(baseDate)
      setEndDate(todayDate)
    }
  }

  const handleResetClick = () => {
    setMemberId('')
    setMemberSeq('')
    setStartDate('')
    setEndDate('')
    resetFilteredList()
  }

  const handleSearchClick = () => {
    if (!memberId && !memberSeq && !startDate && !endDate) {
      resetFilteredList()

      return
    }

    let filteredList = MEMBER_LIST

    if (memberId) {
      filteredList = filteredList.filter((member) => member.id.toLowerCase().includes(memberId.toLowerCase()))
    }

    if (memberSeq) {
      filteredList = filteredList.filter((member) => member.member_seq === memberSeq)
    }

    if (startDate && endDate) {
      filteredList = filteredList.filter((member) => {
        const memberDate = dayjs(member.crt_ymdt).format('YYYY-MM-DD')

        return memberDate >= startDate && memberDate <= endDate
      })
    }

    setFilteredList(filteredList)
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
          <input type='text' name='start' value={startDate} placeholder='전체' disabled />
          <span> ~ </span>
          <input type='text' name='end' value={endDate} placeholder='전체' disabled />
        </label>
        <Button size='small' primary onClick={handleSelectDate}>
          오늘
        </Button>
        <Button size='small' primary onClick={handleSelectDate}>
          1주일
        </Button>
        <Button size='small' primary onClick={handleSelectDate}>
          전체
        </Button>
      </div>
      <div className={styles.searchButtons}>
        <Button size='nomal' primary onClick={handleResetClick}>
          필터 초기화
        </Button>
        <Button size='nomal' primary onClick={handleSearchClick}>
          검색
        </Button>
      </div>
    </div>
  )
}
export default Search
