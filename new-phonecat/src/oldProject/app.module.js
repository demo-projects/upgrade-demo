'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

angular.module('phonecatApp')
  .component('angularjsComponent', {
    template: '<h2>angularJSComponent</h2>'
  });
