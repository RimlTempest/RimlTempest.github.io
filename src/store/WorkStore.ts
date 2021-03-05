import { atom } from 'recoil'
import { WorkType } from '../types/WorkTypes';

export type WorkState = {
  workList: WorkType
}

const initialState: WorkState = {
  workList: {
    image: 'https://via.placeholder.com/150',
    appName: '',
    description: ''
  }
}

export const workState = atom({
  key: 'work',
  default: initialState
})