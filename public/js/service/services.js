// services live here
shopapp.factory('pdtdtserv', function($resource){

 return $resource('/products');

})