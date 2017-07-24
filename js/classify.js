var app=angular.module("app",[]);
	app.controller('goBack',function($scope){
		//定义返回事件
		$scope.goBack=function(){
			window.history.back();
		}
	});