import React from 'react'
// import PropTypes from 'prop-types'



const fetchRandomData = () => {
    return componentDidMount()
}


componentDidMount() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });
}
// Table.propTypes = {

// }

export default Table
