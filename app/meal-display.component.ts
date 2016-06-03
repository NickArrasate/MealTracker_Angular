import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import { EditMealComponent} from './edit-meal.component';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
  <div class='card'>
    <p class='col-xs-4 mealDetails'><span class = 'titleSpan'>Meal:</span> {{meal.name}}</p>
    <p class='col-xs-6 mealDetails'><span class = 'titleSpan'>Details:</span> {{meal.details}}</p>
    <p class='col-xs-4 mealDetails'><span class = 'titleSpan'>Calories:</span> {{meal.calories}}</p>
  </div>
  <edit-meal class='row'></edit-meal>
  `
})

export class MealDisplayComponent{

}
