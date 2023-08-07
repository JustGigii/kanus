import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarInfoComponent } from './components/jar-info/jar-info.component';
import { AppComponent } from './app.component';
import { RoutingComponent } from './components/routing/routing.component';

const routes: Routes = [
  { path: 'shhh', component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
