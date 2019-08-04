import React from 'react';
import './search.css';
import search from '../../../../resources/icons/search.svg'

class Search extends React.Component {
    state = {
        searchedText: ''
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);


    }

    handleSearch = (event) => {
        event.preventDefault();
        this.props.searchHandler(this.state.searchedText);
    }

    handleChange = (event) => {
        this.setState({
            searchedText: event.target.value
        });
    }

    render() {
        const { searchedText } = this.state;

        return <div className="col-lg-6 d-flex">
            <input value={searchedText} onChange={this.handleChange} className="form-control rounded-lg bg-transparent text-white form-control-sm ml-3 w-100 search"
                type="text" placeholder="Davis, CA" aria-label="Search" />
            <img src={search} alt="Search" id="searchIcon" onClick={this.handleSearch}></img>
        </div>
    }

}

export default Search;