'use strict';
import "jquery";
import "angular";
import "angular-ui-router";
// import "oclazyload";
// import "angular-animate";
// import "angular-cookies";
// import "angular-sanitize";
import "angular-messages";
// import "angular-material";
// import "angular-aria";
// import "angular-resource";
// import 'angular-chart.js';
// import 'material-steppers';
// import 'ng-file-upload';
// import 'ui-cropper';
// import 'angular-moment';
// import 'ang-accordion';
// import '!!file-loader?name=[name].[ext]!../favicon.ico';
import "./index.module";
// import "../assets/styles/sass/index.scss";
// import "../assets/images/logo.png";




angular.element(document).ready(function () {
	angular.bootstrap(document, ['demoApp'], {
		strictDi: true
	});
});
