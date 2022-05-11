const API_BASE_URL = "http://localhost:8080"
const axios = require("axios");

export default {
    getUsers: () => {
        const _axios = axios.create();
        return _axios({
            method: "get",
            url: `${API_BASE_URL}/users`,
        }).then((data) => {
            return data;
        });
    },
    postUser: (user) => {
        const _axios = axios.create();
        return _axios({
            method: "post",
            url: `${API_BASE_URL}/user`,
            data: user,
        }).then((data) => {
            return data;
        });
    }

}