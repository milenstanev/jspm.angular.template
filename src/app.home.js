import angular from 'angular/bower-angular';

import HomeCtrl from './app.homeCtrl.js';

const appHome = angular.module('app.home', []);

appHome.component('app.home', {
  template: '<h1>Home</h1><p>Hello, {{ $ctrl }}!</p>',
  controller: HomeCtrl
});

export default 'app.home';

