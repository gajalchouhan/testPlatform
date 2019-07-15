import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private loginServ: LoginService) { }


  public loginUser(event) {
    event.preventDefault();
    const lTarget = event.target;

    // storing login user details here
    const loginUserName = lTarget.querySelector('#lusername').value;
    const loginPassword = lTarget.querySelector('#lpassword').value;

    let req: any = {
      "email": loginUserName,
      "password": loginPassword
    }

    this.loginServ.loginUserDetails(req).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.route.navigate(['/home']);
          this.loginServ.setLoggedIn(true);
        }
      }
    ), err => {
      console.log(err);
    }
  }

  // this is signup function.
  public signUpUser(event) {
    event.preventDefault()
    const target = event.target;
    var errors = [];

    // storing all the user value here.
    const userName = target.querySelector('#userName').value;
    const contactNumber = target.querySelector('#contactNumber').value;
    const emailId = target.querySelector('#emailId').value;
    const password: string = target.querySelector('#password').value;
    const cPassword: string = target.querySelector('#confirmPassword').value;

    //check password and confirm password is correct or not.
    if (password !== cPassword) {
      errors.push("Password do not match");
    }

    // more validation
    if (errors.length > 0) {
      console.log(errors);
    } else {

      //this user details is in object form which I have to send to backend side.
      let req = {
        "userName": userName,
        "contactNumber": contactNumber,
        "email": emailId,
        "password": password,
        "confirmPassword": cPassword
      }

      this.loginServ.registerUser(req).subscribe(
        res => {
          this.route.navigate(['/home']);
        }
      ), err => {
        console.log(err);
      }
    }


  }

  //when user try to close the signup and login window.
  public closeLogin() {
    this.route.navigate(['/home']);
  }

  ngOnInit() {
  }

}
