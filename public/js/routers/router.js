// router code lives here

shopapp.config(function($routeProvider){
	$routeProvider
		.when('/', { 
			templateUrl: 'templates/home.html',
			controller: 'shopappcontroller'
		})
		.when('/product/:id',{
			templateUrl: 'templates/product.html',
			controller: 'productdetcontroller'
		})
		.when('/cart',{
			templateUrl: 'templates/cart.html',
			controller: 'cartcontroller'
		})
		.otherwise({redirectTo: '/'
		})

});