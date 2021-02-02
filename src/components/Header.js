import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className='container-fluid'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Employee Directory</h5>
                    <p className="card-text">Click on carrots to filter by heading or use the search box to naorrow your results</p>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
