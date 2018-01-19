import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('app-1', () => import('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.declareChildApplication('app-2', () => import('../app2/app2.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
	return function(location) {
		return location.pathname.startsWith(`${prefix}`);
	}
}
