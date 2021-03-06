'use strict';

var app = angular.module('scaffoldApp', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {url: '/', templateUrl: 'views/home/home.html', controller: 'homeCtrl'})
		.state('login', {url: '/login', templateUrl: 'views/login/login.html', controller: 'loginCtrl'})
})

'use strict';

angular.module('scaffoldApp')
.controller('homeCtrl', function($scope){
	console.log('homeCtrl');
	
})

'use strict';

angular.module('scaffoldApp')
.controller('loginCtrl', function($scope){
	console.log('loginCtrl');

})
