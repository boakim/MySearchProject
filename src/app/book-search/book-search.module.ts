import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatCardModule } from '@angular/material/card';

// 양방향 바인딩을 위한 FormsModule import
import { FormsModule } from '@angular/forms';

// COMPOSITION_BUFFER_MODE import
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [BookSearchMainComponent, DetailBoxComponent, ListBoxComponent, SearchBoxComponent],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class BookSearchModule { }
