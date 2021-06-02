import { Component, Injectable, Input, OnInit } from '@angular/core';
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

  categoryId:number | undefined
  cardName:string | undefined;
  cardText:string | undefined;

  private querySubscription: Subscription;
  constructor(private service:SharedService,private activeRoute: ActivatedRoute, private router: Router) {
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.categoryId = Number(queryParam['id']);
      }
  );
   }
   
  ngOnInit(): void {
  }
    
  goToCards(){
    this.router.navigate(['categories', this.categoryId])
  }

  addClick(){
    var val = {
      Name:this.cardName,
      Text:this.cardText,
      CategoryId:this.categoryId
    };
    this.service.addCard(val).subscribe(res=>{
      alert(res.toString());
    })
    this.goToCards();
  }

  cancelClick(){
    this.router.navigate(['cards']);
  }

}
