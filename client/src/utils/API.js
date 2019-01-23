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

newUser: (fname, femail, fprofile) => {

    return axios.post("/api/admin", {

        name: fname,
        email: femail,
        profile: fprofile,
        company: "test",
        password: "test123"

    }).then(res => {

        console.log(res);

    }).catch(err => {

        console.log(err);

    });

},

allUsers: () => {

    return axios.get("/api/admin");

},
  

  //Save workflow
  saveWorkflow: function (flowData) {
    return axios.post("/api/workflow", flowData);
  },

  //Save lead
  saveLead: function(leadData) {
    return axios.post("/api/leads", leadData);
  }

};