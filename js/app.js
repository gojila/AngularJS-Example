  var phonecatApp = angular.module('phonecatApp',['ngRoute', 'phonecatControllers']);

phonecatApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/phones',{
      templateUrl: 'phone/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId',{
      templateUrl: 'phone/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }]);
