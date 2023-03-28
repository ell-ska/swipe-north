import Image from "next/image"
import heartIcon from 'public/icons/heart-outlined.svg'
import returnIcon from 'public/icons/return.svg'
import crossIcon from 'public/icons/cross.svg'
import './globalStyles/components/buttons.css'

export default function SwipeButtons() {
    return (
        <div className="swipe-buttons">
            <button className="button icon">
                <Image src={returnIcon} alt="Ångra"></Image>
            </button>
            <button className="button icon">
                <Image src={heartIcon} alt="Spara jobb"></Image>
            </button>
            <button className="button icon">
                <Image src={crossIcon} alt="Spara inte jobb"></Image>
            </button>
        </div>
    )
}