import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './state/app.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {HttpModule} from '../../projects/http/src/lib/http.module';
import {AuthModule} from './auth/auth.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

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
    HttpModule,
    AuthModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
