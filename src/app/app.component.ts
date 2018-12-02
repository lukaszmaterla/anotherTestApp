import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  default = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCuC_vZ2D3bUzuPCRAVjTdd8WqgHr5O3_E',
      authDomain: 'ng-recipe-book-lm.firebaseapp.com',
    });
  }

  onNavigate(name: string) {
    console.log(name);
    this.default = name;
  }
}

