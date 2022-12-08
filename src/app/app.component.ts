import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewsApp';
  /* constructor() {

  }
 */
  onActivate(event: Event) {
    window.scroll(0, 0);
  }
}
