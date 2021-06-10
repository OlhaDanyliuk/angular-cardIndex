import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './model/user';
import { TokensService } from './token/tokens.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44302/api";

  constructor(private http:HttpClient, private tokensService: TokensService) {
   }

  getCategoriesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/categories');
  }
  
  getCategoryById(val:any){
    return this.http.get(this.APIUrl+'/categories/'+val);
  } 
  getCardsByCategoryId(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/categories/'+val+'/cards');
  }
  addCategory(val:any){
    return this.http.post(this.APIUrl+'/categories/create',val);
  }

  updateCategories(val:any){
    return this.http.put(this.APIUrl+'/categories/update',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/categories/remove/'+val);
  }

  getCardList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/cards');
  }
  getCardById(val:any){
    return this.http.get(this.APIUrl+'/cards/'+val);
  }
  addCard(val:any){
    return this.http.post(this.APIUrl+'/cards/create',val);
  }

  updateCard(val:any){
    return this.http.put(this.APIUrl+'/cards/update',val);
  }

  deleteCard(val:any){
    return this.http.delete(this.APIUrl+'/cards/remove/'+val);
  }

}
