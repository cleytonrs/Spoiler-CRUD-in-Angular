import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpoilerListComponent } from './pages/spoiler-list/spoiler-list.component';


const routes: Routes = [
  { path: '', component: SpoilerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
