import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './categories/cards/cards.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';
import { FormsModule } from '@angular/forms';
import { ShowCategoryCardsComponent } from './categories/show-category-cards/show-category-cards.component';
import { OneCardComponent } from './categories/cards/one-card/one-card.component';
import { AddEditCategoriesComponent } from './categories/add-edit-categories/add-edit-categories.component';
import { EditCardComponent } from './categories/cards/edit-card/edit-card.component';
import { AddCardComponent } from './categories/cards/add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ShowCardsComponent,
    CategoriesComponent,
    ShowCategoriesComponent,
    ShowCategoryCardsComponent,
    OneCardComponent,
    AddEditCategoriesComponent,
    EditCardComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  entryComponents:[ShowCardsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
