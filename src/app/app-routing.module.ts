import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarInfoComponent } from './components/jar-info/jar-info.component';

const routes: Routes = [
  { path: 'jar', component: JarInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
