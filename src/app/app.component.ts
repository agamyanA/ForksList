import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from './utils/animations';

@Component({
  selector: 'app-root',
  template: `
    <div id="page" class="routeContainer" [@routeAnimation]='getDepth(outlet)'>
      <router-outlet #outlet='outlet'></router-outlet>
    </div>
  `,
  animations: [slideAnimation]
})

export class AppComponent {
  
  getDepth(outlet: RouterOutlet) {
    return outlet.activatedRouteData['page']
  }
}