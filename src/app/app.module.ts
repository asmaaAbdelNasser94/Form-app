import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoModalComponent } from './user-info-modal/user-info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    SharedModule ,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
