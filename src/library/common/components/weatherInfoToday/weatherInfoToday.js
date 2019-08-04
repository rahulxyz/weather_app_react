import React from 'react';
import moment from 'moment';

const WeatherInfoToday = (props) => {
    const { location, current } = props;
    const date = moment(new Date(location.localtime)).format('ddd, MMMM YYYY');
    const time = moment(new Date(location.localtime)).format('LT');
    return (
        <div id="weather-info-today" className="">
            <div className="row  d-flex align-items-center justify-content-center" id="top-date">

                <img src={current.condition && current.condition.icon} alt="" />

                <div>

                    <div>{time}</div>
                    <div>{date}</div>
                </div>

            </div>

            <div className="row d-flex align-items-center justify-content-center" id="middle-temperature">
                <p>{current.wind_kph}&#x2191;</p>
                <p className="display-1">{current.temp_c}&#176;</p>
                <p>{current.pressure_in}&#x2193;</p>
            </div>
            <div className="row d-flex justify-content-center pr-3" id="bottom-text">
                {!current.condition ?
                    <p>..Loading</p>
                    :
                    <p>{current.condition.text}</p>}
            </div>
            {props.value}
        </div>
    );
}

WeatherInfoToday.defaultProps = {
}

export default WeatherInfoToday;