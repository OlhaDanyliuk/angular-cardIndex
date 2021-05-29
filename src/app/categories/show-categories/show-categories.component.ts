import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoriesList: any=[];
  
  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCategoriesList();
  }

  refreshCategoriesList(){
    this.service.getCategoriesList().subscribe(data=>{
      this.CategoriesList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoriesList = this.CategoryListWithoutFilter.filter(function (el: { Id: { toString: () => string; }; Name: { toString: () => string; }; }){
        return el.Id.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          CategoryNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.CategoriesList = this.CategoryListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
