/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LocalStorage from '../util/LocalStorage'

import { connect } from 'react-redux'
import { pushFavData } from '../actions/index'


const mapStateToProps = state => {
    return { banks : state.dataToDisplay, favBanks: state.favData }
}

function mapDispatchToProps(dispatch) {
    return {
        pushFavData: favData => dispatch(pushFavData(favData)),
    }
}

class ConnectedList extends React.Component {
    
    isFavBank = (ifsc, favList) => {
        if (!favList) return false
        for (let i = 0; i < favList.length; i++) {
            if (ifsc === favList[i].ifsc) return true
        }
        return false
    }

    handleClick = (event) => {
        event.preventDefault()
        const targetIfsc = event.target.id
        let favListFromLS = JSON.parse(LocalStorage.getItem('favListOfBanks'))
        const matchingBank = this.props.banks ? this.props.banks.filter( banks => targetIfsc === banks.ifsc) : []
        if (matchingBank.length > 0) {
            if (favListFromLS) {
                if (!favListFromLS.some( bank => bank.ifsc === targetIfsc)) {
                    favListFromLS.push(matchingBank[0])
                }
                else {
                    let index = favListFromLS.findIndex(bank => bank.ifsc === targetIfsc) 
                    if (index > -1) {
                        favListFromLS.splice(index, 1)
                    }
                }
            } 
            else {
                favListFromLS = matchingBank
            }
            this.props.pushFavData(favListFromLS)
            const jsonString = JSON.stringify(favListFromLS)
            LocalStorage.setItem('favListOfBanks', jsonString)
        }
    }

	renderBankList = (bankList, favList) => {
		const classNameStringChecked = "fa fa-heart checked"
        const classNameStringUnChecked = "fa fa-heart"
        let toRender = [<div className="row header-row">
                            <div className="cold-xs-auto text-left">Fav</div>
                            <div className="col">Bank Name</div>
                            <div className="col">IFSC Code</div>
                            <div className="col">Branch</div>
                        </div>]
        toRender.push(bankList.map( bank => {
            if (this.isFavBank(bank.ifsc, favList)) {
                return <div key = {bank.ifsc} className="row data-row">
                        <div className="col-xs-auto text-right"><i className={classNameStringChecked} onClick={this.handleClick} id={bank.ifsc}></i></div>
                        <div className="col">{bank.name}</div>
                        <div className="col">{bank.ifsc}</div>
                        <div className="col">{bank.branch}</div>
                    </div>
            }
            else {
                return <div key = {bank.ifsc} className="row data-row">
                        <div className="col-xs-auto text-right"><i className={classNameStringUnChecked} onClick={this.handleClick} id={bank.ifsc}></i></div>
                        <div className="col">{bank.name}</div>
                        <div className="col">{bank.ifsc}</div>
                        <div className="col">{bank.branch}</div>
                    </div>
            }
        }))

        return toRender
	}

	render() {
        const { banks, favBanks } = this.props
		return (
				<div className="container text-left data-container">
                    {
                        banks ? this.renderBankList(banks, favBanks ? favBanks : "") : ""
                    }
				</div>
		)
	}
}

const BanksList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)

export default BanksList