import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    BrowserModule,
    // Step:#3
    FormsModule,
    // #7 We want to send a post request to the server & with the post request we want to send to these data and using these data we want to create a new product in the
    // In Angular no matter which type of http request we are making the first thing which yo need todo specify the HttpClientModule
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
