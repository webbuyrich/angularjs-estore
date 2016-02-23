(function(){

	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'X number sided square or circle'
	}



})();
