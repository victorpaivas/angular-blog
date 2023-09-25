import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { UltimasNoticiasComponent } from './components/ultimas-noticias/ultimas-noticias.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component: ContentComponent
  },
  {
    path:'content/:id',
    component: UltimasNoticiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
