import { Component } from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title = 'Users';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  navigateToUserById(id) {
    this.router.navigate(['./', id], <NavigationExtras>{relativeTo: this.route});
  }
}
