import * as singleSpa from 'single-spa';
import 'zone.js';

singleSpa.declareChildApplication('app-1', () => import('../app1/app1.js'), hashPrefix('/app1'));
//singleSpa.declareChildApplication('app-2', () => import('../app2/app2.js'), hashPrefix('/app2'));
//singleSpa.declareChildApplication('app-3', () => import('../app3/app3.js'), hashPrefix('/app3'));
singleSpa.declareChildApplication('app-2', () => import('../app2/app2.js'), hashPrefix('/app2'));
singleSpa.declareChildApplication('app-3', () => import('../app3/app3.js'), hashPrefix('/app3'));

singleSpa.start();

function hashPrefix(prefix) {
	return function(location) {
		return location.hash.startsWith(`#${prefix}`);
	}
}
