import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { ArchivePageComponent } from './components/pages/archive-page/archive-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news/news.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { HttpClientModule } from "@angular/common/http";


//COMPONENTS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    ArchivePageComponent,
    NewsListComponent,
    NewsComponent,
    NavBarComponent,
    NewsFormComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
