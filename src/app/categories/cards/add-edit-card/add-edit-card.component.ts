import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent implements OnInit {

  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  
  id:any ;
  name:any;
  text:any;
  Card:any;

  constructor(private service:SharedService,private activeRoute: ActivatedRoute, private router:Router) {
    this.routeSubscription = activeRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.name = queryParam['name'];
      }
    );
   }
   
  ngOnInit(): void {
    this.loadCard();
  }

  loadCard(){
    this.service.getCardById(this.id).subscribe(data=>{
      this.Card=data;
    })
  }

  editClick(){
    this.service.updateCard(this.Card).subscribe(res=>{
      alert(res.toString());
    })
    this.router.navigate(
      ['cards', this.Card.id],{
        queryParams:{
            'name': this.Card.name
        }
    })
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
