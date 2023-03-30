'use client'
import { notFound } from 'next/navigation'
import api from '@/app/dummyApi'
import SeeMore from '@/app/SeeMore'

export default function SavedJobsSeeMore({ params }) {
    const { seeMore: id } = params
    const currentJob = api.find(job => job.id === id)

    if (!currentJob) {
        notFound()
    }

    return (
        <SeeMore {...currentJob} previousPage={'/saved-jobs'} ></SeeMore>
    )
}