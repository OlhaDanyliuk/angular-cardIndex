import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './categories/cards/cards.component';
import { OneCardComponent } from './categories/cards/one-card/one-card.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';
import { ShowCategoryCardsComponent } from './categories/show-category-cards/show-category-cards.component';

const routes: Routes = [
  {path:'',component:CardsComponent},
  {path:'cards', children:[{path:'', component:ShowCardsComponent},{ path: ':id', component: OneCardComponent }, ]},
  {path: 'categories',children:[{ path:'', component: ShowCategoriesComponent},{ path: ':id', component: ShowCategoryCardsComponent }, ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
