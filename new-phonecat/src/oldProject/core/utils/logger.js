'use strict';

angular.
module('core.phone').
service('Logger', function (storage) {
  this.log = function (value) {
    console.log(value);
    storage.store();
  }
});
