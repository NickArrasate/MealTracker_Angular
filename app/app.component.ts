import {Component, EventEmitter} from 'angular2/core';
import { Joint } from './joint.model';
import { NewJointComponent} from './new-joint.component';
import {JointDisplayComponent} from './joint-display.component';
import { costPipe } from './cost.pipe';

@Component ({
  selector: 'my-app',
  inputs: ['joints'],
  pipes: [costPipe],
  directives: [NewJointComponent, JointDisplayComponent],
  template: `
  <h1>Buy Food at These Joints</h1>
  <new-joint-display (onNewJoint)='storeJoints($event)'></new-joint-display>
  <select (change)='onChange($event.target.value)' class ='filter'>
  <option value="all">Show All</option>
  <option value="cheap">Cheap</option>
  <option value="reasonable">Reasonable</option>
  <option value="expensive">Expensive</option>
  </select>
  <joint-display
  *ngFor = '#joint of joints | costPipe:filterCost'
  (click)='jointClicked(currentJoint)'
  [class.selected]='currentJoint === selectedJoint'
  [joint]='joint'
  ></joint-display>

  `
})

export class AppComponent{
  public joints = [];
  public filterCost: string = 'all';
  public selectedJoint: Joint;
  public onJointSelect: EventEmitter<Joint>;
  constructor(){};
  storeJoints(newJoint: Joint): void{
    this.joints.push(newJoint);
    console.log(this.joints);
  }
  jointClicked(clickedJoint: Joint): void {
    this.selectedJoint = clickedJoint;
    this.onJointSelect.emit(clickedJoint);
  }
  onChange(filterOption){
    this.filterCost = filterOption;
  }
}
