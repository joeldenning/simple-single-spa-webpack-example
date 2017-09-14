import {Component, NgZone, Inject} from '@angular/core';

@Component({
	selector: 'app3',
	template: `
		<div style="margin-top: 100px;">
			This is the second app and was rendered by App2 which is written in Angular
		</div>
	`,
})
export class App3 {
}
