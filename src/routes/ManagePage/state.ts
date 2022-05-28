import { atom } from 'recoil'

const MEMBER_LIST = [
  { member_seq: '136', crt_ymdt: '2022-02-26 12:40:14', id: 'yhorong21' },
  { member_seq: '328', crt_ymdt: '2022-04-16 07:19:31', id: 'seoltosil95' },
  { member_seq: '380', crt_ymdt: '2022-04-17 03:00:23', id: 'yujaemin92' },
]

interface IMember {
  member_seq: string
  crt_ymdt: string
  id: string
}

export const memberListState = atom<IMember[]>({
  key: '#memberListState',
  default: MEMBER_LIST,
})

export const filteredListState = atom<IMember[]>({
  key: '#filteredListState',
  default: MEMBER_LIST,
})
