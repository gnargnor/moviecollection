app.factory('MovieService', ['$http', function($http) {
    // movies searched
    var movieObject = {
        searchResults: [],
    };
// detail of movie selected from search
    var detailObject = {
        details: {}
    };
// list of favorites saved to database
    var favoritesObject = {
      favoritesList : [],
    };
// get request - searches OMDB and returns movies matching keyword
    var searchOMDB = function(searchCriteria) {
        return $http.get('http://www.omdbapi.com/?s=' + searchCriteria)
            .then(function(response) {
                console.log('response from OMDB ', response);
                movieObject.searchResults = response.data.Search;
                console.log('value of movieObject.searchResults after response ', movieObject);
                return movieObject;
            });
    };
//get request for details of movie selected by title
    var showDetails = function(movie) {
        return $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').
        then(function(response) {
            // console.log('details from OMDB: ', response.data);
            detailObject.details = response.data;
            console.log('details from OMDB: ', detailObject.details.Title);
            return detailObject;

        });
    };
//posts selected movie to database
    var addToDatabase = function(detailObject) {
        return $http.post('/favorites', detailObject)
            .then(function(response) {
                console.log(response);
                getFavorites();
                return response;
            });
    };
//gets favorites from datavase
    var getFavorites = function(){
      return $http.get('/favorites')
        .then(function(response){
          favoritesObject.favoritesList = response.data;
          console.log('get: ', favoritesObject.favoritesList);
        });
    };
//returns public data to controllers
    return {
        movieObject: movieObject,
        detailObject: detailObject,
        searchOMDB: searchOMDB,
        showDetails: showDetails,
        addToDatabase: addToDatabase,
        getFavorites: getFavorites,
        favoritesObject: favoritesObject,
    };
}]);
