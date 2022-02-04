import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
// import { YogaImgComponent } from './yoga-img/yoga-img.component';
import { HindiYogaComponent } from './hindi-yoga/hindi-yoga.component';
import { EnglishYogaComponent } from './english-yoga/english-yoga.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
	// {path:'yoga-img', component:YogaImgComponent},
	{ path: '', component:EnglishYogaComponent}, 
	{path:'Navbar', component:NavbarComponent},
	{path:'HindiYoga', component:HindiYogaComponent},
	{path:'EnglishYoga', component:EnglishYogaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

