import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCardComponent } from './categories/cards/edit-card/edit-card.component';
import { CardsComponent } from './categories/cards/cards.component';
import { OneCardComponent } from './categories/cards/one-card/one-card.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';
import { ShowCategoryCardsComponent } from './categories/show-category-cards/show-category-cards.component';
import { AddCardComponent } from './categories/cards/add-card/add-card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:'',component:ShowCategoriesComponent},

  {path:'cards', children:[
    {path:'', component:ShowCardsComponent},{ path: 'create', component: AddCardComponent, canActivate: [AuthGuard] },
    { path: ':id', component: OneCardComponent },{ path: 'edit/:id', component: EditCardComponent, canActivate: [AuthGuard] } 
  ]},

  {path: 'categories',children:[{ path:'', component: ShowCategoriesComponent},{ path: ':id', component: ShowCategoryCardsComponent }, ]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
