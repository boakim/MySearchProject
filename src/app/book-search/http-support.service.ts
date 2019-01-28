import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

@Injectable()
export class HttpSupportService {

  books: IBook[];
  constructor(private http: HttpClient) { }

  getJsonData(url:string, name:string) {
    this.http.get<IBook[]>(`${url}${name}`)
        .subscribe(res => {
           this.books = res;
           console.log(this.books);
        });
  }
}