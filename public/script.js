console.log('HI FROM SCRIPT.JS');

angular.module('bitzbotsApp', ['ngRoute'])
.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider){
  $routeProvider
    .when('/#/', {
        templateUrl: 'index.html',
        controller: 'BitzHomepageController',
        controllerAs: 'homeCtrl'
    })
    .when('/makestation', {
        templateUrl: 'makestation.html',
        controller: 'MakestationController',
        controllerAs: 'makeCtrl'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}])
.controller('BitzHomepageController', function() {
  var vm = this;
  vm.hello = "hello";
  console.log('hello from bitz controller');
})
.controller('MakestationController', function() {
  var vm = this;
  vm.hello = "hello";
  console.log('hello from make controller');
});
