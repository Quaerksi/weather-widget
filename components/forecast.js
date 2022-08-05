import useStore from '../lib/store'
import styles from './forecast.module.css'
import {imageName} from '../lib/calculations'
import Image from 'next/image'

export default function Forecast (props){

    const forecast = useStore((state) => state.forecast)

    return (
        <>
        <div className={`${styles.forecastFlex}`}>
            <div className={`${styles.forecastGrid} ${styles.forecastGridHeadlines}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={`${styles.currentDataImage}`}>
                        <Image
                            src="/images/umbrella-solid.svg" 
                            alt="humidity"
                            layout="fixed"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>High</div>     
                    <div>Low</div>
                </div>
            {forecast.map((day, index) => (
                <div key={index} className={`${styles.forecastGrid} ${styles.forecastGridData}`}>
                    <p className={`${styles.dayHeadline}`}>{day.day}</p>
                        <div className={`${styles.imageSmall}`}>
                            <Image
                                src={`/images/${imageName(day.cloudcover, day.conditions)}`} 
                                alt="cloudcover"
                                layout="fixed"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className={`${styles.imageBig}`}>
                            <Image
                                src={`/images/${imageName(day.cloudcover, day.conditions)}`} 
                                alt="cloudcover"
                                layout="fixed"
                                width={50}
                                height={50}
                            />
                        </div>
                    <div className={`${styles.oneWordPerLine}`}>{day.conditions}</div>
                    <div><span className={`${styles.imageHumiditySmallScreen}`}>
                        <Image
                            src="/images/umbrella-solid.svg" 
                            alt="humidity"
                            layout="fixed"
                            width={15}
                            height={15}
                        />
                        </span>
                        {day.precipitationTruth}%</div>
                    <div className={`${styles.tempMax}`}>{day.tempmax} &#8451;</div>     
                    <div className={`${styles.tempMin}`}>{day.tempmin} &#8451;</div>
                </div>
            ))}
        </div>
        </>
        )
}