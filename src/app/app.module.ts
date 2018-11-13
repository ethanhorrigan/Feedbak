import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from './sidebar/sidebar.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeedComponent } from './feed/feed.component';
import {
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatListModule
} from '@angular/material';
import { NewComponent } from './new/new.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    NewComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    SidebarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
