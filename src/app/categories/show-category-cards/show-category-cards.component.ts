import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-category-cards',
  templateUrl: './show-category-cards.component.html',
  styleUrls: ['./show-category-cards.component.css']
})
export class ShowCategoryCardsComponent implements OnInit {


  CardsList: any=[];
  categoryId!: number;
  categoryName:any;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private service:SharedService,private activeRoute: ActivatedRoute, private router: Router) {
    this.routeSubscription = activeRoute.params.subscribe(params=>this.categoryId=params['id']);
    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.categoryName = queryParam['name'];
      }
  );
   }

  ngOnInit(): void {
    this.refreshCardsList();
  }

  refreshCardsList(){
    this.service.getCardsByCategoryId(this.categoryId).subscribe(data=>{
      this.CardsList=data;
    })
  }


  goToCard(id:number, name: string){
    this.router.navigate(
      ['cards', id],{
        queryParams:{
            'name': name
        }
    })
    
  }

  addClick(){
    this.router.navigate(['cards/create'],{
      queryParams:{
          'id':this.categoryId,
          'name': this.categoryName
      }
    });
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
