import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './shared/models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPortfolio(uname: String) {
    return this.http.get("http://localhost:8080/api/portfolios/" + uname);
  }
}
