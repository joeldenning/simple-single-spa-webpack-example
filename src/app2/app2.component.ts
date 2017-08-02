import {Component, NgZone, Inject} from '@angular/core';

@Component({
	selector: 'app2',
	template: `
		<div style="margin-top: 100px;">
			This was rendered by App2 which is written in Angular
		</div>
	`,
})
export class App2 {
}
