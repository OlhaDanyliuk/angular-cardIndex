import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './categories/cards/cards.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';

const routes: Routes = [
  {path:'',component:CardsComponent},
  {path:'cards', component:ShowCardsComponent},
  {path: 'categories', component:ShowCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
