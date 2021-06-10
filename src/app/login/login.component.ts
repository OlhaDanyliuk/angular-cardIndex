import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import { TokensService } from '../token/tokens.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  returnUrl: string | undefined;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: TokensService
  ) { 
    if (this.authenticationService.getToken()) { 
      alert("You are already login"),
      this.router.navigate(['/categories']);
  }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }
get f() { return this.loginForm.value; }

onSubmit() {

  if (this.loginForm.invalid) {
      return;
  }
  var user={
    Email: this.f.email,
    Password: this.f.password
  }
  this.authenticationService.login(this.f.email, this.f.password)
      .subscribe(data=>{
        alert("Login successful!"),
        this.router.navigate(['/categories'])
      },
      (error) => {
        alert(error.error);
      })
}

signup(){
  this.router.navigate(['/signup']);
}
      
}
