/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.newNote = {};

            $scope.addNote = function () {
                $scope.newNote.id = Date.now();
                $scope.data.notes.push($scope.newNote);
                $scope.newNote = {};
            }
        }
    ]);