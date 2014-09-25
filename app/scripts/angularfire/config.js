angular.module('firebase.config', [])
  .constant('FBURL', 'https://amber-torch-2724.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');