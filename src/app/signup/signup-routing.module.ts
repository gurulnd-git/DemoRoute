import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component'
import { Routes, RouterModule } from '@angular/router';
const routes : Routes = [
    {
      path : '',
      component : SignupComponent
    },
    {
      path : '/:id',
      component : SignupComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class SignupRoutingModule { }
