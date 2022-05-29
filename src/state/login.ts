import { atom } from 'recoil'

export const loggedInAtom = atom<boolean>({
  key: '#loggedInAtom',
  default: false,
})
