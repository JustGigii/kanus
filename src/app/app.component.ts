import { Component, OnInit } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';
import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kanus';

  user!: AccountInfo;
  currentPage: string = 'home';

  constructor(private msalService: MsalService) {}
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account);
          this.user = res.account;
        }
      }
    );
    this.login();
  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  login() {
    this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account)
    // });
  }

  logOut() {
    this.msalService.logout();
  }

  changePage(page: string) {

  }

  setUser(user: AccountInfo) {
    console.log(user);
    this.user = user;
  }
}
