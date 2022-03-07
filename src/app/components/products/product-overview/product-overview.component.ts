import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../data/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  
  public products = [];
  // to hold the currently passed id parameter
  public selectedProductId;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _productService: ProductService) { }
  
  ngOnInit() {
    // read the route parameter
    //
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedProductId = id;
      this.selectedProductId = ProductDetailsComponent.selectedId;
    }) //

    this._productService.getProducts()
      .subscribe(data => this.products = data);    
  }
  
}
