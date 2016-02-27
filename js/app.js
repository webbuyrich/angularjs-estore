(function(){

	var app = angular.module('store', []);

	//REVIEW CONTROLLER
	app.controller('ReviewController', function(){
		
		this.review = {};

		//add a new review
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	//CUSTOM DIRECTIVE FOR PRODUCT TITILE
	app.directive('productTitle', function(){
		return{
			// Type of Directive(E for Element)
			restrict: 'E',
			templateUrl: 'product-title.html'
		};

	});

	//CUSTOM DIRECTIVE FOR PRODUCT INFO and ADDING CONTROLLER TO DIRECTIVE
	app.directive('product-info',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-info.html',
			controller: function(){
				this.products = gems;
			},
			controllerAs: 'store'
		};
	});

	
	//STORE CONTROLLER AND GEMS
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = 
	[
	  {
	    "name": "Velity",
	    "price": "34.78",
	    "description": "adipisicing non anim ipsum ullamco ea",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "browns",
	      	"thumb": "browns"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Ovation",
	    "price": "89.38",
	    "description": "dolor deserunt voluptate proident aliquip aliquip",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "seahawks",
	      	"thumb": "seahawks"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Obliq",
	    "price": "7.75",
	    "description": "mollit eiusmod ea cillum non officia",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "dolphins",
	      	"thumb": "dolphins"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Gaptec",
	    "price": "28.45",
	    "description": "labore est anim culpa dolore laborum",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "seahawks",
	      	"thumb": "seahawks"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Extragene",
	    "price": "56.98",
	    "description": "nisi elit ex ea exercitation est",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "chargers",
	      	"thumb": "chargers"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Ramjob",
	    "price": "47.23",
	    "description": "sint nostrud sunt ad eu tempor",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "dolphins",
	      	"thumb": "dolphins"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Skyplex",
	    "price": "30.28",
	    "description": "nulla nostrud pariatur fugiat irure proident",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "browns",
	        "thumb": "browns"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Moreganic",
	    "price": "76.83",
	    "description": "occaecat enim fugiat in ex laboris",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "browns",
	      	"thumb": "browns"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Brainclip",
	    "price": "51.97",
	    "description": "fugiat ut aliqua nisi cupidatat consequat",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "panthers",
	      	"thumb": "panthers"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Rameon",
	    "price": "66.01",
	    "description": "consequat veniam ex eu incididunt Lorem",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "panthers",
	      	"thumb": "panthers"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Concility",
	    "price": "38.85",
	    "description": "irure sint laboris sunt irure enim",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "eagles",
	      	"thumb": "eagles"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Tubesys",
	    "price": "47.89",
	    "description": "in laboris minim aliquip amet nulla",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "chargers",
	      	"thumb": "chargers"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Hyplex",
	    "price": "23.67",
	    "description": "mollit magna aute dolore cupidatat reprehenderit",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "dolphins",
	      	"thumb": "dolphins"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Kenegy",
	    "price": "42.75",
	    "description": "magna incididunt officia sint incididunt dolor",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "dolphins",
	      	"thumb": "dolphins"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Xumonk",
	    "price": "46.13",
	    "description": "Lorem elit est reprehenderit veniam irure",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "browns",
	      	"thumb": "browns"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Lumbrex",
	    "price": "25.00",
	    "description": "reprehenderit aute ut officia excepteur reprehenderit",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "seahawks",
	      	"thumb": "seahawks"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Zerology",
	    "price": "45.71",
	    "description": "occaecat velit cillum laborum ipsum minim",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "ravens",
	      	"thumb": "ravens"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Terragen",
	    "price": "90.15",
	    "description": "excepteur ea ea mollit irure consequat",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "dolphins",
	      	"thumb": "dolphins"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Imperium",
	    "price": "37.10",
	    "description": "magna fugiat irure sint id deserunt",
	    "canPurchase": true,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "seahawks",
	      	"thumb": "seahawks"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Peticular",
	    "price": "8.45",
	    "description": "anim magna magna sunt id officia",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "eagles",
	      	"thumb": "eagles"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  },
	  {
	    "name": "Proxsoft",
	    "price": "62.40",
	    "description": "amet duis Lorem sit ad consectetur",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "ravens",
	      	"thumb": "ravens"
	  	  }	
	    ],
	    "reviews": [
	    	{
	    		stars: 5,
	    		body: "I dig this product!",
	    		author: "kdurant@nba.com"
	    	},
	    	{
	    		stars: 1,
	    		body: "This thing sucks!",
	    		author: "kbryant@nba.com"
	    	}
	    ]
	  },
	  {
	    "name": "Marvane",
	    "price": "98.27",
	    "description": "consectetur sunt amet aliqua laborum amet",
	    "canPurchase": false,
	    "soldOut": false,
	    "images": [
	      {
	        "full": "seahawks",
	        "thumb": "seahawks"
	      }
	    ],
	    "reviews": [
	    	     	{
	    	     		stars: 5,
	    	     		body: "I dig this product!",
	    	     		author: "kdurant@nba.com"
	    	     	},
	    	     	{
	    	     		stars: 1,
	    	     		body: "This thing sucks!",
	    	     		author: "kbryant@nba.com"
	    	     	}
	    	     ]
	  }
	];
	



})();
