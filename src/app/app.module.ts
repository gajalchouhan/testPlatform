import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ChallengesModule } from './challenges/challenges.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    LoginModule,
    HomeModule,
    ChallengesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
