import { Component, OnInit } from '@angular/core';
import { ShrinkUrlService } from '../../Services/shrink-url.service';

@Component({
	selector: 'shrink-link',
	moduleId: module.id,
	templateUrl: './shrink-link.component.html',
	styleUrls: ['./shrink-link.component.css']
})

export class ShrinkLinkComponent implements OnInit {

	public longUrl: string;

	constructor(private _shrinkURL: ShrinkUrlService) { }

	ngOnInit() {
	}
}