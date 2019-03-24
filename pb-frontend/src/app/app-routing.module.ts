import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'create-portfolio', component: CreatePortfolioComponent},
  { path: 'portfolio/:uname/edit', component: EditPortfolioComponent},
  { path: 'portfolio/:uname', component: PortfolioComponent},
  { path: 'instructions', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
