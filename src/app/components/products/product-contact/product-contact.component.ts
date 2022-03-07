import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../data/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-contact',
  templateUrl: './product-contact.component.html',
  styleUrls: ['./product-contact.component.css']
})
export class ProductContactComponent implements OnInit {

  public products = [];
  // to hold the currently passed id parameter
  public selectedProductId;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _productService: ProductService) { }
  
  ngOnInit() {
    // read the route parameter
    // snapshot approach 
    //console.log(this.activatedRoute.snapshot.paramMap);
    //let routeParamId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.selectedProductId = routeParamId;
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
