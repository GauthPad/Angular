import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  productId: Number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
  }

}
