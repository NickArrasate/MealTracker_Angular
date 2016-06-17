import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal-display',
  outputs: ['onNewMeal'],
  template:`
  <div class='col-sm-4'>
  <h3>Add a new meal</h3>
  <input class='form-control' placeholder ='Name' #nameForm/>
  <input class='form-control' placeholder ='Description' #descForm/>
  <input class='form-control' placeholder ='Calories' #calForm/>
  <button class ='btn-success'(click)='addMeal(nameForm, descForm, calForm)'>Submit</button>
  </div>
  `
})

export class NewMealComponent{
  public onNewMeal: EventEmitter<Meal>;
  constructor(){
  this.onNewMeal = new EventEmitter();
  }
  addMeal(nameForm: HTMLInputElement, descForm: HTMLInputElement, calForm: HTMLInputElement){
  var newMeal = new Meal(nameForm.value, descForm.value, calForm.value);
  this.onNewMeal.emit(newMeal);
  nameForm.value = '';
  descForm.value = '';
  calForm.value = '';
  }
}
