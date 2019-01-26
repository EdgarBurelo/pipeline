import axios from "axios";

export default {
    login: (username, password) => {
        return axios.post("/api/login",{
            "username": username,
            "password":password
        });
    },

    signup: (username, password, name, company) => {
        return axios.post("/api/signup", {
        "username": username,
        "password": password,
        "name":name,
        "company":company
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

    erase: (fid) => {

        console.log("this is id", fid);

        return axios.post("/api/admin/" + fid).then(res => {

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
    
    getAgents: () => {
      return axios.get("/api/admin/leads");
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
    },

    //Get one workflow
    getWorkflow: function(id) {
      console.log("getting the workflow " + id);
      return axios.get("/api/workflow/" + id);
    }

};