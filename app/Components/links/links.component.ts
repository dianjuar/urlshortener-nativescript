import { Component, OnInit } from '@angular/core';

import { Link } from '../../Models/links.model';

@Component({
	selector: 'links',
	moduleId: module.id,
	templateUrl: 'links.component.html'
})

export class LinksComponent implements OnInit {

	/**
	 * List of Links shown on the main view
	 */
	public urls: Array<Link>;

	constructor() {
		this.urls = new Array<Link>();
	}

	ngOnInit() {
		this.urls.push(
			<Link>({
				long: 'Lorem',
				short: 'Lorem',
			})
		);
	}

	nothing() {
		console.log("tap");
	}
}