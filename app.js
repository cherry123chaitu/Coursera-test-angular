(function(){
    'use strict';
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalValue=0;

    $scope.displayNumeric=function (){
        var totalNameValue=calculate($scope.name);
        $scope.totalValue=totalNameValue;
    }
    });

    function calculate(string){
        var stringLength=0;
        for(var i =0;i<string.length;i++){
            stringLength+=string.charCodeAt(i);
        }
        return stringLength;
    }



})();