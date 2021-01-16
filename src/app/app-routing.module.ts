import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { StoreComponent } from './components/store/store.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
