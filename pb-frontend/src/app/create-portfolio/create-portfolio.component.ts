import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Portfolio } from '../shared/models/portfolio.model';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss']
})
export class CreatePortfolioComponent implements OnInit {

  portfolioForm: FormGroup;
  submitted = false;
  success = false;
  message: string;
  uname: string;

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.portfolioForm = this.formBuilder.group({
      name: ['', Validators.required],
      uname: ['', Validators.required],
      header: ['', Validators.required],
      theme: ['', [Validators.required, Validators.pattern('[1-4]{1}')]],
      pin: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      description: ['', [Validators.required, Validators.min(30), Validators.max(200)]],
      skills: this.formBuilder.array([
      ]),
      achievements: this.formBuilder.array([
      ]),
      projects: this.formBuilder.array([
      ])
    });
  }

  createSkill(): FormGroup {
    return this.formBuilder.group({
      skillname: ['', Validators.required]
    });
  }

  createAchievement(): FormGroup {
    return this.formBuilder.group({
      achievement: ['', Validators.required]
    })
  }

  createProject(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  get skills() {
    return this.portfolioForm.get('skills') as FormArray;
  }

  get achievements() {
    return this.portfolioForm.get('achievements') as FormArray;
  }

  get projects() {
    return this.portfolioForm.get('projects') as FormArray;
  }

  addSkill() {
    this.skills.push(this.createSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  addAchievement() {
    this.achievements.push(this.createAchievement());
  }
  
  removeAchievement(i: number) {
    this.achievements.removeAt(i);
  }

  addProject() {
    this.projects.push(this.createProject());
  }

  removeProject(i: number) {
    this.projects.removeAt(i);
  }

  onSubmit() {
    this.submitted = true;

    if (this.portfolioForm.invalid) {
      return;
    }

    var portfolio = new Portfolio().deserialize(this.portfolioForm.value);

    console.log(portfolio);

    this.data.createPortfolio(portfolio).subscribe(data => {
      if (data != null) {
        var p = new Portfolio().deserialize(data);
        if (p.id > 0) {
          this.success = true;
          this.message = 'Profile created successfully';
          this.uname = 'http://localhost:4200/portfolio/' + p.uname;
        }
      }
    }, (err: HttpErrorResponse) => {
      this.success = false;
      if (err.error instanceof Error) {
        //A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
        this.message = 'Unable to create profile. Please try again later';
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
