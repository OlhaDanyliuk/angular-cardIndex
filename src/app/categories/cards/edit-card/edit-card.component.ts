import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
@Injectable()
export class EditCardComponent implements OnInit {

  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  
  cardId:number | undefined ;
  cardName:string | undefined;
  cardText:string | undefined;
  Card:any;

  constructor(private service:SharedService,private activeRoute: ActivatedRoute, private router:Router) {
    this.routeSubscription = activeRoute.params.subscribe(params=>this.cardId=params['id']);
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.cardName = queryParam['name'];
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
    this.service.getCardById(this.cardId).subscribe(data=>{
      this.Card=data;
    },
    (error) => {
      alert(error.error);
    })
    
  }
  goToCard(){
    this.router.navigate(
      ['cards', this.Card.id],{
        queryParams:{
            'name': this.Card.name
        }
    })
  }

  editClick(){
    var val = {
      Id:this.Card.id,
      Name:this.Card.name,
      Text:this.Card.text,
      CategoryId:this.Card.categoryId
    };
    this.service.updateCard(val).subscribe(res=>{
      alert(res.toString());
    },
    (error) => {
      alert(error.error);
    })
    this.goToCard();
  }
  cancelClick(dataItem:any){
    this.router.navigate(
      ['cards', dataItem.id],{
        queryParams:{
            'name': dataItem.name
        }
    })
  }

}
