import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { TokensService } from './token/tokens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cardIndex';
  currentUser: any;
  constructor(private router:Router,
    private authenticationService: TokensService){}
  cards(){
    this.router.navigate(['/cards']);
  }
  logout(){
    this.authenticationService.logout();
  }
}
