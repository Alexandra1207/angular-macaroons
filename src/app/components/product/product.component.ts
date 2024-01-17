import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Output() addToCardEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();


  constructor() {
    this.product = {
      image: '',
      title: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  addProductToCard(): void {
    this.addToCardEvent.emit(this.product);
  }

}
