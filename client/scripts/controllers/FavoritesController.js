app.controller('FavoritesController', ['$scope', 'MovieService', function($scope, MovieService) {
    $scope.detailObject = MovieService.detailObject;
    $scope.addToFavorites = function(detailObject) {
        MovieService.addToDatabase(detailObject)
            .then(function(response) {
                console.log('returned to favorites controller', response);
            });
    };
    $scope.favoritesObject = MovieService.favoritesObject;
    MovieService.getFavorites();
}]);
