import { Component } from '@angular/core';

@Component({
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  title = 'user-details';

  constructor() {
    console.log('start')
  }
}
