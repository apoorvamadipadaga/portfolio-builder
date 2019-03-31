import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Portfolio } from '../shared/models/portfolio.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-delete-portfolio',
  templateUrl: './delete-portfolio.component.html',
  styleUrls: ['./delete-portfolio.component.scss']
})
export class DeletePortfolioComponent implements OnInit {
  portfolioForm: FormGroup;
  submitted = false;
  success = false;
  message: string;
  uname = this.route.snapshot.paramMap.get('uname');

  constructor(private formBuilder: FormBuilder, private data: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.portfolioForm = this.formBuilder.group({
      pin: ['', [Validators.required, Validators.pattern('[0-9]{4}')]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.portfolioForm.invalid) {
      return;
    }

    var portfolio = new Portfolio().deserialize(this.portfolioForm.value);

    console.log(portfolio);

    this.data.deletePortfolio(portfolio.pin, this.uname).subscribe(data => {
      if (data != null) {
        var response = data.toString();
        if (response == 'true') {
          this.success = true;
          this.message = 'Profile deleted successfully';
        }
      }
    }, (err: HttpErrorResponse) => {
      this.success = false;
      if (err.error instanceof Error) {
        //A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
        this.message = 'Unable to delete profile. Please try again later';
      } else {
        //Backend returns unsuccessful response codes such as 404, 500 etc.
        console.log('Backend returned status code: ', err.status);
        console.log('Response body:', err.error);
        if (err.message.includes("ConstraintViolationException")) {
          this.message = 'Username already exists';
        }
        else {
          this.message = "Internal server error. Please try again later"
        }
      }
    });
  }
}
