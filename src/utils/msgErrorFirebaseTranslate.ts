import { errors } from '../data/msgErrorFirebase'

export function msgErrorFirebaseTranslate(errCode: any) {
  return errors[errCode];
}