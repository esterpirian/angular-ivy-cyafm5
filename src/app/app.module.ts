import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { getService } from './services/getService';
import { UserService } from './services/userService';
import { ListComponent } from './components/listView.component';
import { AppRoutingModule } from './app-routing.module';

import {MaterialExampleModule} from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByAreaPipe } from './pipe/searchProperty.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers/reducers';

import { UserEffects } from './effects/user.effect';
@NgModule({
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    MaterialExampleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  declarations: [AppComponent, HelloComponent, ListComponent, FilterByAreaPipe],
  providers: [UserService, getService],
  bootstrap: [AppComponent],
})
export class AppModule {}
