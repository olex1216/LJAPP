'use strict';
 /**
 * LJapp Module
 *
 * Description
 */
 var app = angular.module('app', ['ui.router']);

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
'use strict';

angular.module('app').directive('appFoot',[function () {
	return {
		restrict: 'EA',
		
	}
}])
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

// 控制器
'use strict';

/**
* LJApp Module
*
* Description
*/
angular.module('app', []).controller('mainCtrl', ['', function(){
	
}])