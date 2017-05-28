async function foo() {
  await bar();
}


class C {
  @enumerable(false)
  method() {}
}

function enumerable(value) {
  return function (target, key, descriptor) {
    descriptor.enumerable = value;
    descriptor.configurable = true;

    //debugger // TODO: See this :) Object.define .etc
    return descriptor;
  }
}

console.log(new C());

//todo: $inject decorator
class HomeCtrl {
  user = {
    name: 'User name'
  };
  map = new Map();
  static asd = "Asd";
  qwe = "qwe";

  init() {
    this.map.set('data', [
      {title: '1'},
      {title: '2'},
      {title: '3'}
    ]);
  }

  getMapData() {
    const data = this.map.get('data');

    return data;
  }

  constructor($http) {
    $http.get('http://localhost:3000/api//svc/translations').then(
      res => console.log(res)
    );

    this.init();
  }
}

HomeCtrl.$inject = ['$http'];

export default HomeCtrl;
