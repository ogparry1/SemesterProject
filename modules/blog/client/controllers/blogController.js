angular.module('postings').controller('BlogController', ['$scope', 'Postings',
  function ($scope, Postings) {
    /* Get all the listings, then bind it to the scope */
    Postings.getAll().then(function (response) {
      $scope.postings = response.data;
    }, function (error) {
      console.log('Unable to retrieve posts or no saved posts:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addPosting = function () {
      $scope.postings.push($scope.newPost);
      $scope.newPost = {};
    };

    $scope.deletePosting = function (index) {
      $scope.postings.splice(index, 1);
    };

    $scope.showDetails = function (index) {
      $scope.detailedInfo = $scope.postings[index];
    };
  }
]);
