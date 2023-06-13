import { Component } from '@angular/core'

@Component({
  selector: 'dictionary-app-mfe-root',
  template: `
    <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="dictionary-mfe">DictionaryMfe</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'shell'
}
