let app = angular.module('app.Srv', []);

app.factory('utilitySrv', require('./utilitySrv'));

app.factory('menu', ($location, $rootScope, CONST) => {
    let rawdata_section = (() => {
        let pages = [];
        for (let k in CONST.ALL_ENABLED_PLARFORMS) {
            pages.push({
                name: CONST.ALL_ENABLED_PLARFORMS[k],
                state: k,
                type: 'link'
            })
        }
        return {
            name: 'Forum RawData',
            type: 'toggle',
            pages: pages
        }
    })()
    let services_section = {
        name: 'Service API',
        type: 'toggle',
        pages: [{
            name: 'Spike',
            type: 'link',
            state: 'ServiceApi.Spike'
        }, {
            name: 'Regoin',
            type: 'link',
            state: 'ServiceApi.Regoin'
        }, {
            name: 'Similar Words',
            type: 'link',
            state: 'ServiceApi.SW'
        }, {
            name: 'Sentiment140',
            type: 'link',
            state: 'ServiceApi.Sentiment'
        }]
    }
    let admin_scetion = {
        name: 'Admin Section',
        type: 'heading',
        children: [{
            name: 'User Management',
            type: 'link'
        }, {
            name: 'Service Account',
            type: 'link'
        }, {
            name: 'Notication Settings',
            type: 'link'
        }, ]
    }

    let sections = [{
        name: 'Dashboard',
        type:'heading',
        children:[{
            name:'Current Status',
            type:'link',
            state:'Rawdata.all'
        },rawdata_section,services_section]
    },admin_scetion];

    let self;

    return self = {
        sections: sections,

        toggleSelectSection: (section) => {
            self.openedSection = (self.openedSection === section ? null : section);
        },
        isSectionSelected: (section) => {
            return self.openedSection === section;
        },

        selectPage: (page) => {
            // page && page.url && $location.path(page.url);
            // self.currentSection = section;
            self.currentPage = page;
        },

        isPageSelected: (page) => {
            return self.currentPage === page;
        }
    };

    function sortByHumanName(a, b) {
        return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
    }
})
module.exports = 'app.Srv';