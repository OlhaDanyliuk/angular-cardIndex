import { Component, OnInit } from '@angular/core';
import{} from ''

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private service:SharedService) { }
  CardsList: any=[];


  ngOnInit(): void {
  }

  refreshCardsList(){
    this.service.get
  }
}
