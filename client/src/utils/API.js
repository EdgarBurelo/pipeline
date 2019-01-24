import axios from "axios";

export default {
    login: (username, password) => {
        return axios.post("/api/login",{
            "username": username,
            "password":password
        });
    },

    signup: (username, password) => {
        return axios.post("/api/signup", {
        "username": username,
        "password": password
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

    userStatus: () => {
        return axios.get("/api/userStatus");
    },

    logout: () => {
        return axios.post("/api/logout");
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
    },

    //Get workflows
    getWorkflows: function() {
      return axios.get("/api/workflows");
    }


};