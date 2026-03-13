import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './Components/header/header';
import { Home } from './Components/home/home';
import { Footer } from './Components/footer/footer';

@NgModule({
  declarations: [App, Header, Home, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  // not known bootstrap => its a component about what first will be loaded when the app starts
})
export class AppModule {}
