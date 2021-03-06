var app = angular.module('app.Constant', []);

app.value('CONST', {
    APP_NAME: 'Mooncake Deliver Tool',
    APP_NAME_SHORT: 'MDT',
    DEV_MODE:false,
    SERVICE_INFO: {
        ENDPOINT: 'http://10.168.177.60:8008/api/',
        // WS: 'ws://localhost:8889/',
        LOCAL_TEST_DATA: '/data/'
    },
    WS_STATUS: {
        0: 'connecting',
        1: 'online',
        2: 'closing',
        3: 'offline'
    },
    ERRORS: {
        "1": 'No Data Available',
        "2": 'Null',
        "3": 'N/A',
    },
    // PROGRESS_STATUS:{
    //     pending:'Pending',
    //     researching:'Researching',
    //     handling:'Handling',
    //     finished:'Finished',
    //     reviewing:'Reviewing',
    //     reviewed:'Reviewed'
    // }
    // PROGRESS_STATUS:['Pending','Researching','Handling','Finished','Reviewing','Reviewed'],
    PROGRESS_STATUS:[],
    PROCRESS_COLOR: ['red-400','deep-orange-400','yellow-A400','green','cyan-500','blue'],
    ISSUE_STATUS:['Waiting On Customer','Solution Deliver','Escalated','Pending on Research','Self-Answered','OffTopic','Deleted','New Issue'],
    ISSUE_STATUS_COLOR:['grey-900','green','grey-600','yellow-A400','green','grey','grey','blue'],
})

// app.constant('MENU', [{
//     name: 'Dashboard',
//     type: 'heading',
//     children: [{
//         name: 'Forum RawData',
//         type: 'toggle',
//         pages: [{
//             name: 'IPAs',
//             type: 'link',
//             state: 'home.beers.ipas',
//             icon: 'fa fa-group'
//         }, {
//             name: 'Porters',
//             state: 'home.beers.porters',
//             type: 'link',
//             icon: 'fa fa-map-marker'
//         }, {
//             name: 'Wheat',
//             state: 'home.beers.wheat',
//             type: 'link',
//             icon: 'fa fa-plus'
//         }]
//     }]
// }, {
//     name: 'Munchies',
//     type: 'toggle',
//     pages: [{
//         name: 'Cheetos',
//         type: 'link',
//         state: 'munchies.cheetos',
//         icon: 'fa fa-group'
//     }, {
//         name: 'Banana Chips',
//         state: 'munchies.bananachips',
//         type: 'link',
//         icon: 'fa fa-map-marker'
//     }, {
//         name: 'Donuts',
//         state: 'munchies.donuts',
//         type: 'link',
//         icon: 'fa fa-map-marker'
//     }]
// }])
module.exports = 'app.Constant';