import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { delay, finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoading: boolean = true;
  data: Object = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.appService.getIndexVal()
    .pipe(
      delay(1000),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      data => {
        this.data = data;
      },
      err => {
        console.log(err);
        this.data = 'Something went wrong, please try again later';
      }
    );
  }
}
