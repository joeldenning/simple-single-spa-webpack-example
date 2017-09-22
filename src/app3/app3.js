import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';
import './app3.module.js';
import './show-hello-world.component.js';

const ngLifecycles = singleSpaAngular1({
	angular,
	domElementGetter,
	mainAngularModule: 'app3',
	uiRouter: false,
	preserveGlobal: false,
	template: `
		<show-hello-world />
	`,
});

export function bootstrap(props) {
	return ngLifecycles.bootstrap(props);
}

export function mount(props) {
	return ngLifecycles.mount(props);
}

export function unmount(props) {
	return ngLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app3');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app3';
		document.body.appendChild(el);
	}

	return el;
}
