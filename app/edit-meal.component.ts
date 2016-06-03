import {Component} from 'angular2/core';
import { Meal } from './Meal.model';

@Component ({
  selector: 'edit-Meal',
  inputs: ['meal'],
  template: `
  <div class='edit-form col-sm-4' ng-show="showme">
  <h3>Edit Info:</h3>
  <input [(ngModel)]='meal.name' class = 'form-control'/>
  <input [(ngModel)]='meal.details' class = 'form-control'/>
  <input [(ngModel)]='meal.calories' class = 'form-control'/>
  <button ng-click="showme = !showme">Close</button>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;

}
