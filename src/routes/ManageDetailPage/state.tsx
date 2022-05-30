import { atom } from 'recoil'

export interface IUserInfo {
  member_seq: string
  crt_ymdt: string
  id: string
}

export const userInfoState = atom<IUserInfo>({
  key: 'userInfo',
  default: { member_seq: '', crt_ymdt: '', id: '' },
})
