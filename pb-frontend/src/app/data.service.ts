import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './shared/models/portfolio.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPortfolio(uname: string) {
    return this.http.get("http://localhost:8080/api/portfolios/" + uname);
  }

  createPortfolio(portfolio: Portfolio) {
    return this.http.post("http://localhost:8080/api/portfolios", portfolio);
  }

  updatePortfolio(portfolio: Portfolio, uname: string) {
    return this.http.put("http://localhost:8080/api/portfolios/" + uname, portfolio);
  }
}
