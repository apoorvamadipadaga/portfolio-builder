import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../shared/models/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio;

  constructor(private data: DataService, private route:ActivatedRoute) { 
    this.portfolio = new Portfolio();
  }

  ngOnInit() {
    var uname = this.route.snapshot.paramMap.get('uname');
    this.data.getPortfolio(uname).subscribe(data => {
      this.portfolio = new Portfolio().deserialize(data);
      console.log(this.portfolio);
    });
  }
}
