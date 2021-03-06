// create a new module
// 'store' is the application name
// the '[ ]', contains dependencies
(function(){  // wraps app into a closure (a lexical scope)
  var app = angular.module('gemStore', ['storeProducts']);//['store-products']);
  
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);  // form submit puts an object with review properties into the product's reviews
      this.review = {};                   // reset the form submission back to empty
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 5.95 * 3,
      shine: 10,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
      images: [
          'images/gem-01.gif',
          'images/gem-01.gif',
          'images/gem-01.gif'
      ],
      reviews: [
        {
        stars: 5,
        body: "I like this product",
        author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product is awful",
          author: "tim@hater.com"
        }
      ],
      canPurchase: true,
      soldOut: false  // Hide the gem if the file is sold out
    },
    {
      name: "Pentagonal gem",
      price: 5.95,
      shine: 4,
      description: ". . .",
      images: [
        'images/gem-02.gif',
        'images/gem-02.gif',
        'images/gem-02.gif'
      ],
      canPurchase: false,
      soldOut: false
    }
  ];

  console.log(gems);

})();