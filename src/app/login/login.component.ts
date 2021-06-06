import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  returnUrl: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: SharedService
  ) { 
  //   if (this.authenticationService.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});

// get return url from route parameters or default to '/'
//this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
  var user={
    Email: this.f.email,
    Password: this.f.password
  }
  this.authenticationService.login(user)
      .pipe(first())
      .subscribe(
          data => {
              //this.router.navigate([this.returnUrl]);
          });
}
      
}
