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

    newUser: (fname, femail, fprofile,idc) => {
        return axios.post("/api/admin", {
            name: fname,
            email: femail,
            profile: fprofile,
            companyId: idc

        });

    },

    erase: (fid) => {

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
    
    getAgents: (companyId) => {
      return axios.get("/api/admin/agents/" + companyId);
    },

    //Save workflow
    saveWorkflow: (flowData) => {
    return axios.post("/api/workflows", flowData);
    },

    //Save lead
    saveLead: (leadData) => {
    return axios.post("/api/leads", leadData);
    },

    //Get workflows
    getWorkflows: (companyId) => {
      return axios.get("/api/workflows/company/" + companyId);
    },

    //Get one workflow
    getWorkflow: (id) => {
      return axios.get("/api/workflow/" + id);
    },

    //Get leads who are assigned to a specific agent
    allLeads: (id) => {

        return axios.get("/api/todo/" + id);

    },

    editLeads: (editData) => {

        return axios.put("/api/todo/edit", editData);

    },

    //Count leads for a specific workflow
    countLeads: (workflowId) => {
      return axios.get("/api/leads/count/" + workflowId);
    },

    //Change password
    passChange: (actualPassword,newPassword) => {
        return axios.post("/api/passChange",{
            actualPassword,
            newPassword
        });
    },

    //Get all leads belonging to a specific company
    getCompanyLeads: (companyId) => {
      return axios.get("/api/leads/" + companyId);
    }

};