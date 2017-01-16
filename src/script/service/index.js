let app = angular.module('app.Srv', []);

app.factory('utilitySrv', require('./utilitySrv'));

app.factory('baseSrv', ($http, $q, $httpParamSerializer, CONST) => {
    return {
        get: (api, params) => {
            let path = '',
                qs = Object.keys(params).length ? "?" + $httpParamSerializer(params) : '';
            path = CONST.SERVICE_INFO.ENDPOINT + api + qs;
            let deferred = $q.defer();
            $http.get(path, {
                cache: true
            }).then((data) => {
                if (data.status == 200) {
                    deferred.resolve(data.data)
                } else {
                    console.log(data);
                    deferred.reject(data);
                }
            }, (err) => {
                deferred.reject(err);
            })
            return deferred.promise;
        }
    }
});
app.factory('dataSrv',(baseSrv)=>{
    return {
        platform:(id)=>{
            let params = {};
            let apiString = id? `platform/${id}` : "platform";
            return baseSrv.get(apiString, params);
        },
        product:(id)=>{
            let params = {};
            let apiString = id? `product/${id}` : "product";
            return baseSrv.get(apiString, params);
        }
    }
})
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
    // let services_section = {
    //     name: 'Service API',
    //     type: 'toggle',
    //     pages: [{
    //         name: 'Spike',
    //         type: 'link',
    //         state: 'ServiceApi.Spike'
    //     }, {
    //         name: 'Regoin',
    //         type: 'link',
    //         state: 'ServiceApi.Regoin'
    //     }, {
    //         name: 'Similar Words',
    //         type: 'link',
    //         state: 'ServiceApi.SW'
    //     }, {
    //         name: 'Sentiment140',
    //         type: 'link',
    //         state: 'ServiceApi.Sentiment'
    //     }]
    // }
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
        name: 'Task List',
        type:'heading',
        children:[{
            name:'Code Projects',
            type:'link',
            state:'code'
        },{
            name:'Commit Projects',
            type:'link',
            state:'commit'
        },{
            name:'Issue List',
            type:'link',
            state:'issue'
        }]
    }];

    let self;

    return self = {
        sections: sections,

        loadPage : (state) => {
            self.sections.forEach((section)=>{
                section.children.forEach((page)=>{
                    if(page.state == state){
                        self.toggleSelectSection(section)
                        self.selectPage(page)
                        return;
                    }
                })
            })
        },

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