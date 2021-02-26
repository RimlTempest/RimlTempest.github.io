import { atom } from 'recoil'
import { WorkType } from '../types/WorkTypes';

export type WorkState = {
  workList: WorkType
}

const initialState: WorkState = {
  workList: null
}

export const workState = atom({
  key: 'work',
  default: initialState
})