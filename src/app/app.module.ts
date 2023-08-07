import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JarInfoComponent } from './components/jar-info/jar-info.component';
import { StarInfoComponent } from './components/star-info/star-info.component';
import { IdfLoginComponent } from './components/idf-login/idf-login.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { RoutingComponent } from './components/routing/routing.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '2ff458ca-224c-4db4-8cbc-230cee2975cf',
      redirectUri:(environment.production)? 'https://abouthupa.azurewebsites.net/shhh':'http://localhost:4200/shhh',

    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    JarInfoComponent,
    StarInfoComponent,
    HomeComponent,
    IdfLoginComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
