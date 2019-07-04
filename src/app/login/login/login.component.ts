import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) {

  }

  ngOnInit() {
  }


  public signUpUser(event) {
    event.preventDefault();
    console.log(event);

  }

  public closeLogin() {
    this.route.navigate(['/home']);
  }

}
