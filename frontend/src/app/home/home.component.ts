import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myData: any;
  //myData$:any;
  columnsToDisplay = ['user', 'createdAt', '_id'];

  constructor (private myDataService: MyDataService) {}

  /*ngOnInit():void {
    this.myData$ = this.myDataService.getData().pipe(tap((data) => (this.myData = data)));
  }*/
  ngOnInit(): void {
    this.myDataService.getData()
      .pipe(tap((data) => {
        this.myData = data;
        console.log(this.myData);
      }))
      .subscribe();
  }
}

