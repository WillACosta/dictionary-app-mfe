import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { GreetingComponent } from './greeting.component'

@NgModule({
  declarations: [GreetingComponent],
  imports: [CommonModule],
  exports: [GreetingComponent]
})
export class GreetingModule {}
