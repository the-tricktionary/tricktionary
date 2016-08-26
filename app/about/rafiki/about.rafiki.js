'use strict';
/**
 * @class trick.about.rafiki
 * @memberOf trick
 * @requires ngRoute
 */
angular.module('trick.about.rafiki', ['ngRoute'])
  
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/about/rafiki', {
        templateUrl: '/about/rafiki/about.rafiki.html'
      });
    }
  ]);
