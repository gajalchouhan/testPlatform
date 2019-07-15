import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// third party plugins or module should be import here.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// all module import here.
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ChallengesModule } from './challenges/challenges.module';
import { AppGuard } from './app.guard';

// all services are import here.
import { AppService } from './app.service';

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
  providers: [AppService, AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
