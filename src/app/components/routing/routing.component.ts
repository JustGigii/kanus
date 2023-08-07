import { Component } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {
  title = 'kanus';

  user!: AccountInfo;
  currentPage: string = 'home';

  constructor() {}
  ngOnInit(): void {
    let acount =sessionStorage.getItem('account')
    if(acount == null)
     return;
    
     this.user = JSON.parse(acount)
    
  }

  changePage(page: string) {
    this.currentPage = page;
  }

  setUser(user: AccountInfo) {
    console.log(user);
    this.user = user;
  }

}
