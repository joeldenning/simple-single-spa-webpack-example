import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2.component.ts';
import {enableProdMode} from '@angular/core';

enableProdMode()

@NgModule({
	imports: [BrowserModule],
	declarations: [App2],
	bootstrap: [App2]
})
export default class MainModule {
}
