import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-brand',
  	templateUrl: './brand.component.html',
  	styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
	brand: number;
  	
  	constructor (private route: ActivatedRoute) { }

  	ngOnInit() {
    	this.route.params.subscribe(params => this.brand = params['brand'])
  	}
}