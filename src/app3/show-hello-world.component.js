import angular from 'angular';
import template from './show-hello-world.template.html';

angular
	.module('app3')
	.component('showHelloWorld', {
		template,
		controllerAs: 'vm',
		controller() {
			const vm = this;
			vm.numClicks = 0;

			vm.onClick = () => {
				vm.numClicks++;
			}
		}
	})
