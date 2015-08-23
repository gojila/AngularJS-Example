var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.factory('ExampleService', ['$http', 'Config',
    function ($http, Config) {
        var service = {};

        service.ProcessFile = function (fileName) {
            return $http.post(Config.apiUrl + '/example/processfile', '"' + fileName + '"');
        };

        return service;
    }]);

// phonecatControllers.controller('PhoneListCtrl', ['$scope',
//   function($scope){
//     $scope.phones = [
//         {
//             age: 0,
//             id: 'motorola-xoom-with-wi-fi',
//             imageUrl: 'img/phones/motorola-xoom-with-wi-fi.0.jpg',
//             name: 'Motorola XOOM\u2122 with Wi-Fi',
//             snippet: 'The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).'
//         },
//         {
//             age: 1,
//             id: 'motorola-xoom',
//             imageUrl: 'img/phones/motorola-xoom.0.jpg',
//             name: 'MOTOROLA XOOM\u2122',
//             snippet: 'The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the worlds first tablet powered by Android 3.0 (Honeycomb).'
//         }];
//   }]);

  phonecatControllers.controller('PhoneListTestCtrl', function($scope, $http, $window){
      $http.get("http://localhost:49384/api/mobile")
    .success(function(response) {$scope.phones = response;});

    var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');

    if (deleteUser) {
      $window.alert('Going to delete the user');
    }


    });

    phonecatControllers.controller('PhoneDetailTestCtrl', ['$scope', '$http',
    function($scope, $http){
      $scope.submit = function () {

          var mobile = {
              id: '12',
              name: '12',
              age: '12',
              snippet: '12',
              imageUrl: '12'
          };

          $http({
            method: 'post',
            url: 'http://localhost:49384/api/mobile',
            data: {
              "id": '12',
              "name": '12',
              "age": '12',
              "snippet": '12',
              "imageUrl": '12'
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).
          success(function (data, status, headers, config) {
              alert('Added Successfully');
          }).
          error(function (data, status, headers, config) {
              alert("erro");
          });
        };
    }]);

// phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
//   function($scope, $http){
//     // $http.get('phone/phones.json').success(function(data){
//     //   $scope.phones = data;
//     $scope.orderProp = 'age';
//     // });
//

  // phonecatControllers.controller('PhoneListCtrl', ['$scope', '$routeParams',
  //   function($scope, $routeParams){
  //       $scope.phoneId = $routeParams.phoneId;
  //   }]);
