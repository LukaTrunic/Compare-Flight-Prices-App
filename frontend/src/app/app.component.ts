import { Component } from '@angular/core';
import { BackendDataService, todo } from './backend-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  showData: boolean;
  data: todo[] = [];
  columnsToDisplay = ['user', 'createdAt', '_id'];

  constructor (private web: BackendDataService){
    this.showData = false;

    this.web.GetTodos().subscribe( x => {
      this.data = x;
      console.log(this.data);
    })
  }
}
