import HttpFetch from './HttpFetch'

class MiddleBroker {
    constructor() {
        this.httpFetch = new HttpFetch;
    }

    //the main entry of the module to return the available servers if any
    findServer(servers) {
        return new Promise((resolve, reject) => {
            const filteredServers = [];
            this.filterServers(servers, function (res) {
                filteredServers.push(res);
            });
            setTimeout(() => {
                const sortedServers = filteredServers.length > 0 ? this.sortServersBasedOnPriority(filteredServers) : false;
                resolve(sortedServers);
            }, 10000);
        })

    }

    //filter servers based on online ones
    filterServers(servers, cb) {
        return servers.filter(async (server) => {
            try {
                //wait the response
                const result = await this.handleFilterAction(server);
                cb(server);
            } catch (e) {
                return false;
            }
        })
    }

    //handle the logic of find the server and return promise
    handleFilterAction(server) {
        return new Promise((resolve, reject) => {
            this.handleFindServerPromise(server).then(res => {
                res === true ? resolve(true) : reject(false);
            })
        });
    }

    // function to handle the response promise from server to be used in filter
    async handleFindServerPromise(server) {
        try {
            let result = await this.findServerLogic(server.url);
            return true;
        } catch (e) {
            return false
        }
    }

    //this is function that return the promise of resolve if the server is online or reject otherwise
    findServerLogic(server) {
        let promise = new Promise((resolve, reject) => {
            //if server is online resolve
            this.checkServer(server).then(res => {
                res === true ? setTimeout(() => resolve(true), 5000) : reject(false);
            });
        });
        //return the promise
        return promise;
    }

    //this is the function which check the server code with axios Get request
    async checkServer(serverUrl) {
        //get request to the server to get the response
        return await this.httpFetch.fetchResponse(serverUrl);
    }

    //this is function of sort the online servers if any based on priority
    sortServersBasedOnPriority(servers) {
        return servers.sort((a, b) => {
            return a.priority - b.priority;
        });
    }


}

export default MiddleBroker