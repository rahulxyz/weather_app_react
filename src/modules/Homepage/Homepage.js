import React from 'react';
import { connect } from 'react-redux';
import { getWeatherByCity } from '../../library/api/master-service';
import Error from '../../library/common/components/error/error';
import Loader from '../../library/common/components/loader/loader';
import Search from '../../library/common/components/search/search';
import WeatherInfoList from '../../library/common/components/weatherInfoList/weatherInfoList';
import WeatherInfoToday from '../../library/common/components/weatherInfoToday/weatherInfoToday';
import { fetchWeather } from './HomepageAction';

class Homepage extends React.Component {

    state = {
        location: '',
        current: '',
        forecastDays: ''
    }

    getWeatherByLocation = (searchedText) => {
        getWeatherByCity(searchedText).then(res => {
            this.props.fetchWeather(searchedText);
        });
    }

    componentDidMount() {
        this.props.fetchWeather('London');
    }


    render() {
        if (!this.props.homepage.loader.hasLoaded) {
            return <div className="container px-5 text-light">
                <div className="row d-flex justify-content-center my-4" id="search">
                    <Search searchHandler={this.getWeatherByLocation} />
                </div>

                <Loader />
            </div>
        } else if (this.props.homepage.error.hasError) {
            return <div className="container px-5 text-light">
                <div className="row d-flex justify-content-center my-4" id="search">
                    <Search searchHandler={this.getWeatherByLocation} />
                </div>

                <Error errorStatusCode={this.props.homepage.error.errorStatus} />
            </div>
        }
        else {
            return (
                <div className="container px-5 text-light">
                    <div className="row d-flex justify-content-center my-4" id="search">
                        <Search searchHandler={this.getWeatherByLocation} />
                    </div>

                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <WeatherInfoToday location={this.props.homepage.location} current={this.props.homepage.current} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <WeatherInfoList forecastList={this.props.homepage.forecastList}></WeatherInfoList>
                        </div>
                    </div>

                </div>


            );
        }
    }
}

const mapStateToProps = state => ({
    homepage: state.homepage
})

export default connect(mapStateToProps,
    { fetchWeather }
)(Homepage);
