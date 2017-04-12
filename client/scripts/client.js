var app = angular.module('OMDBapp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/templates/home.html'
    })
    .when('/search', {
      templateUrl: 'views/templates/search.html',
      controller: 'SearchController'
    })
    .when('/favorites', {
      templateUrl: 'views/templates/favorites.html',
      controller: 'FavoritesController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
