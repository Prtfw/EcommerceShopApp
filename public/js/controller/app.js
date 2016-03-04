// our controllers go here
angular.module('shopapp', []); //[] for dependencies

var shopappcontroller=function($scope){

	$scope.products=[
{
		"id": 0,
		"name": "Portraiture Pendant",
		"vendor": "Mimiko and Company",
		"categories": ["accessories"],
		"description": "A beautiful, elegant piece.",
		"price": 85.00,
		"onSale": false,
		"thumb": "img/img-pendant.png",
		"quantityInStock": 5
	},
	{
		"id": 1,
		"name": "Cufflinks",
		"vendor": "Chromeo",
		"categories": ["accessories"],
		"description": "Rich heritage cufflinks, pure silver.",
		"price": 200.00,
		"onSale": false,
		"thumb": "img/img-cufflinks.png",
		"quantityInStock": 10
	},
	{
		"id": 2,
		"name": "Neilson Carginan",
		"vendor": "Crux and Crucible",
		"categories": ["outerwear"],
		"description": "Rich heritage cufflinks, pure silver.",
		"price": 200.00,
		"onSale": false,
		"thumb": "img/img-cardigan.png",
		"quantityInStock": 10
	}];

}



angular
.module('shopapp', [])
.controller('shopappcontroller', shopappcontroller);