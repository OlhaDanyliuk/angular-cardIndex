import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './categories/cards/cards.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';
import { FormsModule } from '@angular/forms';
import { ShowCategoryCardsComponent } from './categories/show-category-cards/show-category-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ShowCardsComponent,
    CategoriesComponent,
    ShowCategoriesComponent,
    ShowCategoryCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents:[ShowCardsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
