/************************unit calculation************************************************ */

// calculate Fahrenheit to Degree
export const FahrenheitToDegree = (temperatur) => Math.round((temperatur - 32) * (5/9));

// calculate Miles to Kilometers
export const milesToKilometers = (miles) => Math.round((miles * 1.609).toFixed(1));


/************************date calculation************************************************ */

// get weekday name from a date
export const getWeekday = date => {

    const weekdayNumber = new Date(date).getDay()

    let weekdayName = 'Sunday'

    switch(weekdayNumber){
        case 1:
            weekdayName = "Monday"
            break;
        case 2:
            weekdayName = "Tuesday"
            break;
        case 3:
            weekdayName = "Wednesday"
            break;
        case 4:
            weekdayName = "Thursday"
            break;
        case 5:
            weekdayName = "Friday"
            break;
        case 6:
            weekdayName = "Saturday"
    }

    return weekdayName;
}

// get name for cloud cover image
export const imageName = (cloudcover, conditions) => {

    if(new RegExp('cloud', "i").test(conditions) && new RegExp('rain', "i").test(conditions)) {   
        return 'sun-and-rain.png'
    }else if(new RegExp('clear', "i").test(conditions)){
        return 'sunSolid.png'
    }else if(new RegExp('rain', "i").test(conditions)){
        return 'rain.png'
    }else if(new RegExp('cloud', "i").test(conditions)){
        return 'cloud-sun-solid.png'
    }
    else if(new RegExp('overcast', "i").test(conditions)){
        return 'cloud-solid.png'
    }
    //just in case
    else if(cloudcover <= 10){
        return 'sun-solid.png'
    }
    else if(cloudcover > 10 && cloudcover < 90){
        return 'cloud-sun-solid.png'
    }
    else if(cloudcover >= 90){
        return 'cloud-solid.svg'
    }
    
    return 'not found';
}
