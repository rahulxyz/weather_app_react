import React from 'react';
import moment from 'moment';
import './weatherInfoItem.css';


const WeatherInfoItem = (props) => {
    const { data } = props;
    const date = moment(data.date).format('ddd, MMMM YYYY');
    return (
        <div className="container">
            <div className="row justify-content-between" id="weather-item">
                <div className="d-flex justify-content-center align-items-center col-4" id="weather-icon">
                    <img src={data.day.condition.icon} alt="" />
                </div>

                <div className="col-8">
                    <div className="my-0 p-0 font-weight-lighter text-light">{date}</div>
                    <div className="my-0 p-0  text-light" id="middle-item-text">{data.day.condition.text}</div>
                    <div className="my-0 p-0 font-weight-lighter text-light">&#x2191;{data.day.maxtemp_c}&#176;
    &#x2193;{data.day.mintemp_c}&#176;</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfoItem;