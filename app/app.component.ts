import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   <h1>Restaurant Reviews</h1>
   <div class="col-md-5">
     <restaurant-list
      [childRestaurantList]="masterRestaurantList"
      (clickSender)="showDetails($event)"
     ></restaurant-list>
    </div>
    <div class="col-md-6 col-md-offset-1">
    <restaurant-details
      [restaurant]="selectedRestaurant"
    ></restaurant-details>
    </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
    new Restaurant("Pilau", "Kenyan", "123 Kilimani, Nairobi,KE", "$"),
    new Restaurant("chris duffey", "Nigerian", "3725 MacAthur Blvd, Oakland", "$$$"),
    new Restaurant("Matooke", "Ugandan", ", Portland, UG", "$$"),
    new Restaurant("Mchemsho", "Tanzanian", "153 17th Street, Kampala, TZ", "$$$$$"),
    new Restaurant("Boerewors", "Southafrican", "523 Turake, Durban, SA", "$$"),
    new Restaurant("Mukimo", "Kenyan", "129 Ngong Road, Nairobi, KE", "$$$$"),
    new Restaurant("Githeri", "Kenyan", "532 Valley Road, Nairobi, KE", "$$")
  ];
  selectedRestaurant: Restaurant = null;
  showDetails(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
}
