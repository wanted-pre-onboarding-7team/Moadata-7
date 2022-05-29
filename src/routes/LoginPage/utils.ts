export const idRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}$/
export const pwRegExp =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[\]{};':",.<>/?|])[a-zA-Z0-9`~!@#$%^&*()\-_=+[\]{};':",.<>/?|]{8,}$/

export const errorMsgSet = {
  id: '아이디는 6~20자의 영문자 또는 숫자의 조합입니다.',
  pw: '비밀번호는 8자 이상의 영문, 숫자, 특수문자의 조합입니다.',
}

export const INPUT_INIT = {
  id: { value: '', isValid: false, warning: false, displayMessage: false },
  pw: { value: '', isValid: false, warning: false, displayMessage: false },
}
