import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivePageComponent } from './components/pages/archive-page/archive-page.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'news',
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'archive',
    component: ArchivePageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
