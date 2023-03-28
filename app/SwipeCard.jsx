'use client'
import dynamic from 'next/dynamic'

export default function SwipeCard({ companyName, jobTitle, shortDescription, linkToJobApplication, tags, img, id, onSwipe }) {

    const TinderCard = dynamic(
        () => import('react-tinder-card'),
        { ssr: false }
    )

    return (
        <TinderCard
            className="swipe"
            onSwipe={direction => onSwipe(direction, id)}
        >
            <div className="swipe__image" style={{backgroundImage: `url(${img.src})`}}>
                <div className="swipe__overlay">
                    <div className="swipe__header">
                        <span>swipe</span>
                            <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 18L18 2L34 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        <span>north</span>
                    </div>
                    <div className="swipe__footer">
                        <div className="swipe__text">
                            <h3>{companyName}</h3>
                            <h4>{jobTitle}</h4>
                        </div>
                        <button className="swipe__see-more">
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </TinderCard>
    )
}