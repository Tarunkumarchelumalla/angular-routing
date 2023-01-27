import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutinModule, routingcomps } from './app-routin/app-routin.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutinModule],
  declarations: [AppComponent, HelloComponent, routingcomps],
  bootstrap: [AppComponent],
})
export class AppModule {}
