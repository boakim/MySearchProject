import {Component, ViewChild} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource1;
  books: IBook[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    this.http.get<IBook[]>('assets/data/book.json')
      .subscribe(res => {
        this.books = res;
        this.dataSource1 = new MatTableDataSource<IBook>(this.books);
        this.dataSource1.paginator = this.paginator;
      });
  }

}
