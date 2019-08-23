import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './state/app.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {HttpModule} from '../../projects/http/src/lib/http.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      AppState
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
