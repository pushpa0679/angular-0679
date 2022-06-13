import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
  <ng-template #template>Inside ng template</ng-template>
  
  <ng-container *ngTemplateOutlet="template"></ng-container>
`,
})
export class SimpleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
