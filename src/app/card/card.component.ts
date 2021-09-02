import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products = [
    { "id": 1, "name": "Commercial", "description": "2 BHK House for rent in Surat 1200 sqft", "price": "12000/Month", "src": "../../assets/img/35.jpg/" },
    { "id": 2, "name": "Residential", "description": "3 BHK House for rent in Gujarat 2000 sqft", "price": "50000/Month", "src": "../../assets/img/36.jpg/" },
    { "id": 3, "name": "Villa", "description": "2 BHK House for rent in Dispur 1800 sqft", "price": "20000/Month", "src": "../../assets/img/31.jpg/" },
    { "id": 4, "name": "Apartment", "description": "3 BHK House for rent in Agra 1200 sqft", "price": "30000/Month", "src": "../../assets/img/24.jpg/" },
    { "id": 5, "name": "Beach House", "description": "2 BHK House for rent in Udaipur 1200 sqft", "price": "20000/Month", "src": "../../assets/img/16.jpg/" },
    { "id": 6, "name": "Duplex", "description": "4 BHK House for rent in Mumbai 5000 sqft", "price": "45000/Month", "src": "../../assets/img/30.jpg/" }
  ];
  resultProducts = [...this.products];
  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.dataService.getSearchValue().subscribe((res: any) => {
      console.log('res', res);
      this.resultProducts = [];
      if (res.length) {
        this.products.forEach((item: any) => {
          if (item.name.toLowerCase().includes(res.toLowerCase()) || item.description.toLowerCase().includes(res.toLowerCase())) {
            console.log('Item #$#$#$#$#$#$$$$$$$$$#', item);
            this.resultProducts.push(item);
          }
        })
      }
      else {
        this.resultProducts = [...this.products];
      }
      console.log('this.resultProducts@@', this.resultProducts);
      console.log('this.product', this.products);
    })
  }
}