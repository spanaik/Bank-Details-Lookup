import React from 'react'

import debounce from 'lodash.debounce'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { paginateData } from '../../actions/index'

const mapStateToProps = state => {
    return { dataCount : state.filteredData.length }
}

function mapDispatchToProps(dispatch) {
    return {
        paginateData: (currentPage, itemsPerPage) => dispatch(paginateData({currentPage, itemsPerPage})),
    }
}

class ConnectedPaginate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsPerPage : 5
        }
        this.currentPage = 0
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.dataCount !== nextProps.dataCount) {
            this.props.paginateData(this.currentPage, this.state.itemsPerPage)
        }
        return true
    }
    
    changeOnDebounce = debounce(() => {
        this.props.paginateData(this.currentPage, this.state.itemsPerPage)
    }, 500)
    
    handleItemChange = event => {
        const { value } = event.target
        if (Number(value) > 0) {
            this.setState({
                itemsPerPage : Number(value)
            }, () => this.changeOnDebounce())
        }
    }

    handlePageClick = page => {
        this.currentPage = page.selected
        this.props.paginateData(this.currentPage, this.state.itemsPerPage)
    }

    render() {
        const pageCount = Math.ceil(this.props.dataCount / this.state.itemsPerPage)

        return (
            <div className="">
                <div className = "form-row">
                    <div className="col">
                        <input 
                            className="form-control"
                            name="itemPerPage"
                            value = {this.state.itemsPerPage}
                            placeholder = "Enter the number of items you want to see"
                            onChange = {this.handleItemChange}
                        />
                    </div>
                    <div className="col total">
                        Total Results {this.props.dataCount}
                    </div>
                    <div className="col">
                        <ReactPaginate 
                            previousLabel = {"<<Prev"}
                            nextLabel = {"Next>>"}
                            breakLabel = {"..."}
                            pageCount = {pageCount}
                            marginPagesDisplayed = {1}
                            pageRangeDisplayed = {3}
                            onPageChange = {this.handlePageClick}
                            containerClassName={'pagination justify-content-end'}
                            breakClassName={'page-item'}
                            breakLinkClassName={"page-link"}
                            previousClassName={'page-item'}
                            previousLinkClassName={"page-link"}
                            nextClassName={'page-item'}
                            nextLinkClassName={"page-link"}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const Paginate = connect(mapStateToProps, mapDispatchToProps)(ConnectedPaginate)

export default Paginate