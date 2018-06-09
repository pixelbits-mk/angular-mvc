import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'SFS.Web.UI.Internal/Admin', pathMatch:'full'}, 
  { path: 'SFS.Web.UI.Internal/Admin', loadChildren: './info/info.module#InfoModule'}, 
  { path: 'SFS.Web.UI.Internal/Admin/Index', redirectTo: 'SFS.Web.UI.Internal/Admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
