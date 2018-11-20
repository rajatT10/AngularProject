import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRouting } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FlipkartDealsComponent } from './flipkart-deals/flipkart-deals.component';
import { AmazonDealsComponent } from './amazon-deals/amazon-deals.component';
import { MaterialModule } from './material-module';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    FlipkartDealsComponent,
    AmazonDealsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [ConfigService],
  entryComponents: [NavigationBarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
