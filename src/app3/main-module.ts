import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App3} from './app3.component.ts';
import {enableProdMode} from '@angular/core';

//enableProdMode()

@NgModule({
	imports: [BrowserModule],
	declarations: [App3],
	bootstrap: [App3]
})
export default class MainModule {
}
