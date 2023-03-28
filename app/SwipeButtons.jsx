import Image from 'next/image'
import heartIcon from 'public/icons/heart-outlined.svg'
import returnIcon from 'public/icons/return.svg'
import crossIcon from 'public/icons/cross.svg'
import './globalStyles/components/buttons.css'

export default function SwipeButtons({ onSwipe, currentJob, onGoBack }) {
    return (
        <div className="swipe-buttons">
            <button className="button icon" onClick={() => onGoBack()}>
                <Image src={returnIcon} alt="Ångra"></Image>
            </button>
            <button className="button icon" onClick={() => onSwipe('up', currentJob.id)}>
                <Image src={heartIcon} alt="Spara jobb"></Image>
            </button>
            <button className="button icon" onClick={() => onSwipe('down', currentJob.id)}>
                <Image src={crossIcon} alt="Spara inte jobb"></Image>
            </button>
        </div>
    )
}