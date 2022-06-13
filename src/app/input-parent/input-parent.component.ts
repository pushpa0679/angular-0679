import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  template:
  `
  
  <ng-template #template1 let-character="name" let-friends="friends">
   <p>Name: {{character}}</p>
   <p>{{character}} Best friends are :</p>
    <ul>
      <li *ngFor="let friend of friends">
      {{friend}}
      </li>
    </ul> 
  </ng-template>

  <ng-template #template2 let-character="name" let-friends="friends">
   <p>{{character}} friends are {{friends[0]}} and {{friends[1]}}</p>
  </ng-template>

  <app-input-child  [template]=template1></app-input-child>
  <app-input-child [template]=template2></app-input-child>
  `
})
export class InputParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}