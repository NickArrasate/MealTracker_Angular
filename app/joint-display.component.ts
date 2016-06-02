import {Component, EventEmitter} from 'angular2/core';
import {Joint} from './joint.model';
import { EditJointComponent} from './edit-joint.component';
@Component ({
  selector: 'joint-display',
  inputs: ['joint'],
  directives: [EditJointComponent],
  template: `

  <div class='row card'>
    <p class='col-xs-2'>{{joint.name}}</p>
    <p class='col-xs-2'>{{joint.speciality}}</p>
    <p class='col-xs-2'>{{joint.address}}</p>
    <p class='col-xs-2'>{{joint.cost}}</p>
    <edit-joint></edit-joint>
  </div>
  `
})

export class JointDisplayComponent{

}
