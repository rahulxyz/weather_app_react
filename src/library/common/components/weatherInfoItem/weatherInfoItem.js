import React from 'react';
import moment from 'moment';
import './weatherInfoItem.css';

const WeatherInfoItem = (props) => {
    const { data } = props;
    const date = moment(data.date).format('ddd, MMMM YYYY');
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (
        <div className="container">
            <div className="row justify-content-between" id="weather-item">
                <div className="d-flex justify-content-center align-items-center col-4" id="weather-icon">
                    <img src={icon} alt="" />
                </div>

                <div className="col-8">
                    <div className="my-0 p-0 font-weight-lighter text-light">{date}</div>
                    <div className="my-0 p-0  text-light" id="middle-item-text">{data.weather[0].description}</div>
                    <div className="my-0 p-0 font-weight-lighter text-light">&#x2191;{data.temp.max}&#176;
    &#x2193;{data.temp.min}&#176;</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfoItem;