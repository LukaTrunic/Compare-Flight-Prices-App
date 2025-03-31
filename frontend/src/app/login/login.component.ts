import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  }

  LoginUser(){
    this.http.get('http://localhost:3000/api/v1/users').subscribe((response: any) => {
      const user = response.find((u: any) => u.email === this.email && u.password === this.password);
      if(user){
        console.log("Welcome");
        // Add your code for successful login here
      }
      else{
        console.log("Invalid login credentials");
        // Add your code for failed login here
      }
    });
  }
}