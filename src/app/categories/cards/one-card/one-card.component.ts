import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrls: ['./one-card.component.css']
})
@Injectable()
export class OneCardComponent implements OnInit {

  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  
  id:any ;
  name:any;
  Card:any;

  constructor(private service:SharedService,private activeRoute: ActivatedRoute) {
    this.routeSubscription = activeRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.name = queryParam['name'];
      },
      (error) => {
        alert(error.error);
      }
    );
   }
   
  ngOnInit(): void {
    this.loadCard();
  }

  loadCard(){
    this.service.getCardById(this.id).subscribe(data=>{
      this.Card=data;
    },
    (error) => {
      alert(error.error);
    })
  }



}
