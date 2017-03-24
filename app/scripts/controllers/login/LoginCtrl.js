'use strict';
angular.module('softvFrostApp').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(authFactory, ngNotify, $state, $localStorage, $stateParams, $window) {
	this.$onInit = function () {
		if ($localStorage.currentUser) {
			if ($stateParams.esn != undefined) {
				$state.go('home.provision.activacion', {
					'esn': $stateParams.esn
				});
			} else {
				$state.go('home');
			}
		}
	}

	function login() {
		authFactory.login(vm.user, vm.password).then(function (data) {
			if (data) {
				$window.location.reload();
			} else {
				ngNotify.set('Datos de acceso erróneos', 'error');
			}
		});
	}

	var vm = this;
	vm.login = login;
}
