console.log('HI FROM SCRIPT.JS');

angular.module('bitzbotsApp', ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'BitzHomepageController',
        controllerAs: 'home'
    })
    // .when("/makestation", {
    //     templateUrl : "makestation.html"
    // });
}])
.controller('BitzHomepageController', function() {
  var vm = this;
  vm.hello = "hello";
  console.log('hello from bitz controller');
});
