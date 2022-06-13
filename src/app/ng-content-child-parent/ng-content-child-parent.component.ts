import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-child-parent',
  template: `
    <app-content-child-child>
      <ng-template #block let-character let-friends="friends">
        <p>Name: {{character}}</p>
        <p>Best Friends:</p>
        <ul>
          <li *ngFor="let friend of friends"> {{friend}}</li>
        </ul>
      </ng-template>
    </app-content-child-child>

    <hr>
    
    <app-content-child-child></app-content-child-child>
  `,
})
export class NgContentChildParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
