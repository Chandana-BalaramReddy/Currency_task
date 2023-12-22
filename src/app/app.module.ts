import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from './currancyomponent';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CurrencyConverterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
