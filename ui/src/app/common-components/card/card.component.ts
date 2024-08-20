import { Component, Input } from '@angular/core';
import { delay, finalize } from 'rxjs';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() type: string = '';

  isDataLoading: boolean = true;
  data: Object = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isDataLoading = true;

    this.appService.getData(this.type)
    .pipe(
      delay(1000),
      finalize(() => this.isDataLoading = false)
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
