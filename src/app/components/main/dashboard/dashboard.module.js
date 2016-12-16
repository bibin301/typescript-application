'use strict';

import route from './dashboard.route';
// import './help.scss';

const dashboardModule = angular.module('dashboard-module', [
	'ui.router'
	]);

dashboardModule
.config(route);

export default dashboardModule;
