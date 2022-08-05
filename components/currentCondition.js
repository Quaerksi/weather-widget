import useStore from '../lib/store'
import styles from './currentCondition.module.css'
import {imageName} from '../lib/calculations'
import Image from 'next/image'

export default function CurrentCondition (props){

    const current = useStore((state) => state.current)

    return (
        <>
            <div className={`${styles.currentConditionsGrid}`}>
            <div className={`${styles.currentConditionsHeadline}`}>Current</div>  
                <div className={`${styles.currentConditionsLeftSite}`}>
                        <div className={`${styles.currentConditionsLeftSiteImage}`}>
                            <Image
                                src={`/images/${imageName(current.cloudcover, current.conditions)}`}
                                alt="cloudcover"
                                width={90}
                                height={90}
                            />
                        </div>
                    <div className={`${styles.cloudyInfo}`}>{current.conditions}</div>
                </div>
                
                <div className={`${styles.temperature}`}>{current.temp}<span> &#8451; </span></div>
                <div className={`${styles.currentConditionPortion} ${styles.humidity}`}>
                    <Image
                        src="/images/raindrop.png"
                        alt="humidity"
                        width={20}
                        height={20}
                    />
                    <div className={`${styles.currentData}`}>{current.humidity} %</div>
                </div>
                <div className={`${styles.currentConditionPortion} ${styles.probabilityOfRain}`}>
                    <Image
                        src="/images/umbrella-solid.svg"
                        alt="umbrella humidity"
                        width={20}
                        height={20}
                    />
                    <div className={`${styles.currentData}`}>{current.precipitationTruth} %</div>
                </div>
                <div className={`${styles.currentConditionPortion} ${styles.windSpeed}`}>
                    <Image
                        src="/images/wind-solid.svg"
                        alt="umbrella humidity"
                        width={20}
                        height={20}
                    />
                    <div className={`${styles.currentData}`}>{current.windSpeed} <sup>km</sup>/<sub>h</sub></div>
                </div>
            </div>
        </>
    )
}