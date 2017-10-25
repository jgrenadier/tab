import { Component } from '@angular/core';
// import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <router-outlet></router-outlet>
  `
//styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //constructor(db:AngularFireDatabase){
      //console.log(db);
  //}
}
