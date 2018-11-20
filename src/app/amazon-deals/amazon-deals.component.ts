import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-deals',
  templateUrl: './amazon-deals.component.html',
  styleUrls: ['./amazon-deals.component.css']
})
export class AmazonDealsComponent implements OnInit {

  count: any = [5,5,5,5,5];

  constructor() { }

  ngOnInit() {
  }

}
