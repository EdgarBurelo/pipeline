import axios from "axios";

export default {
  //Save workflow
  saveWorkflow: function (flowData) {
    return axios.post("/api/workflow", flowData);
  },

  login: () => {
    return axios.post("/api/login").then(res => {
      console.log("algo");
      console.log(res);
    });
  },
  
  signup: (username, password) => {
    return axios.post("/api/signup", {
      "username": username,
      "password": password
    }).then(res => {
      console.log("miado");
      console.log(res);
    });
  }

};