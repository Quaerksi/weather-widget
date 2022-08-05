import Layout from '../components/layout'
import CurrentCondition from '../components/currentCondition'
import Forecast from '../components/forecast'
import useStore from '../lib/store'
import * as Calculations from '../lib/calculations'
import styles from '../styles/widget.module.css'
import layoutStyles from '../components/layout.module.css'
import { useRef, useState, useEffect } from 'react';

const FORECAST_DAYS = 5;

export default function Widget(props) {

  // setLocation
  const [validLocation, setValidLocation] = useState(true);

  //ref for scroll to
  const scrolllToWidget = useRef(null);

  
  /***************current Data start********************************************************************** */
  const addCurrent = useStore((state) => state.addCurrent)
  const current = useStore((state) => state.current)
  /***************current Data end********************************************************************** */

  /***************forecast Data start********************************************************************** */
  const addForecast = useStore((state) => state.addForecast)
  const removeForecast = useStore((state) => state.removeForecast)
  /***************forecast Data end********************************************************************** */
    
  const handleData = location => {

    // key=3C8J5WCQHMGA7K7V8C37E2E52
    // another key=FK5HXPC57W977BW6Q2732WJHX
    // queries are limited
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3C8J5WCQHMGA7K7V8C37E2E52&contentType=json`).then(res=>{
    
      if(res.ok){
        setValidLocation(state => true)
        return res.json()
      }
       
      setValidLocation(state => false)
      throw(Error)
    }).then(data=>{
      
      // console.log(data)
      
      if(data.address){

        scrolllToWidget.current.scrollIntoView();
        /***************current Data start********************************************************************** */

        let precipitationTruth = data.currentConditions.precipprob ? Math.round(data.currentConditions.precipprob) : 0
        let windspeed = data.currentConditions.windspeed ? Calculations.milesToKilometers(data.currentConditions.windspeed) :0
        let cloudcover = data.currentConditions.cloudcover ? Math.round(data.currentConditions.cloudcover) : 0

        addCurrent({
          resolvedLocation: data.resolvedAddress,
          temp: Calculations.FahrenheitToDegree(data.currentConditions.temp),
          humidity: Math.round(data.currentConditions.humidity),
          precipitationTruth: precipitationTruth,
          windSpeed: windspeed,
          conditions: data.currentConditions.conditions,
          cloudcover: cloudcover
        })

        /***************current Data end********************************************************************** */

        /***************forecast Data start********************************************************************** */

        removeForecast();

        for(let i = 0; i <= FORECAST_DAYS; i++){

          let day = ''
          const tempMax = Calculations.FahrenheitToDegree(data.days[i].tempmax)
          const tempMin = Calculations.FahrenheitToDegree(data.days[i].tempmin)
          let precipitationTruth = data.days[i].precipprob ? Math.round(data.days[i].precipprob) : 0
          let cloudcover = data.days[i].cloudcover ? Math.round(data.days[i].cloudcover) : 0

          if(i == 0){

            day = 'today'
            addForecast({day: day, precipitationTruth: precipitationTruth, cloudcover: cloudcover, conditions: data.days[i].conditions, tempmax: tempMax, tempmin: tempMin})
          }
          else{
            
            day = Calculations.getWeekday(data.days[i].datetime)
            addForecast({day: day,  precipitationTruth: precipitationTruth, cloudcover: cloudcover, conditions: data.days[i].conditions, tempmax: tempMax, tempmin: tempMin})
          }
        }
          
        /***************forecast Data end********************************************************************** */

      } else {
        console.log('Pleae Enter a valid Location')
        setValidLocation(state => false)
      }
    })
  }
  
  const submitLocation = (e) => {

    e.preventDefault();

    const location = e.target.location.value;

    console.log('Submit')

    if(location){
      handleData(location)

    } else { 
      console.log(`Enter a location`)
      setValidLocation(state => false)
    }
  } 

  useEffect(() => {
    handleData('Berlin');
  }, []);

  return (
    <Layout>
      <p>Hello Are you looking for weather data?</p>
      <form mehtod="POST" id="getWeatherData" onSubmit={submitLocation} className={`${layoutStyles.form}`}>
          <label htmlFor="location" className={`${styles.marginRight}`}>Weather for location:</label>
          <div>
            <input type="text" name="location" className={`${styles.marginRight}`} placeholder="Berlin"></input>
            <button type="submit">Search</button>
          </div>
      </form>  
      <div className={`${styles.resolvedAddress}`}>
        {!validLocation && <p  style={{color: "red"}}>Please Enter a valid Location</p>}
      </div>
      <div ref={scrolllToWidget} className={`${styles.widget}`}>
          <div className={`${styles.currentConditionsHeader}`}>
            <h2 className={`${styles.resolvedLocation}`}>{current.resolvedLocation}</h2>
          </div>
          <CurrentCondition/>
          <Forecast />
      </div>
    </Layout>
    )
}
