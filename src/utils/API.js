// import axios for get request

import axios from "axios";

// save url to a variable
const BASEURL = "https://randomuser.me/api/"

// Export an object with a search method
export default {
    search: function (query) {
        return axios.get(BASEURL + query)
    }
}