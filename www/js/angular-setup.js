(function () {
    var app = angular.module('Franconjugaison', []);
 
    function MainController() {
    }
	
 
    angular.extend(MainController.prototype, {
		
		verbo: verbo,
		
		greetMe: function () {
            this.name = '';
        }
    });
 
    app.controller('mainController', MainController);
})();