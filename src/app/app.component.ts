import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  default = 'recipe';

  onNavigate(name: string) {
    console.log(name);
    this.default = name;
  }
}

