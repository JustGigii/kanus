import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountEntity, AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-idf-login',
  templateUrl: './idf-login.component.html',
  styleUrls: ['./idf-login.component.scss']
})
export class IdfLoginComponent implements OnInit {

  @Output() userLogged = new EventEmitter();

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account);
          this.userLogged.emit(res.account);
          sessionStorage.setItem("isUserLogged", 'true');
        }
      }
    );
  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  logIn() {
    this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account)
    // });
  }

  logOut() {
    this.msalService.logout();
  }

}
