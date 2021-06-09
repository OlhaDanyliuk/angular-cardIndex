import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokensService } from '../token/tokens.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
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
    this.registrationForm = this.formBuilder.group({
    username:['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });
  }
get f() { return this.registrationForm.value; }

onSubmit() {

  if (this.registrationForm.invalid) {
      return this.error;
  }
  this.authenticationService.register(this.f.email, this.f.username, this.f.password, this.f.confirmPassword)
      .subscribe(data=>{
        alert("Registration successful!"),
        this.router.navigate(['/categories'])
      },
      (error) => {
        alert(error.error);
      })
}

login(){
  this.router.navigate(['/login']);
}

}
