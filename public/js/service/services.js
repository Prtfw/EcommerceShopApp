// services live here
shopapp.factory('pdtdtserv', function($resource){

 return $resource('/products');

})


shopapp.factory('cartserv', function($resource){
	var cart = [];
	return $resource('/cart');
})