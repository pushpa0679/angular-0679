import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
    <ng-template #block>Condition is false</ng-template>

    <ng-container *ngIf="condition; else block">Condition is true</ng-container>
  `
})
export class NgifComponent  {
  condition = false;
}
