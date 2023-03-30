import { notFound } from 'next/navigation'
import SeeMore from '../SeeMore'
import api from '../dummyApi'

export default function HomeSeeMore({ params }) {
    const { seeMore: id } = params
    const currentJob = api.find(job => job.id === id)

    if (!currentJob) {
        notFound()
    }

    return (
        <SeeMore {...currentJob} previousPage={'/'} ></SeeMore>
    )
}