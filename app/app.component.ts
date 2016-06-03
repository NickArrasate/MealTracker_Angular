import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent} from './new-meal.component';
import {MealDisplayComponent} from './meal-display.component';
import { caloriePipe } from './meal.pipe';
import { EditMealComponent} from './edit-meal.component'
@Component ({
  selector: 'my-app',
  inputs: ['meals'],
  pipes: [caloriePipe],
  directives: [NewMealComponent, MealDisplayComponent, EditMealComponent],
  template: `
  <div class='container'>
  <h2>Track your meals.</h2>
  <div class = 'row'>
  <new-meal-display (onNewMeal)='storeMeals($event)'></new-meal-display>
  <select (change)='onChange($event.target.value)' class ='col-xs-2 filter'>
  <option value="all">Show All</option>
  <option value='low'>Show Low Calorie Meals
  <option value = 'high'>Show High Calorie Meals</option>
  </select>
  </div>
  <div class = 'row'>
  <meal-display
  *ngFor = '#currentMeal of meals | mealPipe: filterMeal'
  (click)='mealClicked(currentMeal)'
  [class.selected]='currentMeal === selectedMeal'
  [meal]='currentMeal'
  ></meal-display>

  <edit-Meal *ngIf='selectedMeal' [meal]='selectedMeal'></edit-Meal>
  </div>
  </div>
  `
})

export class AppComponent{
  public meals = [];
  public filterMeal: string = 'all';
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;

  constructor(){
    this.onMealSelect = new EventEmitter();
  };

  storeMeals(newMeal: Meal): void{
    this.meals.push(newMeal);
    console.log(this.meals);
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    console.log(clickedMeal);
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(filterOption){
    this.filterMeal = filterOption;
  }
}
