'use strict';

/**
* app Module
*
* Description
路由配置
*/
angular.module('LJapp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('main',{
		url: "/main",
		templateUrl: 'views/main.html',
		controller: 'mainCtrl',
	});

	$urlRouterProvider.otherwise('main');
}])