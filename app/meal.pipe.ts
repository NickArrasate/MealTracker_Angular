import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'mealPipe',
  pure: false,
})

export class caloriePipe implements PipeTransform {
  transform(input: Meal[], args){
    var desiredMeal = args[0];
    if(desiredMeal === 'high'){
      return input.filter((meal)=>{
        return parseInt(meal.calories) >= 500;
      });
    } else if(desiredMeal === 'low'){
      return input.filter((meal)=>{
        return parseInt(meal.calories) <=499;
      })
    } else {
      return input;
    }
  }
}
