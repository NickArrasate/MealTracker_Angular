import {Pipe, PipeTransform} from 'angular2/core';
import { Joint } from './joint.model';

@Pipe({
  name: 'costPipe',
  pure: false,
})

export class costPipe implements PipeTransform {
  transform(input: Joint[], args){
    var desiredCostState = args[0];
    if(desiredCostState === 'cheap'){
      return input.filter((joint)=>{
        return joint.cost === 'cheap';
      });
    } else if (desiredCostState === 'reasonable'){
      return input.filter((joint)=>{
        return joint.cost === 'reasonable';
      })
    } else if (desiredCostState === 'expensive'){
      return input.filter((joint)=>{
        return joint.cost === 'expensive';
      })
    } else {
      return input;
    }
  }
}
