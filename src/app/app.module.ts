import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './component/country-list/country-list.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FilterPipe } from './core/pipe/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: LayoutComponent }]),
  ],
  declarations: [AppComponent, SearchBarComponent, LayoutComponent, FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
