import axios from "axios";

export default {

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
  },

  //Save workflow
  saveWorkflow: (flowData) => {
    return axios.post("/api/workflow", flowData);
  },

  getWorkflows: () => {
    return axios.get("/api/workflows");
  },

  //Save lead
  saveLead: function(leadData) {
    return axios.post("/api/leads", leadData);
  }

};