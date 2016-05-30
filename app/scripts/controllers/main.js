'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    
    //Define storage for tasks
    $scope.tasks = [];
    
    //Function to add task
    $scope.addTodo = function () {
      $scope.tasks.push($scope.title);
    };

    //Function to delete task
    $scope.deleteTodo = function (index) {
      $scope.tasks.splice(this.$index, 1);
    };

    //Function to update task
    $scope.updateTodo = function (index) {
      $scope.tasks[this.$index] = $scope.title;
    }


  });
