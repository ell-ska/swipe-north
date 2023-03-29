import SeeMore from '../SeeMore'
import api from '../dummyApi'

export default function HomeSeeMore({ params }) {
    const { seeMore: id } = params
    const currentJob = api.find(job => job.id === id)

    return (
        <SeeMore {...currentJob} previousPage={'/'} ></SeeMore>
    )
}