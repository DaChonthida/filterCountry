import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryListComponent } from './component/country-list/country-list.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FilterPipe } from './core/pipe/filter.pipe';
import { CountryListTwoComponent } from './component/country-list-two/country-list-two.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: LayoutComponent }]),
  ],
  declarations: [
    AppComponent,
    CountryListComponent,
    LayoutComponent,
    FilterPipe,
    CountryListTwoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
