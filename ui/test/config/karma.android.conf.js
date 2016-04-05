module.exports = function (config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        browserNoActivityTimeout: 100000,
        autoWatch: false,
        singleRun: true,
        files: [
            'app/components/q/q.js',
            'app/components/angular/angular.js',
            'app/components/angular-route/angular-route.js',
            'app/components/angular-sanitize/angular-sanitize.js',
            'app/components/jquery/jquery.js',
            'app/components/jasmine-jquery/lib/jasmine-jquery.js',
            'app/components/angular-mocks/angular-mocks.js',
            'app/components/ngInfiniteScroll/build/ng-infinite-scroll.js',
            'app/components/d3/d3.min.js',
            'app/components/nvd3/nv.d3.min.js',
            'app/components/angularjs-nvd3-directives/dist/*.js',
            'app/components/moment/moment.js',
            'app/components/offline/offline.min.js',
            'app/components/angular-ui-router/release/angular-ui-router.js',
            'app/components/lodash/dist/lodash.min.js',
            'app/components/lovefield/dist/lovefield.min.js',
            'app/components/angular-ui-select2/src/select2.js',
            'app/components/angular-bindonce/bindonce.js',
            'app/components/stacktrace-js/stacktrace.js',
            'app/components/ng-clip/src/ngClip.js',
            'app/components/zeroclipboard/dist/ZeroClipboard.js',
            'app/components/angular-translate/angular-translate.js',
            'app/components/angular-file-upload/dist/angular-file-upload.min.js',
            'app/components/angular-cookies/angular-cookies.js',
            'app/components/angular-translate-storage-local/angular-translate-storage-local.js',
            'app/components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'app/components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'app/components/hustle/hustle.js',
            'app/lib/modernizr.custom.80690.js',
            'app/common/constants.js',
            'app/common/domain/init.js',
            'app/common/domain/**/*.js',
            'app/**/init.js',
            'app/**/constants.js',
            'app/common/uicontrols/**/*.js',
            'app/common/uicontrols/**/**/*.js',
            'app/common/**/*.js',
            'app/common/**/*.html',
            'app/admin/**/*.js',
            'app/adt/**/*.js',
            'app/clinical/**/*.js',
            'app/dhis/**/*.js',
            'app/document-upload/**/*.js',
            'app/home/**/*.js',
            'app/orders/**/*.js',
            'app/reports/**/*.js',
            'app/registration/**/*.js',
            'test/support/**/*.js',
            'test/unit/**/*.js',
            'test/integration/**/*.js',
            'test/integration/utils/*.js',
            {pattern: 'test/data/*.json', watched: true, served: true, included: false}
        ],
        exclude:[
            'test/unit/registration/offline/*.js',
            'app/common/**/offline/chrome/*.js',
            'app/registration/services/defaultPatientServiceStrategy.js',

            'app/common/app-framework/services/loadConfigService.js',
            'app/common/orders/services/orderTypeService.js',
            'app/common/patient/services/patientService.js',
            'app/common/domain/services/configurationService.js',
            'app/common/domain/services/locationService.js',
            'app/common/domain/services/localeService.js',

            'test/unit/orders/services/orderTypeService.spec.js',
            'test/unit/common/patient/services/patientService.spec.js',
            'test/unit/common/app-framework/service/loadConfigService.spec.js',
            'test/unit/document-upload/controllers/*.js',
            'test/unit/common/displaycontrols/patientProfile/directives/*.js',
            'test/unit/common/domain/services/locationService.spec.js',
            'test/unit/registration/services/patientService.spec.js',
            'test/unit/common/domain/services/configurationService.spec.js',
            'test/unit/common/domain/services/localeService.spec.js',

            'test/unit/**/offline/chrome/*.js'
        ],
        reporters: ['junit', 'progress', 'coverage'],
        preprocessors: {
            'app/admin/**/*.js': ['coverage'],
            'app/adt/**/*.js': ['coverage'],
            'app/clinical/**/*.js': ['coverage'],
            'app/common/**/*.js': ['coverage'],
            'app/dhis/**/*.js': ['coverage'],
            'app/document-upload/**/*.js': ['coverage'],
            'app/home/**/*.js': ['coverage'],
            'app/orders/**/*.js': ['coverage'],
            'app/registration/**/*.js': ['coverage'],
            'app/common/displaycontrols/**/views/*.html':['ng-html2js'],
            'app/common/concept-set/views/*.html':['ng-html2js'],
            'app/common/uicontrols/**/views/*.html': ['ng-html2js'],
            'app/clinical/**/**/*.html': ['ng-html2js']
        },
        coverageReporter: {
            reporters: [
                {type: 'json', dir: 'coverage/'},
                {type: 'html', dir: 'coverage/'},
                {type: 'text-summary'}
            ]
        },
        junitReporter: {
            outputFile: 'output/unit.xml',
            suite: 'unit'
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'app',
            prependPrefix: '..',
            moduleName: 'ngHtml2JsPreprocessor'
        }
    });
};