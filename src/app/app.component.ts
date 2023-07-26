import { MsalService } from '@azure/msal-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanus';

  currentPage: string = 'home';

  constructor(private msalService: MsalService) {}

  login() {
  }
}
