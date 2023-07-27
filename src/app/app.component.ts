import { Component, OnInit } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kanus';

  user!: AccountInfo;
  currentPage: string = 'stars';

  constructor() {}
  ngOnInit(): void {
  }

  changePage(page: string) {
    this.currentPage = page;
  }

  setUser(user: AccountInfo) {
    console.log(user);
    this.user = user;
  }
}
