import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantComponent } from './restaurant.component';
import { AddReviewComponent } from './add-review.component';
import { CuisinePipe } from './cuisine.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantComponent,
    AddReviewComponent,
    CuisinePipe,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
