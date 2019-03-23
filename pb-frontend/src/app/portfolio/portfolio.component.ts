import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: Object;

  constructor(private data: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.data.getPortfolio(this.route.snapshot.paramMap.get('uname')).subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    });
  }
}
