import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShrinkUrlService } from '../../Services/shrink-url.service';
import { DataBaseService } from '../../Services/database.service';

@Component({
	selector: 'shrink-link',
	moduleId: module.id,
	templateUrl: './shrink-link.component.html',
	styleUrls: ['./shrink-link.component.css']
})

export class ShrinkLinkComponent implements OnInit {

	public longUrl: string;

	constructor(private _shrinkURL: ShrinkUrlService,
		private _location: Location,
		private _database: DataBaseService) { }

	ngOnInit() {
	}

	goAndShrink() {
		console.log("shrinking...");

		this._shrinkURL.shrink(this.longUrl).subscribe(
			(shortUrl) => {
				this._writeShortUrlInDataBase(shortUrl);
				this._location.back();
			}
		);
	}

	private _writeShortUrlInDataBase(shortUrl: string) {
		this._database.getDatabase().createDocument({
			type: "url",
			long: this.longUrl,
			short: shortUrl
		});
	}
}