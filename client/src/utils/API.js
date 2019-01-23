import axios from "axios";

export default {
  //Save workflow
  saveWorkflow: function(flowData) {
    return axios.post("/api/workflow", flowData);
  }

};