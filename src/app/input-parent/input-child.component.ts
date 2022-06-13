import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-input-child',
  template:`
  <ng-container *ngTemplateOutlet="template; context:{name:'Raj',friends:['Rakesh','Roshan']}">
  </ng-container>
  
  `
})
export class InputChildComponent implements OnInit {
@Input() template:TemplateRef<any>
  constructor() { }

  ngOnInit() {
  }

}