import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';

import { appHome } from './home/home.module';

export const TemplateModule = angular
  .module('templateModule', [
    CoreModule,
    appHome
  ])
  .component('layout', { // TODO: replace with layout component
    template: '<div ui-view></div>',
  })
  .component('templateComponent', {
    template: '<layout></layout>'
  })
  .name;
