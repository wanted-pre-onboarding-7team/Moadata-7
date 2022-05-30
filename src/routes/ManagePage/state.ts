import { MEMBER_LIST } from 'model'
import { atom } from 'recoil'

interface IMember {
  member_seq: string
  crt_ymdt: string
  id: string
}

export const filteredListState = atom<IMember[]>({
  key: '#filteredListState',
  default: MEMBER_LIST,
})
