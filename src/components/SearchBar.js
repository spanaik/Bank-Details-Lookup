import  React from 'react'
import debounce from 'lodash.debounce'
import { connect } from 'react-redux'
import { requestData, filterData, clearData } from '../actions/index'

const cities = {
    "Favourite" : "favourite",
    "Kolkatta" : 'kolkata',
    "Bangalore" : 'bangalore',
    "Delhi" : "delhi",
    "Mumbai" : 'mumbai',
    "Chennai" : "chennai"
}

function mapDispatchToProps(dispatch) {
    return {
        filterData: filterTerm => dispatch(filterData(filterTerm)),
        requestData: city => dispatch(requestData(city)),
        clearData: () => dispatch(clearData())
    }
}

class ConnectedSearchBar extends React.Component {
    state = {
        city : "",
        filterTerm : "",
    }

    changeOnDebounce = debounce(() => {
        this.props.filterData(this.state.filterTerm)
    }, 500)

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name] : value,
        }, () => {
            if (name === "city") {
                if (this.state.city !== "favourite") this.props.requestData(this.state.city)
                else this.props.clearData()
            }
            name === "filterTerm" && this.changeOnDebounce()
        })
    }

    renderCityOptions = () => {
        return Object.keys(cities).map(city => {
            let cityValue = cities[city]
            return <option value = {cityValue} key = {cityValue}>{city}</option>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="form-row">
                    <div className="col">
                        <select
                            className="custom-select"
                            value = {this.state.city}
                            name = "city"
                            onChange = {this.handleChange}
                        >
                            {this.renderCityOptions()}
                        </select>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            name = "filterTerm"
                            value = {this.state.filterTerm}
                            onChange = {this.handleChange}
                            placeholder = "Type to filter"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const SearchBar = connect(null, mapDispatchToProps) (ConnectedSearchBar)

export default SearchBar