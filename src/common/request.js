import axios from "axios";

const request = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
});

export default request;