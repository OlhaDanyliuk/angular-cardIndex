import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  constructor(private service:SharedService) { }
  CardsList: any=[];


  ngOnInit(): void {
    this.refreshCardsList();
  }

  refreshCardsList(){
    this.service.getCardList().subscribe(data=>{
      this.CardsList=data;
    })
  }


}
