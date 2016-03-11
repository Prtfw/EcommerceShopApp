// our controllers go here



var shopapp = angular.module('shopapp', ['ngRoute', 'ngResource']); //[] for dependencies

shopapp.controller('shopappcontroller', function($scope, pdtdtserv){


	$scope.headerSrc =	'templates/header.html'

	$scope.products = pdtdtserv.query();

	$scope.currProduct = null;

	var allprod = $scope.products;

	$scope.getProduct = function(id){
		var products = $scope.products;
		for (var i=0; i< products.length; i++){
			if (products[i].id ==id){
				$scope.currProduct = products[i];
			}
		}
	};


	$scope.getCategory = function(cat){
		var p = allprod;
		var prodcat = []
		
		for (var i=0; i< p.length; i++){
			for (var j=0; j< p[i].categories.length; j++){
				if (p[i].categories[j] == cat){
					console.log(cat)
					prodcat.push(p[i]);


				}
				else if(cat == ''){ 
					prodcat = allprod;
				} 
			}
		}
		

			$scope.products = prodcat;
	} 

	 

});

shopapp.controller('productdetcontroller', function($scope, $routeParams){
	$scope.getProduct($routeParams.id);
});
