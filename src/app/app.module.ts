import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { DataService } from './services/data.service';
import { SplashComponent } from './components/splash/splash.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FactboxComponent } from './components/factbox/factbox.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosComponent } from './components/videos/videos.component';
import { PackagesComponent } from './components/packages/packages.component';
import { NewsComponent } from './components/news/news.component';
const appRoutes: Routes = [ 
  {path: '', component:NavbarComponent},
  {path:'about', component:AboutComponent},
  {path:'videos', component:VideosComponent},
  {path:'splash', component:SplashComponent},
  {path:'packages', component:PackagesComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'news', component:NewsComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'footer', component:FooterComponent},
 ]

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SplashComponent,
    SidebarComponent,
    FooterComponent,
    FactboxComponent,
    AboutComponent,
    NavbarComponent,
    VideosComponent,
    PackagesComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
