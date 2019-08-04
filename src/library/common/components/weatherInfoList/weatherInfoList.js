import React from 'react';
import WeatherInfoItem from '../weatherInfoItem/weatherInfoItem';

const WeatherInfoList = (props) => {
    const { forecastList } = props;

    return (
        <div className="container">
            {forecastList ?
                forecastList.map((item, index) => (
                    <WeatherInfoItem key={index} data={item} />
                )) : ''
            }
        </div>
    );

}

export default WeatherInfoList;