(function(){
    // declare a new module
    var app = angular.module('storeProducts', []);

    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.current = 0;
                this.setCurrent = function(value){
                    this.current = value || 0;
                };
                this.hasImages = function(images){
                    return images.length;
                };
            },
            controllerAs: 'gallery'
        };
    });

    // Create a 'template expanding directive'
    // - the 2nd argument configures how the directive will work
    // - It will allow "<product-title></product-title>" to be used in the html
    // - camelCase case converts to dase separators
    app.directive('productTitle', function(){
        return {
            restrict: 'E',  // E = HTML element
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
                this.panels = null;
            },
            controllerAs: 'panel'
        };
    });

})();