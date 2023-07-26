import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() user!: AccountInfo;
  @Output() changePages = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePagesEmit(page: string) {
    this.changePages.emit(page);
  }

}
