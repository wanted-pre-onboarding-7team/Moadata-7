import { ChangeEvent, MouseEvent, useState } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import dayjs from 'dayjs'

import { filteredListState } from './state'

import styles from './managePage.module.scss'

import Button from 'components/Button'
import Input from 'components/Input'
import { MEMBER_LIST } from 'model'

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
      filteredList = filteredList.filter((member) => member.member_seq.includes(memberSeq))
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
        <Input value={memberId} onChage={handleIdChange} id='1' text='로그인 ID' placeholder='전체' />
        <Input value={memberSeq} onChage={handleSeqChange} id='2' text='회원번호' placeholder='전체' />
        <Button size='large' onClick={handleResetClick}>
          필터 초기화
        </Button>
      </div>
      <div className={styles.period}>
        <div className={styles.periodInput}>
          <Input value={[startDate, endDate]} id='3' text='조회기간' placeholder='전체' />
        </div>
        <div className={styles.periodButton}>
          <Button size='normal' onClick={handleSelectDate}>
            오늘
          </Button>
          <Button size='normal' onClick={handleSelectDate}>
            1주일
          </Button>
          <Button size='normal' onClick={handleSelectDate}>
            전체
          </Button>
        </div>
      </div>
      <div className={styles.searchButtons}>
        <Button size='large' primary onClick={handleSearchClick}>
          검색
        </Button>
      </div>
    </div>
  )
}
export default Search
