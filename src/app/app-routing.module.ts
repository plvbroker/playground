import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsapComponent } from './components/gsap/gsap.component';

const routes: Routes = [
  {
    path:'',
    component:GsapComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
