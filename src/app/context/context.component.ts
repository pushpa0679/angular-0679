import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  template:`
  
  <ng-template #template let-character="name" let-friends="friends">
  
  <p>Name : {{character}}</p>
  <p> {{character}} best friends are :</p>
   <ul>
     <li *ngFor="let friend of friends">
     {{friend}}
     </li>
   </ul>  
  </ng-template>
  
  <ng-container *ngTemplateOutlet="template; context:{name:'Jame1',friends:['jerk1','keitch1']}"></ng-container>
  `
})
export class ContextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}