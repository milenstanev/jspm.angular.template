/**
 * Home Component description or something
 */
import template from './home.html!text';
import { CtrlBase } from 'milenstanev/mstanev.angular.1.x.x.core';

function decor(ref) {
  ref.prototype.map = ref.prototype.map || new Map();
  ref.prototype.map.set('test', 'Test');

  return ref;
}

export const HomeComponent = {
  bindings: {
    title: '@',
    user: '<'
  },
  template,
  controller: class HomeCtrl extends CtrlBase {
    static $inject = ['$scope'];

    $onInit() {
      console.log(this.$scope);
    }
  }
};
