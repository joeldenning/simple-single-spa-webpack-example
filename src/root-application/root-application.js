import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('app-1', () => import('../app1/app1.js'), hashPrefix('/app1'));
singleSpa.declareChildApplication('app-2', () => import('../app2/app2.js'), hashPrefix('/app2'));

singleSpa.start();

function hashPrefix(prefix) {
	return function(location) {
		return location.hash.startsWith(`#${prefix}`);
	}
}
