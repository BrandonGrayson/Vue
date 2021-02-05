// import axios for get request

import axios from "axios";

// save url to a variable
const BASEURL = "https://randomuser.me/api/?results=5";

export const search = ()=> {
    return axios.get(BASEURL)
}

// Export an object with a search method
