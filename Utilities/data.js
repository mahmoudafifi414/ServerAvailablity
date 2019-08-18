//first test case data
export const servers = [{
    'url': 'http://linkedin.com',
    'priority': 4
}, {
    'url': 'http://doesNotExit.example.com',
    'priority': 1
}, {
    'url': 'http://example.com',
    'priority': 7
}, {
    'url': 'http://google.com',
    'priority': 2
}];

export const filteredSortedServers = [{
    'url': 'http://doesNotExit.example.com',
    'priority': 1
}, {
    'url': 'http://google.com',
    'priority': 2
}, {
    'url': 'http://linkedin.com',
    'priority': 4
}, {
    'url': 'http://example.com',
    'priority': 7
}];

//second test case data
export const unsortedData = [
    {
        'url': 'www.google.com',
        'priority': 5
    },
    {
        'url': 'www.example.com',
        'priority': 2
    }
];
export const expectedSortedData = [
    {
        'url': 'www.example.com',
        'priority': 2
    },
    {
        'url': 'www.google.com',
        'priority': 5
    }
];
