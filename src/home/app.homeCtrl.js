/**
 * Controller
 */
//todo: $inject decorator instead of constructor
//@test


class HomeCtrl {
  /**
   * @type {{name: string}}
   */
  user = {
    name: 'User name'
  };
  /**
   * @type {Map}
   */
  map = new Map();

  static asd = "Asd";
  qwe = "qwe";


  init() {
    this.map.set('data', [
      {title: '1'},
      {title: '2'},
      {title: '3'},
      {title: '4'}
    ]);
  }

  constructor($http) {
    $http.get('http://localhost:3000/api//svc/translations').then(
      res => console.log(res)
    );

    this.init();
  }
}

HomeCtrl.$inject = ['$http'];

function test(ref) {
  ref.getData = data => {
    return this.map.get(data);
  }

  return ref;
}

export default HomeCtrl;
