import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './categories/cards/cards.component';
import { ShowCardsComponent } from './categories/cards/show-cards/show-cards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoriesComponent } from './categories/show-categories/show-categories.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ShowCategoryCardsComponent } from './categories/show-category-cards/show-category-cards.component';
import { OneCardComponent } from './categories/cards/one-card/one-card.component';
import { EditCardComponent } from './categories/cards/edit-card/edit-card.component';
import { AddCardComponent } from './categories/cards/add-card/add-card.component';
import { DialogOverviewExampleDialogComponent } from './categories/show-categories/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ShowCardsComponent,
    CategoriesComponent,
    ShowCategoriesComponent,
    ShowCategoryCardsComponent,
    OneCardComponent,
    EditCardComponent,
    AddCardComponent,
    DialogOverviewExampleDialogComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents:[ShowCardsComponent],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
