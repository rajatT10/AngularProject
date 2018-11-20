import { Component, OnInit } from '@angular/core';
import { Product, ConfigService } from 'src/app/config.service';


@Component({
  selector: 'app-flipkart-deals',
  templateUrl: './flipkart-deals.component.html',
  styleUrls: ['./flipkart-deals.component.css']
})
export class FlipkartDealsComponent implements OnInit {
  flipkartDeals: any;
  headers: string[];
  product: Product;
  ngOnInit() {
    this.getFlipkartDeals();
  }

  constructor(private configService: ConfigService) {
    
  }
  
  getFlipkartDeals() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          console.log(resp.body);
        // access the body directly, which is typed as `Config`.
        this.product = { ... resp.body };
      });
  }

}
