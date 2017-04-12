app.controller('SearchController', ['$scope', 'MovieService', '$location', function($scope, MovieService, $location) {
// searches OMDB and returns movie containing keywords
    $scope.searchOMDB = function(searchCriteria) {
        console.log('Input controller search criteria ', searchCriteria);
        MovieService.searchOMDB(searchCriteria)
            .then(function(response) {
                console.log('Input controller response ', response);
            });
    };
    //combined input and output controllers - default poster referenced for movies without posters
    $scope.movieObject = MovieService.movieObject;
    $scope.defaultPoster = {
        default: 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg'
    };
// redirects to favorites when movie is selected from results, displays details
    $scope.showDetails = function(movie) {
        MovieService.showDetails(movie)
            .then(function(response) {
                $location.path('/favorites');
            });
    };
}]);
