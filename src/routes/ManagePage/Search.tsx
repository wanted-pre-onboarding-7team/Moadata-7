import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import dayjs from 'dayjs'

import { filteredListState, memberListState } from './state'

import styles from './managePage.module.scss'

import Button from 'components/Button'

const dateList = { today: '오늘', oneWeek: '1주일', base: '전체' }

const TodayDate = dayjs().format('YYYY-MM-DD')
const OneWeekDate = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
const BaseDate = dayjs().format('2022-02-26')

const Search = () => {
  const [memberId, setMemberId] = useState<string>('')
  const [memberSeq, setMemberSeq] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [dateValidation, setDateValidation] = useState<boolean>()

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
    if (!memberId && !memberSeq && !startDate && !endDate) {
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

    const RegDateFmt = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const foamCheck = RegDateFmt.test(startDate) || RegDateFmt.test(endDate)

    if (foamCheck) {
      if (startDate && endDate) {
        filteredList = filteredList.filter((member) => {
          const joinDate = dayjs(member.crt_ymdt).format('YYYY-MM-DD')
          return joinDate >= startDate && joinDate <= endDate
        })
      }

      if (startDate && !endDate) {
        setEndDate(TodayDate)

        filteredList = filteredList.filter((member) => {
          const joinDate = dayjs(member.crt_ymdt).format('YYYY-MM-DD')
          return joinDate >= startDate && joinDate <= TodayDate
        })
      }

      if (!startDate && endDate) {
        setStartDate(BaseDate)

        filteredList = filteredList.filter((member) => {
          const joinDate = dayjs(member.crt_ymdt).format('YYYY-MM-DD')
          return joinDate >= BaseDate && joinDate <= endDate
        })
      }
    }

    // handleDateValidation()
    setFilteredList(filteredList)
  }

  // const handleDateValidation = () => {
  //   const validation = /([0-9]{4})-([0-9]{2})-([0-9]+)/
  //   const foamCheck = (validation.test(startDate) && startDate.length) || (validation.test(endDate) && endDate.length)

  //   if (!foamCheck) {
  //     setDateValidation(true)
  //   } else {
  //     setDateValidation(false)
  //   }
  // }

  const handleResetClick = () => {
    setMemberId('')
    setMemberSeq('')
    resetFilteredList()
    setStartDate('')
    setEndDate('')
  }

  const handleSelectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = event.currentTarget
    const { today, oneWeek, base } = dateList

    if (innerText === today) {
      setStartDate(TodayDate)
      setEndDate(TodayDate)
    }

    if (innerText === oneWeek) {
      setStartDate(OneWeekDate)
      setEndDate(TodayDate)
    }

    if (innerText === base) {
      setStartDate(BaseDate)
      setEndDate(TodayDate)
    }
  }

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget
    const RegNotNum = /[^0-9]/g
    const onlyNum = value.replace(RegNotNum, '')

    let DataFormat: any
    let RegDateFmt: any

    if (onlyNum.length <= 6) {
      DataFormat = '$1-$2'
      RegDateFmt = /([0-9]{4})([0-9]+)/
    } else if (onlyNum.length <= 8) {
      DataFormat = '$1-$2-$3'
      RegDateFmt = /([0-9]{4})([0-9]{2})([0-9]+)/
    }

    const newDate = onlyNum.replace(RegDateFmt, DataFormat)

    if (name === 'start') setStartDate(newDate)
    if (name === 'end') setEndDate(newDate)
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
          <input
            type='text'
            name='start'
            className={styles.periodInput}
            value={startDate}
            maxLength={10}
            onChange={handleDateChange}
            placeholder='전체'
          />
          <span> ~ </span>
          <input
            type='text'
            name='end'
            className={styles.periodInput}
            value={endDate}
            maxLength={10}
            onChange={handleDateChange}
            placeholder='전체'
          />
          <input
            type='date'
            name='start'
            className={styles.periodInput}
            value={startDate}
            maxLength={10}
            onChange={handleDateChange}
            placeholder='전체'
          />
          {dateValidation && <span className={styles.dateError}>YYYY-MM-DD 형식으로 입력해주세요.</span>}
        </label>
        <Button size='small' primary onClick={handleSelectDate}>
          {dateList.today}
        </Button>
        <Button size='small' primary onClick={handleSelectDate}>
          {dateList.oneWeek}
        </Button>
        <Button size='small' primary onClick={handleSelectDate}>
          {dateList.base}
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
