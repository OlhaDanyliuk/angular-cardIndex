import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
@Injectable()
export class AddCardComponent implements OnInit {

  
  Card:any;

  private querySubscription: Subscription;
  constructor(private service:SharedService,private activeRoute: ActivatedRoute, private router: Router) {
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.Card.categoryId = queryParam['id'];
      }
  );
   }
   
  ngOnInit(): void {
    this.Card.name="";
    this.Card.text="";
  }
    
  goToCard(){
    this.router.navigate(
      ['cards', this.Card.id],{
        queryParams:{
            'name': this.Card.name
        }
    })
  }

  addClick(){
    var val = {
      Name:this.Card.name,
      Text:this.Card.text,
      CategoryId:this.Card.categoryId
    };
    // this.service.addCard(val).subscribe(res=>{
    //   alert(res.toString());
    // })
    this.goToCard();
  }

  cancelClick(dataItem:any){
    this.router.navigate(['cards']);
  }

}
