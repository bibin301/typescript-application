'use strict';

import helpModule from './help/help.module';
import dashboardModule from './dashboard/dashboard.module'

import route from './main.route';
// import './main.scss';

const mainModule = angular.module('main-module', [
	'ui.router',
	helpModule.name,
	dashboardModule.name,

	]);

mainModule
.config(route);

export default mainModule;
