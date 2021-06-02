import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private service:SharedService, private router: Router, public dialog: MatDialog) { }

  CategoriesList: any=[];
  newDynamic: any = {}; 

  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];
  
  name: string | undefined;

  ngOnInit(): void {
    this.newDynamic = {name: ""};  
    this.refreshCategoriesList();
  }

  openDialog(dataItem: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '450px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name=result;
      dataItem.name=this.name;
      this.service.updateCategories(dataItem).subscribe(data=>{
        alert(data.toString());
        this.refreshCategoriesList();
      })
    });
    
  }


  refreshCategoriesList(){
    this.service.getCategoriesList().subscribe(data=>{
      this.CategoriesList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  addRow() {    
    var val = {name: this.newDynamic.name};
      this.service.addCategory(val).subscribe(res=>{
        alert(res.toString());
      });    
      return true;  
  } 
  editCategory(dataItem:any){
    this.name=dataItem.name;
    this.openDialog(dataItem);
  }
  deleteCategory(id:number){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(id).subscribe(data=>{
          alert(data.toString());
          this.refreshCategoriesList();
        })
      }
    }
  
  FilterFn(){
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoriesList = this.CategoryListWithoutFilter.filter(function (el: { name: { toString: () => string; }; }){
        return el.name.toString().toLowerCase().includes(
          CategoryNameFilter.trim().toLowerCase()
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

  goToCategoryCards(id:number, name:string){
    this.router.navigate(
      ['categories', id],{
        queryParams:{
            'name': name
        }
    })
  }
}
