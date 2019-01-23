import axios from "axios";

export default {
login: (username, password) => {
    return axios.post("/api/login",{
        "username": username,
        "password":password
    });
},
signup: (username, password) => {
    return axios.post("/api/signup",{
        "username": username,
        "password": password
    }).then(res => {
        console.log("miado");
        console.log(res);
    });
},
user: () => {
    return axios.get("/api");
},
logout: () => {
    return axios.post("/api/logout");
}

};