import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReplaceFilterPipe } from './replace-filter.pipe';


@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ReplaceFilterPipe
	],
	exports: [
		ReplaceFilterPipe
	],
	providers: [
		ReplaceFilterPipe
	]
})

export class ReplaceFilterModule {

}