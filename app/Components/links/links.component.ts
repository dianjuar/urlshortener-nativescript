import { Component, OnInit } from '@angular/core';

import { Links } from '../../Models/links.model';

@Component({
	selector: 'links',
	moduleId: module.id,
	templateUrl: 'links.component.html'
})

export class LinksComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		
	}

	nothing(){
		console.log("tap");
	}
}