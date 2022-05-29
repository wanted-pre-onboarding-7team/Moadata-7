import { atom } from 'recoil'

interface userInfo {
  member_seq: string
  crt_ymdt: string
  id: string
}

export const userInfoState = atom<userInfo>({
  key: 'userInfo',
  default: { member_seq: '', crt_ymdt: '', id: '' },
})
