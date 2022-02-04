import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { YogaImgComponent } from './yoga-img/yoga-img.component';
import { HttpClientModule, HttpResponse, HttpParams } from '@angular/common/http';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HindiYogaComponent } from './hindi-yoga/hindi-yoga.component';
import { EnglishYogaComponent } from './english-yoga/english-yoga.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  // {path:'yoga-img', component:YogaImgComponent},
  {path:'Navbar', component:NavbarComponent},
  {path:'HindiYoga', component:HindiYogaComponent},
  {path:'EnglishYoga', component:EnglishYogaComponent}
];

 
@NgModule({
  declarations: [
    AppComponent,
    //YogaImgComponent,
    HindiYogaComponent,
    EnglishYogaComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
     RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
      NgxPageScrollModule,
      NgxPageScrollCoreModule.forRoot({duration: 2500}),  
  ],
   exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
