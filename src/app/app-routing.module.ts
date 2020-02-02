import { EditSpoilerComponent } from './pages/edit-spoiler/edit-spoiler.component';
import { CreateSpoilerComponent } from './pages/create-spoiler/create-spoiler.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpoilerListComponent } from './pages/spoiler-list/spoiler-list.component';


const routes: Routes = [
  
  { path: '', component: SpoilerListComponent },
  { path: 'spoilers', component: CreateSpoilerComponent},
  { path: 'spoilers/:id', component: EditSpoilerComponent},
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
