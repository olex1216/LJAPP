'use strict';

/**
 *  Module
 *
 * Description
 */
 angular.module('app').directive('appHead', ['', function(){
 	return {
 		restrict: 'EA',
 		replace: true,
 		templateUrl: 'views/template/head.html',
 		link: function($scope, iElm, iAttrs, controller) {
 			
 		}
 	};
 }]);