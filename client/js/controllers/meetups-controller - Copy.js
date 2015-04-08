app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  /*var Meetup = $resource('/api/meetups');

  Meetup.query(function (results) {
    $scope.meetups = results;
  });

  $scope.meetups = []

  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }*/

  var Details = $resource('/api/meetups');

  Details.query(function (results) {
    $scope.details = results;
  });

  $scope.details = []

  $scope.createMeetup = function () {
    var details = new Details();
    //details.name = $scope.meetupName;
    details.$save(function (result) {
      $scope.details.push(result);
      //$scope.meetupName = '';
    });
    console.log($scope);
  }
}]);