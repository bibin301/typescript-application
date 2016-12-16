'use strict';

function routeConfig($urlRouterProvider, $stateProvider) {
	'ngInject';

	$urlRouterProvider.otherwise( function($injector) {
		const $state = $injector.get('$state');
		$state.go("main.dashboard");
	});
}

export default angular
.module('index.routes', [])
.config(routeConfig);
