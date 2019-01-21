import axios from "axios";

export default {
login: () => {
    return axios.post("/api/login").then(res => {
        console.log("algo");
        console.log(res);
    });
}

};