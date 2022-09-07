import create from "zustand";

 // with Dummy Data
 const useStore = create((set) => ({

    /***************forecast Data start********************************************************************** */

    forecast: [
        {day: '', 
        precipitationTruth: '', 
        cloudcover: '', 
        conditions: '', 
        tempmax: '', 
        tempmin: ''}
    ],
    
    addForecast: (forec) =>
        set((state) => ({
        forecast: [
            ...state.forecast,
            { day: forec.day, precipitationTruth: forec.precipitationTruth, cloudcover: forec.cloudcover, conditions: forec.conditions, 
                tempmax: forec.tempmax, tempmin: forec.tempmin},
        ]
    })),

    removeForecast: () => set(() => ({forecast: []})),

    /***************forecast Data end********************************************************************** */

    
    /*********** Current Start *************************** */
    current: {
        resolvedLocation: '',
        temp: '',
        humidity: '',
        precipitationTruth: '',
        windSpeed: '',
        conditions: '',
        cloudcover: ''
    },

    addCurrent: (cur) =>
        set(state =>({
            current:{
                resolvedLocation: cur.resolvedLocation,
                temp: cur.temp,
                humidity: cur.humidity,
                precipitationTruth: cur.precipitationTruth,
                windSpeed: cur.windSpeed,
                conditions: cur.conditions,
                cloudcover: cur.cloudcover
        }})),
  

    /*********** Current End *************************** */

  }))

//   **************************************************************************************************************
//   *************************** Store with dummy data for developement **********************************************
//   **************************************************************************************************************

//   const useStore = create((set) => ({

//     /***************forecast Data start********************************************************************** */

//     forecast: [
//         {day: 'today', precipitationTruth: 14.3, cloudcover: 50, conditions: 'Overcast', tempmax: 25, tempmin: 16},
//         {day: 'Monday', precipitationTruth: 14.3, cloudcover: 50, conditions: 'Partially cloudy', tempmax: 25, tempmin: 16},
//         {day: 'Tuesday', precipitationTruth: 14.3, cloudcover: 50, conditions: 'Overcast', tempmax: 25, tempmin: 16},
//         {day: 'Wednesday', precipitationTruth: 14.3, cloudcover: 50, conditions: 'rain, Partially cloudy', tempmax: 25, tempmin: 16},
//         {day: 'Thursday', precipitationTruth: 14.3, cloudcover: 50, conditions: 'Overcast', tempmax: 25, tempmin: 16},
//         {day: 'Friday', precipitationTruth: 14.3, cloudcover: 50, conditions: 'Overcast', tempmax: 25, tempmin: 16},
//     ],
    
//     addForecast: (forec) =>
//         set((state) => ({
//         forecast: [
//             ...state.forecast,
//             { day: forec.day, precipitationTruth: forec.precipitationTruth, cloudcover: forec.cloudcover, conditions: forec.conditions, 
//                 tempmax: forec.tempmax, tempmin: forec.tempmin},
//         ]
//     })),

//     removeForecast: () => set(() => ({forecast: []})),

//     /***************forecast Data end********************************************************************** */

    
//     /*********** Current Start *************************** */
//     current: {
//         resolvedLocation: 'Berlin, Deutschland',
//         temp: 28,
//         humidity: 37.1,
//         precipitationTruth: 1,
//         windSpeed: 23,
//         conditions: 'Rain, Partially cloudy',
//         cloudcover: 40
//     },

//     addCurrent: (cur) =>
//         set(state =>({
//             current:{
//                 resolvedLocation: cur.resolvedLocation,
//                 temp: cur.temp,
//                 humidity: cur.humidity,
//                 precipitationTruth: cur.precipitationTruth,
//                 windSpeed: cur.windSpeed,
//                 conditions: cur.conditions,
//                 cloudcover: cur.cloudcover
//         }})),
  

//     /*********** Current End *************************** */

//   }))

  export default useStore;