import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "cuisines",
  pure: false
})

export class CuisinePipe implements PipeTransform {
  transform(input: Restaurant[], desiredCuisine) {
    var output: Restaurant[] = [];
    if(desiredCuisine === "Kenyan") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "Kenyan") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCuisine === "Southafrican") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "Southafrican") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCuisine === "Tanzanian") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "Tanzania") {
          output.push(input[i]);
        }
      } else if (desiredCuisine === "Ugandan") {
        for(var i=0; i < input.length; i++) {
          if(input[i].specialty === "Ugandan") {
            output.push(input[i]);
          }
      }
      return output;
    } else {
      return input;
    }
  }
}
