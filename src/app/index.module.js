import config from './index.config';
import Components from './index.components';
import Routes from './index.routes';
// import Common from './common/common.module'
// import Cropper from 'cropperjs';
// import 'cropperjs/dist/cropper.min.css';

export default angular.module('demoApp', [
	'ui.router',
	// 'ngAnimate',
	// 'ngCookies',
	// 'ngSanitize',
	 'ngMessages',
	// 'ngAria',
	// 'oc.lazyLoad',
	// 'ngMaterial',
	// 'ngResource',
	// 'ngFileUpload',
	// 'uiCropper',
	// 'angularMoment',
	// Common.name,
	Components.name,
	Routes.name
	]
);
