import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { LocalStorageModule } from '@ngx-pwa/local-storage';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UserService } from './services/user.service';
import { CreateComponent } from './components/create/create.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'create', component: CreateComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'user-review/:username', component: UserReviewComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    OverviewComponent,
    CreateComponent,
    AdminPageComponent,
    UserReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    LocalStorageModule,
    FormsModule
  ],
  providers: [
    HttpService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
