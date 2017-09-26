import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';

import { appHome } from './home/home.module';

export const Module = angular
  .module('app', [
    CoreModule,
    appHome
  ])
  .component('layout', { // TODO: replace with layout component
    template: '<div ui-view></div>',
  })
  .component('app', {
    template: '<layout></layout>'
  })
  .name;
