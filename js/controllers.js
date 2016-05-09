var myNameSpace = angular.module('myApp', [])

myNameSpace.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Mike',
    'title' : 'Dr.'
  }
})
