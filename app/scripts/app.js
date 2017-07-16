'use strict';
angular.module('rswebdesignApp', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    // route for the home page
                    .state('app', {
                        url: '/',
                        views: {
                            'header': {
                                templateUrl: 'views/header.html'
                            },
                            'content': {
                                templateUrl: 'views/home.html',
                                controller: 'IndexController'
                            },
                            'footer': {
                                templateUrl: 'views/footer.html'
                            }
                        }
                    })

                    // route for the about page
                    .state('app.about', {
                        url: 'about',
                        views: {
                            'content@': {
                                templateUrl: 'views/about.html',
                                controller: 'AboutController'
                            }
                        }
                    })

                    // route for the contact page
                    .state('app.contact', {
                        url: 'contact',
                        views: {
                            'content@': {
                                templateUrl: 'views/contact.html',
                                controller: 'ContactController'
                            }
                        }
                    })

                    // route for the menu page
                    .state('app.portfolio', {
                        url: 'portfolio',
                        views: {
                            'content@': {
                                templateUrl: 'views/portfolio.html',
                                controller: 'PortfolioController'
                            }
                        }
                    });
                    
                    $urlRouterProvider.otherwise('/');

})

;