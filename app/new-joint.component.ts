import {Component, EventEmitter} from 'angular2/core';
import { Joint } from './joint.model';


@Component ({
  selector: 'new-joint-display',
  outputs: ['onNewJoint'],

  template:`
  <div class='row titles'>
  <div class='col-sm-4'>
  <h2>Add a new resaurant</h2>
  <input class='form-control' placeholder ='Name' #nameForm/>
  <input class='form-control' placeholder ='Speciality' #specForm/>
  <input class='form-control' placeholder ='Address' #addyForm/>
  <select class='form-control' #priceForm>
  <option value="cheap">Cheap</option>
  <option value="reasonable">Reasonable</option>
  <option value="expensive">Expensive</option>
  </select>
  <button (click)='addJoint(nameForm, specForm, addyForm, priceForm)'>Submit</button>
  
  </div>
  </div>
  `
})

export class NewJointComponent{
  public onNewJoint: EventEmitter<Joint>;

  constructor(){
    this.onNewJoint = new EventEmitter();
  }
  addJoint(nameForm: HTMLInputElement, specForm: HTMLInputElement, addyForm: HTMLInputElement, priceForm: HTMLInputElement){
    var newJoint = new Joint(nameForm.value, specForm.value, addyForm.value, priceForm.value);

    this.onNewJoint.emit(newJoint);
    nameForm.value = '';
    specForm.value = '';
    addyForm.value = '';
    priceForm.value = 'Reasonable';
  }
}
