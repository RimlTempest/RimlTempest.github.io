import { atom } from 'recoil'
import { WorkType } from '../types/WorkTypes';

export type WorkState = {
  workList: WorkType
}

const initialState: WorkState = {
  workList: {
    image: '/noimage.jpg',
    appName: '',
    description: ''
  }
}

export const workState = atom({
  key: 'work',
  default: initialState
})