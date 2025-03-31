import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  paymentMethod!: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    const reservation = {
      paymentMethod: this.paymentMethod
    };
    this.http.post('/api/reservations', reservation).subscribe(response => {
      console.log(response);
    });
  }
}
