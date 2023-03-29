'use client'
import api from '@/app/dummyApi'
import SeeMore from '@/app/SeeMore'

export default function SavedJobsSeeMore({ params }) {
    const { seeMore: id } = params
    const currentJob = api.find(job => job.id === id)

    return (
        <SeeMore {...currentJob}></SeeMore>
    )
}