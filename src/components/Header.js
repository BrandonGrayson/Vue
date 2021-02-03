import React from 'react'
// import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className='container-fluid' id='header-card'>
            <div className="card text-center">
                <div className="card-body" id='header'>
                    <h5 className="card-title" id='header-title'>Employee Directory</h5>
                    <p className="card-text mb-3">Click on carrots to filter by heading or use the search box to naorrow your results</p>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
