import React from 'react';
import { connect } from 'react-redux'
import { loadFavData } from './actions/index'
import './App.css';
import localStorage from "./util/LocalStorage"
import SearchBar from './components/SearchBar'
import BanksList from './components/BanksList'
import Paginate from './components/Paginate/Paginate'

function mapDispatchToProps(dispatch) {
  return {
      loadFavData: favData => dispatch(loadFavData(favData)),
  }
}

class ConnectedApp extends React.Component {
  state = {
    favBanks : []
  }

  componentDidMount() {
    const favListFromLS = JSON.parse(localStorage.getItem('favListOfBanks'))
    if (favListFromLS) {
      this.setState({
        favBanks: favListFromLS
      }, () => {
        this.props.loadFavData(this.state.favBanks)
      })
    }
    
  }

  render() {
    return(
      <main>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h2>Search for Bank Details</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Select the city you want, and use the filter to search</p>
            </div>
          </div>
          {/* {<div className="row">
            <div className="col info">
                <h4>Use multiple keywords in the search for filterring</h4>
                <p>Key1 + Key2 will filter where the bank matches both Key1 & Key2 <br />(egs. SBI + DELHI will give you SBI branches in DELHI) <br />
                Key1, Key2 will filter where the bank matches Key1 or Key2 <br />(egs. SBI, DELHI will give you SBI branches & all banks in DELHI) <br />
              </p>
            </div>
          </div>} */}
          <div className="row">
            <div className="col">
              <SearchBar />
            </div>
            <div className="col">
              <Paginate />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <BanksList />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp)
export default App;
