import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44302/api";
private currentUserSubject: BehaviorSubject<any>;
public currentUser: Observable<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }
   public get currentUserValue(): any {
    return this.currentUserSubject.value;
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

  login(val:any) {
    return this.http.post<any>(this.APIUrl+'/users/login', val)
        .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
