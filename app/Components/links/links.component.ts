import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

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

	constructor(private _location: Location) {
		this.urls = new Array<Link>();
	}

	ngOnInit() {
		this._location.subscribe(() => {
			this.urls = new Array<Link>();
			this._loadData();
		});

		this._loadData();
	}

	private _loadData() {
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