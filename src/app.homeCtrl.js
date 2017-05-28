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

    debugger // TODO: See this :) Object.define .etc
    return descriptor;
  }
}

console.log(new C());


class HomeCtrl {
  constructor($http) {
    this.user = {
      name: 'User name'
    };

    $http.get('http://localhost:3000/api//svc/translations').then(
      res => console.log(res)
    )
  }

  static asd = "Asd";

  qwe = "qwe";

  init() {}
}

HomeCtrl.$inject = ['$http'];

export default HomeCtrl;
