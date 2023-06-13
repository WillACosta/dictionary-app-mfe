import { Route } from '@angular/router'
import { GreetingComponent } from './presentation/greeting/greeting.component'

export const appRoutes: Route[] = [
  {
    path: '',
    component: GreetingComponent,
  },
  {
    path: 'dictionary-mfe',
    loadChildren: () =>
      import('dictionary-mfe/Module').then((m) => m.RemoteEntryModule),
  },
]
