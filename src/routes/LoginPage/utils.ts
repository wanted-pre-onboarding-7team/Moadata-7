export const idRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/
export const pwRegExp =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[\]{};':",.<>/?|])[a-zA-Z0-9`~!@#$%^&*()\-_=+[\]{};':",.<>/?|]{8,}$/

export const errorMsgSet = {
  idGuide: '아이디는 8~20자의 영문자 또는 숫자의 조합입니다.',
  pwGuide: '비밀번호는 8자 이상의 영문, 숫자, 특수문자의 조합입니다.',
  loginFailed: '아이디 또는 비밀번호가 다릅니다.',
}

export const INPUT_INIT = {
  value: '',
  isValid: true,
  warning: false,
}

export const ERROR_INIT = {
  warning: false,
  message: '',
  isLoginActive: false,
}
