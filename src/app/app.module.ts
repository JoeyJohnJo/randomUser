import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Modulo usado para consumir a API
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //Inclui o modulo http para ser usado no projeto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
