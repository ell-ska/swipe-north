import styles from '../../globalStyles/components/see-more.css'
import taxi from '../../../public/images/jobs/taxi-mobile.jpg'
import {Tag} from '../../Tag'
import '../../globalStyles/components/buttons.css'
import trashcan from '/public/icons/trashcan.svg'
import arrowLeft from '/public/icons/arrow-left.svg'
import Image from "next/image"

export default function SeeMore() {
    return (
       <>
        <div className='see-more-container'> 
            <div className='see-more-image' style={{backgroundImage: `url(${taxi.src})`}}>
                <button className='arrow-left'><Image src={arrowLeft} alt=''/></button>
                <button className='trashcan'><Image src={trashcan} alt=''/></button>
            </div>
            <div className='see-more-content'>
                <p className='see-more-job'>Skellefteå Taxi</p>
                <p className='see-more-jobtitle'>Taxichaufför</p>
                <div className='see-more-tags'>
                    <Tag color='blue'>Taxi</Tag>
                    <Tag color='green'>Körkort</Tag>
                </div>
                <div className='see-more-description'>
                    <p className='see-more-beskrivning'>Beskrivning</p>
                    <p className='see-more-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla deleniti debitis dolor veniam mollitia eum assumenda, quidem repellendus beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla deleniti debitis dolor veniam mollitia eum assumenda, quidem repellendus beatae.</p>
                </div>
                <button className='button see-more-button'>Sök jobbet</button>
            </div>

        </div>
       </>
    )
}