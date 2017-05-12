console.log('HI FROM SCRIPT.JS');

angular.module('bitzbotsApp', ['ngRoute'])
.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'BitzHomepageController',
        controllerAs: 'homeCtrl'
    })
    .when('/makestation', {
        templateUrl: 'makestation.html',
        controller: 'MakestationController',
        controllerAs: 'makeCtrl',
    })
    .when('/bitzprint', {
        templateUrl: 'bitzprint.html',
        controller: 'BitzprintController',
        controllerAs: 'printCtrl'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}])
.service('bitzbotService', function() {
    var myBot = {};
    var botPhoto = ''

    var makeBot = function(bot) {
        myBot = bot;
        myBot = __transformBot(bot);
        console.log('hello from service', bot);
    };

    var __transformBot = function(bot) {
      botNums = [];
      bot.face = bot.face[(bot.face).length - 1];
      console.log('bot face num', bot.face);
      botNums.push(bot.face);

      bot.body = bot.body[(bot.body).length -1];
      botNums.push(bot.body);
      bot.legs = bot.legs[(bot.legs).length -1];
      botNums.push(bot.legs);

      console.log('BOT NUMS', botNums);
      botPhoto = botNums.join('');
    }

    var getBot = function(){
      console.log('BOT PHOTO', botPhoto);
      return botPhoto;
        // return myBot;
    };

    return {
        makeBot: makeBot,
        getBot: getBot
    };
})
.controller('BitzHomepageController', function() {
  var vm = this;
  vm.hello = "hello";
  console.log('hello from bitz controller');
})
.controller('MakestationController', ['bitzbotService', '$location', function(bitzbotService, $location) {
  var vm = this;
  vm.hello = "hello";
  vm.bot = {};
  vm.faceIsReady = false;
  vm.make = function(bot) {
    bitzbotService.makeBot(bot);
    $location.path('/bitzprint');
  };

  // todo this needs to be a toggle
  vm.selectedFace = function(){
    console.log(vm.faceIsReady);
    console.log('you selected a face');
    vm.faceIsReady = true;
    console.log(vm.faceIsReady);
  }
  // vm.make = function(bot) {
  //   console.log('MAKING', bot);
  //   $location.path('/bitzprint');
  // }
  console.log('hello from make controller');
}])
.controller('BitzprintController', ['$scope', 'bitzbotService', function($scope, bitzbotService) {
  var vm = this;
  this.bot = bitzbotService.getBot();
  console.log('THIS BOT', this.bot);
  console.log('hello from print controller');
  // console.log('get bot', bitzbotService.getBot());
  // vm.bot = $scope.bot;
  // console.log('SCOPE', $scope);
}]);

// TODO add on click toggle selected outline class on bot parts
