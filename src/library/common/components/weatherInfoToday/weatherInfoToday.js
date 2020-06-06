import React from 'react';
import moment from 'moment';

const WeatherInfoToday = (props) => {
    const { location, current } = props;
    console.log(">>>>> ", current, location); 
    const date = moment(new Date(location.dt*1000)).format('ddd, MMMM YYYY');
    const time = moment(new Date(location.dt*1000)).format('LT');
    const icon = `http://openweathermap.org/img/wn/${current.icon}@2x.png`

    return (
        <div id="weather-info-today" className="">
            <div className="row  d-flex align-items-center justify-content-center" id="top-date">

                <img src={icon} alt="" />

                <div>

                    <div>{time}</div>
                    <div>{date}</div>
                </div>

            </div>

            <div className="row d-flex align-items-center justify-content-center" id="middle-temperature">
                <p>{location.speed}&#x2191;</p>
                <p className="display-1">{location.temp.day}&#176;</p>
                <p>{location.pressure}&#x2193;</p>
            </div>
            <div className="row d-flex justify-content-center pr-3" id="bottom-text">
                    <p>{location.weather[0].description}</p>
            </div>
            {props.value}
        </div>
    );
}

WeatherInfoToday.defaultProps = {
}

export default WeatherInfoToday;