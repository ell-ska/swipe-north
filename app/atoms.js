import { atomWithStorage } from 'jotai/utils'
import api from './dummyApi'
import getAvailableTags from './getAvaliableTags'

export const savedJobsAtom = atomWithStorage('saved-jobs', [])

export const loggedInAtom = atomWithStorage('is-logged-in', false)

export const tagsAtom = atomWithStorage('tags', getAvailableTags())

export const avaliableJobsAtom = atomWithStorage('avaliable-jobs', api)
// const tags = useAtom(tagsAtom)
// export const avaliableJobsAtom = atomWithStorage('avaliable-jobs', getFilteredJobs(tags))