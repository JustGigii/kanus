import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JarInfoComponent } from './components/jar-info/jar-info.component';

import { HttpClientModule } from '@angular/common/http';
import { StarInfoComponent } from './components/star-info/star-info.component';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { HomeComponent } from './components/home/home.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'c25247c6-3cd6-4a30-8af2-7262a89b31c4',
      redirectUri: 'http://localhost:4200',

    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    JarInfoComponent,
    StarInfoComponent,
    HomeComponent
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
