import axios from "axios";

class HttpFetch {
    fetchResponse(serverUrl) {
        return axios.get(serverUrl).then((response) => {
            //check if the server is online based on code
            return this.checkAvailabilityCode(response.status);
        }).catch(error => false);
    }

    //this is function of tracking wheether the server is online iss between 200 and 299 other is offline
    checkAvailabilityCode(codeReturned) {
        return codeReturned >= 200 && codeReturned <= 299 ? true : false;
    }
}

export default HttpFetch
