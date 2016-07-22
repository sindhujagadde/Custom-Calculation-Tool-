/* JavaScript Document */

(function () {
    "use strict";
    /* global angular */
    var app = angular.module('mycalculator', []);

    app.controller('CalculatorController', ['$scope', function ($scope) {
       $scope.lumen_options = [375, 600, 900, 1125, 1600];
        $scope.current_lumens = 600;
        $scope.current_cost = 12;
        $scope.current_hours = 3;
        $scope.total_days = 365;
        
        $scope.Inc_conversion = .0625;
        $scope.Hal_conversion =.0450;
        $scope.CFL_conversion = .0146;
        $scope.LED_conversion = .0125;
        
        $scope.calculate = function(){
           $scope.Inc_wattage = ($scope.current_lumens * $scope.Inc_conversion).toFixed(1);
            $scope.Hal_wattage = ($scope.current_lumens * $scope.Hal_conversion).toFixed(1);
            $scope.CFL_wattage = ($scope.current_lumens * $scope.CFL_conversion).toFixed(1);
            $scope.LED_wattage = ($scope.current_lumens * $scope.LED_conversion).toFixed(1);
            
            if($scope.current_hours>24){$scope.current_hours=24;}
            
            var total_hours = $scope.total_days*$scope.current_hours;
            var cost = $scope.current_cost/100;
            
            $scope.Inc_cost = ((($scope.Inc_wattage * total_hours)/1000) * cost).toFixed(2);
            $scope.Hal_cost = ((($scope.Hal_wattage * total_hours)/1000) * cost).toFixed(2);
            $scope.CFL_cost = ((($scope.CFL_wattage * total_hours)/1000) * cost).toFixed(2);
            $scope.LED_cost = ((($scope.LED_wattage * total_hours)/1000) * cost).toFixed(2);
            
            
        }
        
        $scope.calculate();
        
       
    }]);
   
})();


