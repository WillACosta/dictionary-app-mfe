import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { GreetingModule } from './presentation/greeting/greeting.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    GreetingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
