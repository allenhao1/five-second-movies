angular.module('starter.controllers', [])

.controller('MoviesCtrl', function($scope, Movie, $interval) {

  var movies = Movie.all();
  $scope.score = 0;
  $scope.timer = 5;
  var interval = 0;
  $scope.next = function(correct) {
    if(correct) {
      $scope.score++;
    }
    $interval.cancel(interval);
    var pos = Math.floor(Math.random() * movies.length);
    $scope.movie = movies[pos];
    movies.splice(pos);
    $scope.timer = 5;
    interval = $interval(function(){
      $scope.timer--;
    }, 1000, $scope.timer);
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
