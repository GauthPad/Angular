import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productName?: String;
  productCost?: Number;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data =>{
      this.productName = data.productName;
      this.productCost = data.productCost;
    })
  }

  ngOnInit(): void {
  }

}
