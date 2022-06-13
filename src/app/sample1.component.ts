import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  template: `
  <ng-template #templateRef let-entry="entry">My entry is {{entry | json}}</ng-template>
  <ng-container *ngTemplateOutlet="templateRef; context:{entry:entry}" ></ng-container>
  `,
})
export class Sample1Component {
  entry = {
    label: 'This is a label',
    description: 'Desc',
  };
}
