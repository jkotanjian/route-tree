import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-category',
  	templateUrl: './category.component.html',
  	styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
	cat: number;
  	
  	constructor (private route: ActivatedRoute) { }

  	ngOnInit() {
    	this.route.params.subscribe(params => this.cat = params['cat'])
  	}
}