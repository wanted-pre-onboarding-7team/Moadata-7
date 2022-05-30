import { atom } from 'recoil'

export interface IUserInfo {
  member_seq: string
  crt_ymdt: string
  id: string
}

export const userInfoState = atom<IUserInfo>({
  key: '#userInfoState',
  default: { member_seq: '', crt_ymdt: '', id: '' },
})
