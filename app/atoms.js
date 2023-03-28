import { atomWithStorage } from 'jotai/utils'
import api from './dummyApi'

export const savedJobsAtom = atomWithStorage('saved-jobs', [])

export const avaliableJobsAtom = atomWithStorage('avaliable-jobs', api)

export const loggedInAtom = atomWithStorage('is-logged-in', false)