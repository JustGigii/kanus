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
  subtitle:string = 'צינצנות:';
  image: string = '../../../assets/Image/'

  constructor() {}
  ngOnInit(): void {
    let acount =sessionStorage.getItem('account')
    if(acount == null)
     return;
    
     this.user = JSON.parse(acount)
    
  }

  changePage(page: string) {
    this.image = '../../../assets/Image/'
    this.currentPage = page;
    this.subtitle = (page==='jars')?':צנצנות:':(page==='stars')?'כוכבים:':''
    this.image +=(page==='jars')?'jar.svg':(page==='stars')?'star.svg':''
  }

  setUser(user: AccountInfo) {
    console.log(user);
    this.user = user;
  }

}
