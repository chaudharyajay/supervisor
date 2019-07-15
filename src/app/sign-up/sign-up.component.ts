import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../services/userservice.service'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;
  signUpData;

  constructor(private service: UserserviceService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      fullName: new FormControl('', 
                                [
                                  Validators.required,
                                  Validators.pattern('[a-zA-Z ]+')
                                ]),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      conPassword: new FormControl('', Validators.required)
    });

    this.dummy();
  }

  userSignUp(userData : FormGroup){
    this.signUpData = userData.value;
    console.log(this.signUpData);

    this.service.signUp(this.signUpData)
    .subscribe(
      data => {
        console.log(data);
      }
    )

    this.resetForm(userData);
  }


  dummy() {
    let data={"name": "morpheus", "job": "leader"}
    this.service.dummy(data)
    .subscribe( 
      data => {
        console.log(data['name']);
      }
    )
  }

  resetForm(userData) {
    userData.reset();
  }
}
