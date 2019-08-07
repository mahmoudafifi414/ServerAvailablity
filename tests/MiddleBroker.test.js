import MiddleBroker from "../src/MiddleBroker.js"
import {servers, filteredSortedServers,unsortedData,expectedSortedData} from "../Utilities/data";
describe('Online Servers Tests', () => {
    beforeEach(() => {
        jest.setTimeout(11000);
    });
    //test findServer function
    test('server should filtered based on online and sorted', async () => {
        const middleBroker = new MiddleBroker;
        const result = await middleBroker.findServer(servers);
        expect(result).toStrictEqual(filteredSortedServers);
    });
//test the sorting function
    test('Test sortServersBasedOnPriority function', () => {
        const middleBroker = new MiddleBroker;
        expect(middleBroker.sortServersBasedOnPriority(unsortedData)).toStrictEqual(expectedSortedData);
    });
});