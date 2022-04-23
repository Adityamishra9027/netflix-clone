import axios from "axios";
/**base url tp make request to the module */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;