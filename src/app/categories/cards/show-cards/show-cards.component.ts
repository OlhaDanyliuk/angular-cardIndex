import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) {
   }
  CardsList: any=[];


  ngOnInit(): void {
    this.refreshCardsList();
  }

  refreshCardsList(){
    this.service.getCardList().subscribe(data=>{
      this.CardsList=data;
    })
  }
  editCard(id:number, name: string){
    this.router.navigate(
      ['cards/edit', id],{
        queryParams:{
            'name': name
        }
    })
    
  }
  deleteCard(id:number){
    if(confirm('Are you sure??')){
    this.service.deleteCard(id).subscribe(data=>{
        alert(data.toString());
        this.refreshCardsList();
      })
    }
  }



}
