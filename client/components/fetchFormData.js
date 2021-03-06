angular.module('pet-detective')
  .factory('formDataFactory', function ($http) {
    return {
      fetchFormData() {
        return $http({
          url: '/bulletin',
          method: 'GET',
        })
          .then((response) => {
            console.log(response.data);
            return response.data;
          },
          (response) => { // optional
            console.log('fail');
          });
      },
    };
  })
  .controller('formDataController', function (formDataFactory) {
    this.data = formDataFactory.fetchFormData();
    console.log(this.data);
  })
  .directive('fetchFormData', function fetchFormDataDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'formDataController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/fetchFormData.html',
    };
  });
