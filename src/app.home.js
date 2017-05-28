import angular from 'angular/bower-angular';

import HomeCtrl from './app.homeCtrl.js';

const appHome = angular.module('app.home', []);

appHome.component('app.home', {
  template: '' +
              '<h1>Home</h1>' +
              '<p>Hello, {{ $ctrl }}!</p>' +
              'data: {{ $ctrl.map.get("data") }}' +
              '<div ng-repeat="items in $ctrl.getMapData()">{{items.title}}</div>',
  controller: HomeCtrl
});

export default 'app.home';

