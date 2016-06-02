import {Component} from 'angular2/core';
import { Joint } from './joint.model';

@Component ({
  selector: 'edit-joint',
  inputs: ['joint'],
  template: `
  <div class='edit-form'>
  <h3>Edit Info:</h3>
  <input {(ngModel)}='joint.name' class = 'col-xs-4 input-lg'/>
  <input {(ngModel)}='joint.speciality' class = 'col-xs-4 input-lg'/>
  <input {(ngModel)}='joint.address' class = 'col-xs-4 input-lg'/>
  <select {(ngModel)}='joint.cost' class='form-control'>
  <option value="cheap">Cheap</option>
  <option value="reasonable">Reasonable</option>
  <option value="expensive">Expensive</option>
  </select>
  `
})

export class EditJointComponent {
  public joint: Joint;
}
