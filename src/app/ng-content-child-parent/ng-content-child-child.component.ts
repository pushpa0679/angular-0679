import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-child-child',
  template: `
  <ng-template #default let-character let-friends="friends">
    <p>{{character}}'s best friends are {{friends[0]}} and {{friends[1]}}.</p>
  </ng-template>

  <ng-container *ngTemplateOutlet="template || default; 
                context:{$implicit:'Harry', friends:['Ron', 'Hermione']}">
  </ng-container>
`,
})
export class NgContentChildChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
