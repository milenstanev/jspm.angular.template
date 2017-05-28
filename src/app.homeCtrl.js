class HomeCtrl {
  constructor($http) {
    this.user = {
      name: 'User name'
    };

    $http.get('http://localhost:3000/api//svc/translations').then(
      res => console.log(res)
    )
  }

  init() {}
}

HomeCtrl.$inject = ['$http'];

export default HomeCtrl;
