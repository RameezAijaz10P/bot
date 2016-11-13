/**
 * Created by e897x724 on 11/12/2016.
 */
(function(){
    'use strict';
    angular.module('bot').controller('dashboardController',dashboardController);
    dashboardController.$inject= ["$scope", "$http"];
    function dashboardController($scope, $http){
        $http.get("http://api.openweathermap.org/data/2.5/weather?id=4281730&appid=3cbaa129a394f570b421f6c1a2db29c8&units=imperial").then(function(response) {
            var data = response.data;
            var weather = data.weather[0];
            $scope.weather = weather.main;
            $scope.temp = Math.round(data.main.temp);
            var conditionCode = weather.id;
            if (conditionCode < 300) //2xx = Thunderstorm
                $scope.condition = "thunderstorm";
            else if (conditionCode < 400) //3xx = Drizzle
                $scope.condition = "rain";
            else if (conditionCode < 600) //5xx = Rain
                $scope.condition = "rain";
            else if (conditionCode < 700) //6xx = Snow
                $scope.condition = "snow";
            else if (conditionCode < 800) //7xx = weird atmosphere stuff
                $scope.condition = "wtf";
            else if (conditionCode == 800) // 800 = clear sky
                $scope.condition = "sunny";
            else if (conditionCode < 900) //80x = Clouds
                $scope.condition = "cloud";
            else if (conditionCode < 910) //90x = Extreme
                $scope.condition = "extreme";
            else if (conditionCode < 1000) //9xx = Random stuff, mostly bad
                $scope.condition = "wtf";
        });




    }
})();
