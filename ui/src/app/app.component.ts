import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { delay, finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCatalogLoading: boolean = true;
  isOrdersLoading: boolean = true;

  catalogData: Object = '';
  ordersData: Object = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCatalogData();
    this.getOrdersData();
  }

  getCatalogData() {
    this.isCatalogLoading = true;

    this.appService.getCatalog()
    .pipe(
      delay(1000),
      finalize(() => this.isCatalogLoading = false)
    )
    .subscribe(
      data => {
        this.catalogData = data;
      },
      err => {
        console.log(err);
        this.catalogData = 'Something went wrong, please try again later';
      }
    );
  }

  getOrdersData() {
    this.isOrdersLoading = true;

    this.appService.getOrders()
    .pipe(
      delay(1000),
      finalize(() => this.isOrdersLoading = false)
    )
    .subscribe(
      data => {
        this.ordersData = data;
      },
      err => {
        console.log(err);
        this.ordersData = 'Something went wrong, please try again later';
      }
    );
  }
}
