import { Component } from '@angular/core';
import { BackendDataService, todo } from '../backend-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  showData: boolean;
  data: todo[] = [];
  columnsToDisplay = ['airline', 'destination', 'departureDate', 'returnDate', 'price', 'availableSeats', 'flightDuration', 'numOfStopovers', 'reserve'];
  dataSource: any;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor (private web: BackendDataService) {
    this.showData = false;

    this.web.GetTodos().subscribe( x => {
      this.data = x;
      console.log(this.data);
      this.dataSource = new MatTableDataSource<todo>(this.data);
    })
  }

  reserveFlight(flight: FlightsComponent) {
    console.log('Reserving flight', flight);
    // Add code here to post reservation to MongoDB database
  }
  
}
