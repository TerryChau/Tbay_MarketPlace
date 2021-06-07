import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { EntrydetailComponent } from './entrydetail/entrydetail.component';
import { NewentryComponent } from './newentry/newentry.component';

import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes:Routes=[
  {path: '', redirectTo: 'gallery', pathMatch:'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'detail/:id', component: EntrydetailComponent },
  {path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent },
  {path: 'list-sale', component: ListSaleComponent },
  {path: 'purchase-history', component: PurchaseHistoryComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    GalleryComponent,
    EntrydetailComponent,
    NewentryComponent,
    LoginComponent,
    AboutComponent,
    ListSaleComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
