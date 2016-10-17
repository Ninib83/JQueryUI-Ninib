/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;

            $scope.data = {
                notes: [
                    {
                        id: 1,
                        title: "Title 1",
                        description: "Description 1"
                    },
                    {
                        id: 2,
                        title: "Title 2",
                        description: "Description 2"
                    }
                ]
            }

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);