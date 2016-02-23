(function(){

	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [

		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'X number sided square or circle',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Foil Head',
			price: 18.95,
			description: 'Two tight scircle 3 circle',
			canPurchase: true,
			soldOut: false
		}


	];
	



})();
