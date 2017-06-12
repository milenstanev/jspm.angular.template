import angular from 'angular/bower-angular';

import appHomeTpl from './app.home.html!text';
import HomeCtrl from './app.homeCtrl.js';

const appHome = angular.module('app.home', []);

appHome.component('app.home', {
  template: appHomeTpl,
  controller: HomeCtrl
});

export default 'app.home';

