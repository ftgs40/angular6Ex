import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent }      from './member/member.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'home', component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ContentComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}