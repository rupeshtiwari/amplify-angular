import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent, SecureComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
